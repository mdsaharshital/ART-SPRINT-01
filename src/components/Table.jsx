const Table = ({ columnData, tableData }) => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead>
        <tr>
          {columnData?.map((col, i) => (
            <th
              key={i + col.label}
              className="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              {col.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {/* Add your table rows here */}
        {tableData?.map((d, i) => (
          <tr key={i + d}>
            {columnData.map((column, i) => (
              <td
                key={i + column.value}
                className="px-6 py-4 whitespace-nowrap"
              >
                {column.content ? column.content(d) : d[column.value]}
              </td>
            ))}
          </tr>
        ))}
        {/* Add more rows as needed */}
      </tbody>
    </table>
  );
};

export default Table;
