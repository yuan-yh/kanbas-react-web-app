import React from "react";
import "./DeleteConfirmation.css";

function DeleteConfirmation({ onCancel, onConfirm }) {
  return (
    <div className="delete-confirmation-dialog">
      <p>Are you sure you want to remove this assignment?</p>
      <div className="d-flex justify-content-evenly">
        <button className="btn btn-light" onClick={onConfirm}>
          Yes
        </button>
        <button className="btn btn-success" onClick={onCancel}>
          No
        </button>
      </div>
    </div>
  );
}

export default DeleteConfirmation;