import React, { useState } from "react";
import StartTestBtn from "../../../components/StartTestBtn";

export default function CreatingRows() {
  const [renderRows, setRenderRows] = useState(false);

  const startTest = () => {
    setRenderRows(!renderRows);
  };

  const renderTable = () => {
    const timeStart = performance.now();

    const table = Array.from(Array(1000).keys()).map((ele, idx) => {
      return (
        <tr key={idx}>
          <td>{idx}</td>
        </tr>
      );
    });

    const timeEnd = performance.now();

    console.log("Creating rows - 1000 => ", timeEnd - timeStart, "ms");

    return (
      <table>
        <thead>
          <tr>
            <th>Idx</th>
          </tr>
        </thead>
        <tbody>{table}</tbody>
      </table>
    );
  };

  return (
    <section>
      <StartTestBtn rendered={renderRows} onClick={startTest} />
      {renderRows && renderTable()}
    </section>
  );
}
