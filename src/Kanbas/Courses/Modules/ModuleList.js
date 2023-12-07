import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ModuleItem from "./ModuleItem";
import { FaEllipsisV, FaBars } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./moduleReducer";
import {
  AiFillCheckCircle,
  AiOutlinePlus,
  AiFillCaretDown,
} from "react-icons/ai";

import { findModulesForCourse, createModule } from "./client";
import * as client from "./client";
import { BsJournalMedical } from "react-icons/bs";
function ModuleList() {
  const { courseId } = useParams();

  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);

  useEffect(() => {
    findModulesForCourse(courseId).then((modules) =>
      dispatch(setModules(modules))
    );
  }, [courseId]);

  const dispatch = useDispatch();

  const handleAddModule = () => {
    createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };

  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };

  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };

  return (
    <div>
      <div>
        <button className="btn btn-primary" onClick={handleAddModule}>
          Add
        </button>
        <button
          className="btn btn-success mx-3"
          onClick={handleUpdateModule}
        >
          Update
        </button>

        <div class="form-group mt-2">
          <label for="moduleName">Module Name</label>
          <input
            type="text"
            class="form-control"
            id="moduleName"
            placeholder="Module Name"
            value={module.name}
            onChange={(e) =>
              dispatch(setModule({ ...module, name: e.target.value }))
            }
          ></input>
        </div>

        <div class="form-group mt-2">
          <label for="moduleDescription">Module Description</label>
          <textarea
            value={module.description}
            class="form-control"
            id="moduleDescription"
            rows="1"
            onChange={(e) =>
              dispatch(setModule({ ...module, description: e.target.value }))
            }
          ></textarea>
        </div>
      </div>

      {modules.map((module, index) => (
        <ul className="list-group mt-3 moduleScreen">
          <li className="list-group-item list-group-item-secondary">
            <div className="float-end">
              <button
                className="btn btn-primary mx-2"
                onClick={() => dispatch(setModule(module))}
              >
                Edit
              </button>
              <button
                className="btn btn-danger"
                onClick={() => handleDeleteModule(module._id)}
              >
                Delete
              </button>
            </div>

            <div className="row pt-2">
              <div className="col-auto">
                <FaBars className="fa-bar" />
              </div>
              <div className="col-auto">
                <h4>
                  <AiFillCaretDown /> {module.name}
                </h4>
              </div>
              <div className="col">
                <div className="float-end">
                  <AiFillCheckCircle className="fa-circle-check " />
                  <AiFillCaretDown />
                </div>
              </div>
              <div className="col-auto ml-auto">
                <AiOutlinePlus />
              </div>
              <div className="col-auto">
                <FaEllipsisV />
              </div>
            </div>
          </li>
          <ModuleItem key={index} module={module} />
        </ul>
      ))}
    </div>
  );
}

export default ModuleList;
