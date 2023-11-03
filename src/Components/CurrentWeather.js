import React, { useState } from "react";

export default function CurrentWeather() {
  return (
    <div className="container">
      <div className="flex flex-wrap gap-y-4 mt-6 w-5/6 mx-auto">
        <div className="w-full ">
          <div className="city-name text-2xl font-bold text-slate-900">
            <h1>Lisbon</h1>
          </div>
          <div className="current-temp">
            <h2 className="text-5xl font-bold">
              17
              <span className="align-top text-sm">°C</span>
            </h2>
          </div>
          <div className="current-weather-description">
            <h3 className="text-lg font-bold">Few clouds</h3>
          </div>
        </div>
        <div className="current-weather-details w-full border-slate-400 border-t-2 border-b-2 text-start">
          <h4 className="text-center font-semibold">DETAILS</h4>
          <p>
            <span className="font-semibold">Humidity:</span> 87%
          </p>
          <p>
            <span className="font-semibold">Wind:</span> 3km/h{" "}
          </p>
          <p>
            <span className="font-semibold">Last updated:</span> Friday, Oct
            27 at 21:00
          </p>
        </div>
      </div>
    </div>
  );
}
