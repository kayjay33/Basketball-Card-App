/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

const PlayerItem = ({ item }) => {
  // Formatting Salary
  let salary = item.Salary;
  let formattedSalary =
    salary != null
      ? salary.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      : "N/A";

  // Formatting Height
  let inches = item.Height;
  let feet = Math.floor(inches / 12);
  let newInches = inches % 12;

  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <div style={{ textAlign: 'center' }}>
            <img src={item.PhotoUrl} alt="" />
          </div>
          <div style={{ textAlign: 'center' }}>
            <img
              className="front-card-logo"
              src={require("../../img/teamLogos/hawks-logo-white.png")}
              alt="no image"
            />
          </div>
        </div>
        <div className="card-back">
          <h1>{item.YahooName}</h1>
          <ul>
            <li>
              <strong>Salary:</strong>{" "}
              {formattedSalary === "N/A" ? "N/A" : `$${formattedSalary}`}
            </li>
            <li>
              <strong>College:</strong> {item.College}
            </li>
            <li>
              <strong>Position:</strong> {item.Position}
            </li>
            <li>
              <strong>Jersey Number:</strong> {item.Jersey}
            </li>
            <li>
              <strong>Years Experience:</strong> {item.Experience}
            </li>
            <li>
              <strong>Height:</strong> {`${feet}'${newInches}`}
            </li>
            <li>
              <strong>Weight:</strong> {item.Weight}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PlayerItem;
