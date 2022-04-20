import React from "react";
import "./index.css";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const BookDetail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  console.log("state", state);
  return (
    <div>

      <div className="de">
        Title: <p className="e"> {state.title} </p>{" "}
      </div>
      <br />

      <div className="de">
        Auther: <p className="e"> {state.authors[0].name} </p>{" "}
      </div>

      <div className="imgd">
          <img 
          onClick={() => navigate("/list")}
          className="img"
          src={state.formats["image/jpeg"]} alt="jldvjdknjkv" />
      </div>
      <button 
      className="btn"
      onClick={() => navigate("/list")}>Back Book Detail</button>
     
    </div>
  );
};

export default BookDetail;
