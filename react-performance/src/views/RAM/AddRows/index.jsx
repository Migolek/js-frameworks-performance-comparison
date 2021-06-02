import React, { useState, useEffect, useLayoutEffect } from "react";
import StartTestBtn from "../../../components/StartTestBtn";
import { generateRandomNumberInRange } from "../../../utils/random";

export default function AddRows() {
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

  const addNewRows = () => {
    const newRows = Array.from(Array(1000).keys()).map((e, idx) => {
      return (
        <tr key={idx + rows.length}>
          <td>{Math.random().toFixed(2)}</td>
        </tr>
      );
    });
    const mergedRows = [...rows, ...newRows];

    setRows(mergedRows);
  };

  useEffect(() => {
    console.log('memory: ', performance.memory, 'rows: ',rows.length);
  }, [rows]);

  useEffect(() => {
    console.log('Initial memory: ', performance.memory, 'rows: ',rows.length);
    createRows();
  }, []);

  useLayoutEffect(() => {
    addNewRows();
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
