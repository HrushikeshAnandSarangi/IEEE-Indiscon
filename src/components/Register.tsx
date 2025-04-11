export default function FeesPage() {
  const tableData = [
    ["Registration Type", "IEEE", "Non-IEEE", "IEEE", "Non-IEEE"],
    ["Industry", "₹14,000", "₹15,000", "₹16,000", "₹17,000"],
    ["Academics", "₹12,000", "₹13,000", "₹14,000", "₹15,000"],
    ["Student", "₹7,500", "₹8,500", "₹8,500", "₹9,500"],
  ]

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 md:p-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-800 mb-6 text-center">Registration Fees</h1>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
        <div className="hidden sm:block overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="bg-gradient-to-r from-blue-800 to-blue-700 text-white p-4 text-center" rowSpan={2}>
                  Registration Type
                </th>
                <th
                  colSpan={2}
                  className="bg-gradient-to-r from-blue-800 to-blue-700 text-white p-4 text-center border-l border-blue-400"
                >
                  Early-Bird Registration
                </th>
                <th
                  colSpan={2}
                  className="bg-gradient-to-r from-blue-800 to-blue-700 text-white p-4 text-center border-l border-blue-400"
                >
                  Regular Registration
                </th>
              </tr>
              <tr>
                <th className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-4 text-center border-l border-blue-400">
                  IEEE
                </th>
                <th className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-4 text-center border-l border-blue-400">
                  Non-IEEE
                </th>
                <th className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-4 text-center border-l border-blue-400">
                  IEEE
                </th>
                <th className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-4 text-center border-l border-blue-400">
                  Non-IEEE
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.slice(1).map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className={`
                    ${rowIndex % 2 === 0 ? "bg-white" : "bg-blue-50"} 
                    hover:bg-blue-100 transition-colors duration-150
                  `}
                >
                  {row.map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      className={`p-4 border-b border-blue-100 ${
                        cellIndex === 0 ? "font-semibold text-blue-800" : "text-gray-700 text-center"
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="sm:hidden">
          <div className="bg-gradient-to-r from-blue-800 to-blue-700 text-white p-3 text-center font-bold">
            Registration Categories
          </div>
          {tableData.slice(1).map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`p-4 border-b border-blue-100 ${rowIndex % 2 === 0 ? "bg-white" : "bg-blue-50"}`}
            >
              <h3 className="font-bold text-blue-800 mb-2">{row[0]}</h3>
              <div className="mb-3">
                <h4 className="font-semibold text-blue-700 mb-1">Early-Bird Registration:</h4>
                <div className="grid grid-cols-2 gap-2 pl-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">IEEE:</span>
                    <span className="font-medium text-gray-800">{row[1]}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Non-IEEE:</span>
                    <span className="font-medium text-gray-800">{row[2]}</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 mb-1">Regular Registration:</h4>
                <div className="grid grid-cols-2 gap-2 pl-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">IEEE:</span>
                    <span className="font-medium text-gray-800">{row[3]}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Non-IEEE:</span>
                    <span className="font-medium text-gray-800">{row[4]}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-500 p-4">Note: more registration details will be provided later.</p>
      </div>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
        <p className="text-sm text-gray-500 p-4">Note: all charges are inclusive of 18% GST.</p>
      </div>
    </div>
  )
}
