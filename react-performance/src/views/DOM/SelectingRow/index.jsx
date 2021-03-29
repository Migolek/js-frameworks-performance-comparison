import React, { useState, useEffect, useLayoutEffect } from "react";
import StartTestBtn from "../../../components/StartTestBtn";

export default function SelectingRow() {
  const [startTest, setStartTest] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [selectedRow, setSelectedRow] = useState(null);
  const [rows, setRows] = useState([]);

  const handleStart = () => {
    setStartTest(!startTest);
  };

  const createRows = () => {
    const createdRows = Array.from(Array(1000).keys()).map((ele, idx) => {
      return (
        <tr key={idx}>
          <td>{Math.random().toFixed(2)}</td>
        </tr>
      );
    });

    setRows(createdRows);
  };

  const updateRows = () => {
    setStartTime(performance.now());

    const updatedRows = rows.map((ele, idx) => {
      if (idx === selectedRow) {
        return (
          <tr key={idx} className="active">
            <td>{ele.props.children.props.children}</td>
          </tr>
        );
      } else return ele;
    });
    setEndTime(performance.now());

    // console.log("Creating rows - 1000 => ", endTime - startTime, "ms");
    console.log(endTime - startTime);

    setRows(updatedRows);
  };

  useEffect(() => {
    createRows();
  }, []);

  useLayoutEffect(() => {
    updateRows();
  }, [startTest]);

  return (
    <section>
      <div className="d-flex">
        <StartTestBtn rendered={startTest} onClick={handleStart} />
        <input
          type="number"
          value={selectedRow}
          onChange={({ target }) => setSelectedRow(Number(target.value))}
        />
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
