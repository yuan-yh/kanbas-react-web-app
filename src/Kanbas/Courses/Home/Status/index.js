import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faX,
  faBan,
  faCircleCheck,
  faFileImport,
  faArrowRightFromBracket,
  faBullseye,
  faChartSimple,
  faBullhorn,
} from "@fortawesome/free-solid-svg-icons";
import { faCalendarCheck } from "@fortawesome/free-regular-svg-icons";
import "./index.css";

function Status() {
  return (
    <div className="status">
      <div>Course Status</div>
      <div className="btn-group courses-home-main-content-right-side-btn-group" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-light courses-home-main-content-right-side-btn-group-button">
          <div className="d-flex flex-row"><FontAwesomeIcon icon={faBan} className="align-self-center" /> Unpublish</div>
        </button>
        <button type="button" className="btn btn-success courses-home-main-content-right-side-btn-group-button">
          <div className="d-flex flex-row"><FontAwesomeIcon icon={faCircleCheck} className="align-self-center" /> Published</div>
        </button>
      </div>
      <button type="button" className="btn btn-light courses-home-main-content-right-side-btn">
        <FontAwesomeIcon icon={faFileImport} /> Import Existing Content
      </button>
      <button type="button" className="btn btn-light courses-home-main-content-right-side-btn">
        <FontAwesomeIcon icon={faArrowRightFromBracket} /> Import from Commons
      </button>
      <button type="button" className="btn btn-light courses-home-main-content-right-side-btn">
        <FontAwesomeIcon icon={faBullseye} /> Choose Home Page
      </button>
      <button type="button" className="btn btn-light courses-home-main-content-right-side-btn">
        <FontAwesomeIcon icon={faChartSimple} /> View Course Stream
      </button>
      <button type="button" className="btn btn-light courses-home-main-content-right-side-btn">
        <FontAwesomeIcon icon={faBullhorn} /> New Announcement
      </button>
      <button type="button" className="btn btn-light courses-home-main-content-right-side-btn">
        <FontAwesomeIcon icon={faChartSimple} /> New Analytics
      </button>
      <button type="button" className="btn btn-light courses-home-main-content-right-side-btn">
        <FontAwesomeIcon icon={faCalendarCheck} /> View Course Notifications
      </button>
      <div className="courses-home-main-content-right-side-title">To Do</div>
      <hr />
      <div className="courses-home-main-content-right-side-todo-list-item">
        <div>
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "red" }} className="fa-todo-yes"/>
        </div>
        <div className="courses-home-main-content-right-side-todo-list-item-description">
          <a href="#">
            Grade A1 - ENV + HTML
          </a>
          <div>
            100 points Sep 18 at 11:59pm
          </div>
        </div>
        <div>
          <FontAwesomeIcon icon={faX} style={{ color: "gray" }} className="fa-todo-x" />
        </div>
      </div>
      <div className="courses-home-main-content-right-side-title">
        <div>
          Coming Up
        </div>
        <div className="courses-home-main-content-right-side-coming-up-title-item ms-auto p-2">
          <FontAwesomeIcon icon={faCalendarCheck} />
          <a href="#">
            View Calendar
          </a>
        </div>
      </div>
      <hr />
      <div className="courses-home-main-content-right-side-coming-up-list-item">
        <FontAwesomeIcon icon={faCalendarCheck} />
        <div className="courses-home-main-content-right-side-coming-up-list-item-description">
          <a href="#">
            Lecture
          </a>
          <div>
            CS4550.12631.202410
          </div>
          <div>
            Sep 11 at 11:45am
          </div>
        </div>
      </div>
      <div className="courses-home-main-content-right-side-coming-up-list-item">
        <FontAwesomeIcon icon={faCalendarCheck} />
        <div className="courses-home-main-content-right-side-coming-up-list-item-description">
          <a href="#">
            CS5610 06 SP23 Lecture
          </a>
          <div>
            CS4550.12631.202410
          </div>
          <div>
            Sep 11 at 6pm
          </div>
        </div>
      </div>
      <div className="courses-home-main-content-right-side-coming-up-list-item">
        <FontAwesomeIcon icon={faCalendarCheck} />
        <div className="courses-home-main-content-right-side-coming-up-list-item-description">
          <a href="#">
            <span>
              CS5610 Web Development
            </span>
            <span>
              Summer 1 2023 - LECTURE
            </span>
          </a>
          <div>
            CS4550.12631.202410
          </div>
          <div>
            Sep 11 at 7pm
          </div>
        </div>
      </div>
      <div className="courses-home-main-content-right-side-coming-up-list-item">
        <a href="#">
          12 more in the next week...
        </a>
      </div>
    </div>
  );
}

export default Status;
