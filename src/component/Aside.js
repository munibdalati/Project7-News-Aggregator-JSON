import React from "react";
import Col from "react-bootstrap/Col";
import Calendar from "./Calender";
import Weather from "./Weather";

const Aside = () => {
  return (
    <div className="aside p-2">
      <Weather />
      <Calendar />
    </div>
  );
};

export default Aside;
