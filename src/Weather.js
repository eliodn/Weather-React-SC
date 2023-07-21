import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import "./Weather.css";
import WeatherIcon from "./WeatherIcon";
import CurrentLocation from "./CurrentLocation";
import Search from "./Search";
import DateUtil from "./DateUtil";
import Api from "./Api";
import Forecast from "./Forecast";

export default function WeatherIcon(props) {
  staticpropTypes = {
    city: PropTypes.string.isRequired,
  };

  state = {
    city: props.city,
  };

  componentWillMount();
  refresh(state.city);
}

refreshWeatherFromParams(params);
let url = `${Api.url}/data/2.5/weather?appid=${Api.key}&units=metric&${params}`;
axios.get(url).then((response) => {
  setState({
    city: response.data.name,
    weather: {
      description: response.data.weather[0].main,
      icon: response.data.weather[0].icon,
      precipitation: Math.round(response.data.main.humidity) + "%",
      temperature: Math.round(response.data.main.temp),
      time: new DateUtil(new Date(response.data.dt * 1000)).dayTime(),
      wind: Math.round(response.data.wind.speed) + "km/h",
    },
  });
});

refreshWeatherFromLatitudeAndLongitude = (latitude, longitude) => {
  refreshWeatherFromParams(`lat=${latitude}&lon=${longitude}`);
};

refresh = (city) => {
  refreshWeatherFromParams(`q=${city}`);
};

{
  if (state.weather) {
    return (
      <div>
        <div className="clearfix">
          <Search refresh={refresh} />
          <CurrentLocation refresh={refreshWeatherFromLatitudeAndLongitude} />
        </div>

        <div className="weather-summary">
          <div className="weather-summary-header">
            <h1>{state.city}</h1>
            <div className="weather-detail__text">{state.weather.time}</div>
            <div className="weather-detail__text">
              {state.weather.description}
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6">
              <div className="clearfix">
                <div className="float-left weather-icon">
                  <WeatherIcon iconName={state.weather.icon} />
                </div>
                <div className="weather-temp weather-temp--today">
                  {state.weather.temperature}
                </div>
                <div className="weather-unit__text weather-unit__text--today">
                  °C
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="weather-detail__text">
                Precipitation: {state.weather.precipitation}
              </div>
              <div className="weather-detail__text">
                Wind: {state.weather.wind}
              </div>
            </div>
          </div>
        </div>
        <Forecast city={state.city} />
      </div>
    );
  } else {
    return (
      <div>
        App is loading, <em>please wait...</em>
      </div>
    );
  }
}
