import ModuleList from "./ModuleList";
import "./modules-styles.css";
import { FaEllipsisV, FaBars } from "react-icons/fa";
import { AiOutlineCheckCircle } from "react-icons/ai";
function Modules() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div class="d-flex justify-content-end">
          <button class="btn btn-secondary ms-1 generalButtonColor">
            Collapse All
          </button>
          <button class="btn btn-secondary ms-1 generalButtonColor">
            View Progress
          </button>

          <div class="dropdown ms-1">
            <button
              class="btn btn-secondary dropdown-toggle generalButtonColor"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <AiOutlineCheckCircle className="circleCheckColor " /> Publish All
            </button>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  1
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  2
                </a>
              </li>
            </ul>
          </div>
          <button class="btn btn-danger ms-1 ">+ Module</button>
          <button class="btn btn-secondary ms-1 generalButtonColor">
            <FaEllipsisV />
          </button>
        </div>
      </div>
      <div className="row mt-3">
        <ModuleList />
      </div>
    </div>
  );
}

export default Modules;
