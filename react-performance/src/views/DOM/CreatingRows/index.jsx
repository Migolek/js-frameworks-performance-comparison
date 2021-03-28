import React, { useState } from "react";
import StartTestBtn from "../../../components/StartTestBtn";

export default function CreatingRows() {
  const [renderRows, setRenderRows] = useState(false);
  const tableRows = Array.from(Array(1000).keys());

  const startTest = () => {
    setRenderRows(!renderRows);
  };

  const renderTable = () => {
    const startTime = performance.now();

    const table = tableRows.map((ele, idx) => {
      return (
        <tr key={idx}>
          <td>{idx}</td>
        </tr>
      );
    });

    const endTime = performance.now();

    // console.log("Creating rows - 1000 => ", endTime - startTime, "ms");
    console.log(endTime - startTime);

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
      <div className="d-flex">
        <StartTestBtn rendered={renderRows} onClick={startTest} />
      </div>
      {renderRows && renderTable()}
    </section>
  );
}
