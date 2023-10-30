import React from "react";
import PropTypes from "prop-types";

export default function CurrentLocation(props) {
  const _click = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      props.refresh(position.coords.latitude, position.coords.longitude);
    });
  };

  return (
    <button className="float-left btn btn-success" onClick={_click}>
      Current
    </button>
  );
}

CurrentLocation.propTypes = {
  refresh: PropTypes.func.isRequired,
};
