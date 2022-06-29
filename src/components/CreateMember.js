import React from "react";
import { useNavigate } from "react-router-dom";
import { createMember } from "../services/fitness-api";

function CreateMember() {
  const nav = useNavigate();

  const newMember = (e) => {
    e.preventDefault();
    const member = { userName: document.querySelector("#uName").value };
    createMember(member);
    nav("/");
  };

  const mystyle = {
    color: "white",
    backgroundColor: "#548FCF",
    padding: "10px",
    fontFamily: "Arial",
    marginLeft: "400px",
    marginRight: "400px",
  };

  return (
    <div style={mystyle}>
      <h3>Create New Member</h3>
      <br />
      <form onSubmit={newMember}>
        <div className="form-group">
          <input
            type="text"
            name="userName"
            id="uName"
            placeholder="Member Name"
            required
          />
          <br />
          <br />
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Create Member"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}

export default CreateMember;
