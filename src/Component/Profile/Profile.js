import React from "react";
import PropTypes from "prop-types";

function Profile({ full, bi, profes, img, funct }) {
  return (
    <div className="App">
      <div className="container">
        <h1> {full}</h1>
        <div className="logoo">
          <img src={img} alt="logo" />
        </div>
        <div className="box">
          <h2>{bi} </h2>
          <h3>{profes}</h3>
        </div>
        <div className="btn">
          <button onClick={() => funct(full)}>Click here!</button>
        </div>
      </div>
    </div>
  );
}
Profile.defaultProps = {
  full: "wajdi",
  bi: "devops",
  img: "picture",
};
Profile.propTypes = {
  full: PropTypes.string,
  bi: PropTypes.string,
  profes: PropTypes.string,
  img: PropTypes.string.isRequired,
  funct: PropTypes.func,
};
export default Profile;
