export default function FeesPage() {
    const tableData = [
      ["Registration Type", "IEEE", "Non-IEEE", "IEEE", "Non-IEEE"],
      ["Industry", "₹14,000", "₹15,000", "₹16,000", "₹17,000"],
      ["Academics", "₹12,000", "₹13,000", "₹14,000", "₹15,000"],
      ["Student", "₹7,500", "₹8,500", "₹8,500", "₹9,500"]
    ]
  
    return (
      <div className="max-w-4xl mx-auto p-4 sm:p-6 md:p-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-800 mb-6 text-center">Registration Fees</h1>
  
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="hidden sm:block overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="bg-gradient-to-r from-blue-800 to-blue-700 text-white p-4 text-center"></th>
                  <th
                    colSpan={2}
                    className="bg-gradient-to-r from-blue-800 to-blue-700 text-white p-4 text-center border-l border-blue-400"
                  >
                    Early Registration
                  </th>
                  <th
                    colSpan={2}
                    className="bg-gradient-to-r from-blue-800 to-blue-700 text-white p-4 text-center border-l border-blue-400"
                  >
                    Late Registration
                  </th>
                </tr>
                <tr>
                  {tableData[0].map((header, index) => (
                    <th
                      key={index}
                      className={`p-4 text-left ${
                        index === 0
                          ? "bg-gradient-to-r from-blue-700 to-blue-600 text-white"
                          : "bg-gradient-to-r from-blue-600 to-blue-500 text-white"
                      }`}
                    >
                      {header}
                    </th>
                  ))}
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
                          cellIndex === 0 ? "font-semibold text-blue-800" : "text-gray-700"
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
                <div className="grid grid-cols-2 gap-2">
                  {tableData[0].slice(1).map((header, headerIndex) => (
                    <div key={headerIndex} className="flex justify-between">
                      <span className="text-sm text-gray-600">{header}:</span>
                      <span className="font-medium text-gray-800">{row[headerIndex + 1]}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
       
      </div>
    )
  }
  
  