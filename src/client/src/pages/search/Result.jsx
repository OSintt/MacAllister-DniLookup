import { useState } from "react";
import { useEffect } from "react";
import SingleData from "./SingleData";
import { HiOutlineDocument } from "react-icons/hi";
import { BiHome, BiHomeAlt } from 'react-icons/bi';
import "../styles/css/index.css";

const Result = ({ info }) => {
  const [values, setValues] = useState(null);
  const [names, setNames] = useState(null);
  useEffect(() => {
    setNames(Object.keys(info));
    setValues(Object.values(info));
  }, [info]);

  return (
    <div className="result-container">
      {values !== null ? (
        <>
          <div className="personal-data-container">
            <div className="data-container">
              <h4 className="flex">
                <HiOutlineDocument />
                <span>Datos del ciudadano</span>
              </h4>
              {values.map((value, i) => (
                <SingleData
                  filterArray
                  name={names[i]}
                   data={value}
                   index={i}
                   key={names[i]}
                />
              ))}
            </div>
            <div className="domicilio-data-container">
            <div className="data-container">
              <h4 className="flex">
                <BiHomeAlt />
                <span>Domicilio</span>
              </h4>
              {values.map((value, i) => (
                <SingleData
                  name={names[i]}
                  data={value}
                  index={i}
                  key={names[i]}
                />
              ))}
            </div>
          </div>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Result;
