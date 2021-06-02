import React, { useState, useEffect, useLayoutEffect } from "react";
import StartTestBtn from "../../../components/StartTestBtn";
import { generateRandomNumberInRange } from "../../../utils/random";

export default function ClearRows() {
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

  const clearRows = () => {
    setStartTime(performance.now());

    const randomId = generateRandomNumberInRange(0, rows.length);
    const clearedRows = rows.map((e, idx) => {
      if (e === null || (idx > randomId && idx <= randomId + 100)) {
        return null;
      } else {
        return (
          <tr key={idx}>
            <td>{Math.random().toFixed(2)}</td>
          </tr>
        );
      }
    });
    console.log(
      "🚀 ~ file: index.jsx ~ line 43 ~ clearedRows ~ clearedRows",
      clearedRows
    );
    setEndTime(performance.now());

    // console.log("Creating rows - 1000 => ", endTime - startTime, "ms");
    console.log(endTime - startTime);

    setRows(clearedRows);
  };

  useEffect(() => {
    createRows();
  }, []);

  useLayoutEffect(() => {
    clearRows();
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
