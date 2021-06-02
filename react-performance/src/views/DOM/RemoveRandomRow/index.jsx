import React, { useState, useEffect, useLayoutEffect } from "react";
import StartTestBtn from "../../../components/StartTestBtn";
import { generateRandomNumberInRange } from "../../../utils/random";

export default function RemoveRandomRow() {
  const [startTest, setStartTest] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [rows, setRows] = useState([]);

  const handleStart = () => {
    setStartTest(!startTest);
  };

  const createRows = () => {
    const createdRows = Array.from(Array(10000).keys()).map((ele, idx) => {
      return (
        <tr key={idx}>
          <td>{Math.random().toFixed(2)}</td>
        </tr>
      );
    });

    setRows(createdRows);
  };

  const filterRows = () => {
    setStartTime(performance.now());

    const randomIdx = generateRandomNumberInRange(0, rows.length);;

    const filteredRows = rows.filter((ele, idx) => idx !== randomIdx);
    setEndTime(performance.now());

    // console.log("Creating rows - 1000 => ", endTime - startTime, "ms");
    console.log(endTime - startTime);

    setRows(filteredRows);
  };

  useEffect(() => {
    createRows();
  }, []);

  useLayoutEffect(() => {
    filterRows();
  }, [startTest]);

  return (
    <section>
      <div className="d-flex">
        <StartTestBtn rendered={startTest} onClick={handleStart} />
      </div>
      <table>
        <thead>
          <tr>
            <th>Idx</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </section>
  );
}
