import * as React from "react";
import { container, list } from "./grade.module.css";
import Unit from "../unit/unit";

const Grade = ({ name, units }) => {
  return (
    <div className={container}>
      <div>{name}</div>
      <div className={list}>
        {units?.map(({ idName, name, lessons }) => (
          <Unit key={idName} name={name} lessons={lessons} />
        ))}
      </div>
    </div>
  );
};

export default Grade;
