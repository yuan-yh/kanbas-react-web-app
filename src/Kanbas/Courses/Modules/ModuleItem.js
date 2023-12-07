import React from "react";
import "./modules-styles.css";
import { FaEllipsisV, FaBars } from "react-icons/fa";
import { AiFillCheckCircle } from "react-icons/ai";
import { HiPencilSquare } from "react-icons/hi2";
function ModuleItem({ index, module }) {
  return (
    <li key={index} className="list-group-item">
      <div class="row pt-2">
        <div class="col-auto">
          <FaBars className="fa-bar" />
        </div>

        <div class="col">
          <div>
            <h5>{module.description}</h5>
          </div>
        </div>
        <div class="col-auto ml-auto">
          <AiFillCheckCircle className="fa-circle-check " />
        </div>
        <div class="col-auto">
          <FaEllipsisV />
        </div>
      </div>
    </li>
  );
}

export default ModuleItem;
