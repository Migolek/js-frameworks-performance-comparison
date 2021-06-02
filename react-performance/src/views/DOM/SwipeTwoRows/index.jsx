import React, { useState, useEffect, useLayoutEffect } from "react";
import StartTestBtn from "../../../components/StartTestBtn";
import { generateRandomNumberInRange } from "../../../utils/random";

export default function SwipeTwoRows() {
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

  const swipeRows = () => {
    setStartTime(performance.now());

    let tmpRow = null;
    const randomIdx = generateRandomNumberInRange(0, rows.length);

    const swipedRows = rows.map((ele, idx) => {
      if (idx === randomIdx) {
        tmpRow = ele;
        return rows[randomIdx + 1];
      } else if (idx === randomIdx + 1) {
        return tmpRow;
      } else return ele;
    });
    setEndTime(performance.now());

    // console.log("Creating rows - 1000 => ", endTime - startTime, "ms");
    console.log(endTime - startTime);

    setRows(swipedRows);
  };

  useEffect(() => {
    createRows();
  }, []);

  useLayoutEffect(() => {
    swipeRows();
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
