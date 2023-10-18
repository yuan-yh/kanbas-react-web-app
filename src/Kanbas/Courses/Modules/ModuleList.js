import React from "react";
import { useParams } from "react-router-dom";
import { FaCheck, FaPlus, FaEllipsisV } from "react-icons/fa";
import db from "../../Database";

function ModuleList() {
    const { courseId } = useParams();
    const modules = db.modules;
    return (
        <ul className="list-group">
            {
                modules
                    .filter((module) => module.course === courseId)
                    .map((module, index) => (
                        <li key={index} className="list-group-item bg-secondary-subtle m-3 p-0 pt-2 border">
                            <div className="ps-3 pe-2">
                                <span class="float-end">
                                    {<FaCheck />} {<FaPlus />} {<FaEllipsisV />}
                                </span>
                                <h3>{module.name}</h3>
                                <p>{module.description}</p>
                            </div>
                            {
                                module.lessons && (
                                    <ul className="list-group">
                                        {
                                            module.lessons.map((lesson, index) => (
                                                <li key={index} className="list-group-item">
                                                    <h4>{lesson.name}</h4>
                                                    <p>{lesson.description}</p>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                )
                            }
                        </li>



                        // {/* <ul class="list-group course-module">
                        /* <li class="list-group-item list-group-item-secondary">
                        <b>Week 1 HTML</b>
                        <span class="float-end">
                            <span class="course-list-item-logo">
                                <i class="fa-solid fa-circle-check"></i>
                            </span>
                            <i class="fa-solid fa-plus"></i>
                            <i class="fa-solid fa-list"></i>
                        </span>
                        </li>
                        <li class="list-group-item indent list-group-item-first-indent">
                        <span class="list-group-item-title">Introduction to HTML</span>
                        <span class="course-list-item-logo float-end">
                            <i class="fa-solid fa-circle-check"></i>
                        </span>
                        </li>
                        <li class="list-group-item indent list-group-item-first-indent">
                        <span class="list-group-item-title">Video Link</span>
                        <span class="course-list-item-logo float-end">
                            <i class="fa-solid fa-circle-check"></i>
                        </span>
                        </li>
                        <li class="list-group-item indent list-group-item-second-indent">
                        <span class="list-group-item-title"><a class="external-link" href="#">link#1</a></span>
                        <span class="course-list-item-logo float-end">
                            <i class="fa-solid fa-circle-check"></i>
                        </span>
                        </li>
                        <li class="list-group-item indent list-group-item-second-indent">
                        <span class="list-group-item-title"><a class="external-link" href="#">link#2</a></span>
                        <span class="course-list-item-logo float-end">
                            <i class="fa-solid fa-circle-check"></i>
                        </span>
                        </li>
                        </ul> */


                    ))
            }
        </ul>
    );
}
export default ModuleList;