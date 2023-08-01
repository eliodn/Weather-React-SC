import React, { Component } from "react";
import PropTypes from "prop-types";

export default function CurrentLocation (props) {
  staticprops = { refresh: props.func.isRequired };

  _click(event) {
    navigator.geolocation.getCurrentPosition((position) => {
      props.refresh(position.coords.latitude, position.coords.longitude);
    });
  }

   {
    return (
      <button
        className="float-left btn btn-success"
        onClick={(event) =>_click(event)}
      >
        Current
      </button>
    );
  }
}
