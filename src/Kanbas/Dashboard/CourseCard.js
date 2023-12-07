import {TfiPencilAlt} from "react-icons/tfi";

function CoureCard({ course }) {
    return (
        <div className="col-md-3 col-min-width">
          <div className="item">
            <div className="card">
              <div className="card-background-color"></div>
              <div className="card-body">
                <h3 className="card-title text-truncate card-main-title">
                  {course.number} {course._id}
                </h3>
                <div className="card-text text-truncate card-sub-title">
                  {course.name}
                </div>
                <div className="card-text card-term text-truncate card-mini-title">{course.startDate} - {course.endDate}</div>
                <div>
                  <TfiPencilAlt className="cardIcon"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default CoureCard;
