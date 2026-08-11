import React from "react";

const TableSection = ({ tableData }) => {
  if (!tableData || tableData.length === 0) return null;

  return (
    <div className="overflow-x-auto my-10 border border-slate-300 dark:border-slate-700 rounded-lg shadow-sm">
      <table className="min-w-full text-sm text-left border-collapse">
        <thead className="bg-slate-100 dark:bg-slate-800">
          <tr>
            {Object.keys(tableData[0]).map((key) => (
              <th
                key={key}
                className="px-4 py-2 font-semibold capitalize text-slate-700 dark:text-slate-200"
              >
                {key.replace(/([A-Z])/g, " $1")}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-b border-slate-200 dark:border-slate-700">
              {Object.values(row).map((value, colIndex) => (
                <td key={colIndex} className="px-4 py-2 text-slate-600 dark:text-slate-300">
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableSection;
