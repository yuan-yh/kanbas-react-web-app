import ModuleList from "../Modules/index";
import "./home-styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  BsFillBarChartLineFill,
  BsFillMegaphoneFill,
  BsFillArrowUpRightSquareFill,
} from "react-icons/bs";
import { AiFillBell } from "react-icons/ai";
import { FaFileExport, FaDotCircle } from "react-icons/fa";
import { MdOutlineFilterCenterFocus } from "react-icons/md";
function Home() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <ModuleList />
        </div>

        <div class="col-3 d-none d-xl-block home-sidebar">
          {/* <div class="row mt-4">
            <h4>Course Status</h4>
            <div class="d-flex justify-content-between">
              <button class="btn btn-secondary">
                <i class="fa-solid fa-xmark"></i> Unpublished
              </button>
              <button class="btn btn-secondary">
                <i class="fa-solid fa-circle-check"></i> Published
              </button>
            </div>
          </div> */}
          <div class="row mt-3">
            <ul class="list-group course-status">
              <li class="list-group-item">
                <FaFileExport /> Import Existing Content
              </li>
              <li class="list-group-item">
                <BsFillArrowUpRightSquareFill className="icon-size" /> Import
                from Commons
              </li>
              <li class="list-group-item">
                <FaDotCircle className="icon-size" /> Choose Home Page
              </li>
              <li class="list-group-item">
                <BsFillBarChartLineFill className="icon-size" /> View Course
                Stream
              </li>
              <li class="list-group-item">
                <BsFillMegaphoneFill className="icon-size" /> New Announcement
              </li>
              <li class="list-group-item">
                <BsFillBarChartLineFill className="icon-size" /> New Analytics
              </li>
              <li class="list-group-item">
                <AiFillBell className="icon-size" /> View Crouse Notifications
              </li>
            </ul>
          </div>
          <div class="row mt-3">
            <h5>To Do</h5>
            <hr className="horizontal-line" />
            <div>
              <a href="#"> Grade A1 - Env + HTML</a>
              <br />
              100 points * Sep 18 at 11:59pm
            </div>
          </div>
          <div class="row mt-2">
            <div class="d-flex justify-content-between">
              <div>
                <h5>Coming Up</h5>
              </div>
              <div>
                <i class="fa-solid fa-calendar-days"></i>
                <a href="#"> Calendar</a>
              </div>
            </div>
            <hr className="horizontal-line" />
            <div class="row mt-1">
              <div class="col-auto">
                <i class="fa-solid fa-calendar-days"></i>
              </div>
              <div class="col">
                <a href="#"> Grade A1 - Env + HTML</a>
                <br />
                100 points * Sep 18 at 11:59pm
              </div>
            </div>
            <div class="row mt-1">
              <div class="col-auto">
                <i class="fa-solid fa-calendar-days"></i>
              </div>
              <div class="col">
                <a href="#"> Grade A1 - Env + HTML</a>
                <br />
                100 points * Sep 18 at 11:59pm
              </div>
            </div>
            <div class="row mt-1">
              <div class="col-auto">
                <i class="fa-solid fa-calendar-days"></i>
              </div>
              <div class="col">
                <a href="#"> Grade A1 - Env + HTML</a>
                <br />
                100 points * Sep 18 at 11:59pm
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
