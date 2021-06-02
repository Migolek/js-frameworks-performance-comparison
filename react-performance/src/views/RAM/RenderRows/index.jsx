import React, { useState, useEffect } from "react";
import StartTestBtn from "../../../components/StartTestBtn";

export default function RenderRows() {
  const [startTest, setStartTest] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [rows, setRows] = useState([]);

  const handleStart = () => {
    setStartTest(!startTest);
  };

  const generateRows = () => {
    const generatedRows = Array.from(Array(1000).keys()).map((ele, idx) => {
      return (
        <tr key={idx}>
          <td>{Math.random().toFixed(2)}</td>
        </tr>
      );
    });

    setRows(generatedRows);
  };

  useEffect(() => {
    console.log('memory: ', performance.memory, 'rows: ',rows.length);
  }, [rows]);

  useEffect(() => {
    generateRows();
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
