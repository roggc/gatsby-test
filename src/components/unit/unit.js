import * as React from "react";
import { container, nameSection, squareIcon } from "./unit.module.css";
import { Link } from "gatsby";

const Unit = ({ name, lessons }) => {
  const [showLessons, setShowLessons] = React.useState(false);

  const showLessonsHandler = () => setShowLessons((sL) => !sL);

  return (
    <div className={container}>
      <div className={nameSection}>
        <div>{name}</div>
        <div className={squareIcon} onClick={showLessonsHandler}>
          >
        </div>
      </div>
      {showLessons &&
        lessons.map(({ idName, name }) => (
          <Link key={idName} to={`/${idName}`}>
            {name}
          </Link>
        ))}
    </div>
  );
};

export default Unit;
