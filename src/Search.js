import React, { Component } from "react";

export default function Search (props) {
  constructor(props) 
    super(props);
    state = {
      value: "",
    };
  }

  _handleChange(event) {
    setState({ value:target.value });
  }

  _submit(event) {
    event.preventDefault();
    props.refresh(state.value);
  }

   {
    return (
      <form className="float-left" onClick={(event) =>_submit(event)}>
        <input
          type="text"
          placeholder="Enter a city"
          autoComplete="off"
          autoFocus="on"
          onChange={(event) => _handleChange(event)}
          value={state.value}
        />
        <input type="submit" value="Search" className="btn btn-primary" />
      </form>
    );
  }

