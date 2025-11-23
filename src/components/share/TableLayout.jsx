import React from "react";

export default function TableLayout({
  search = true,
  filter = true,
  exportBtn = true,
  importBtn = true,
  pagination = true,
  columns,
  data,
}) {
  const TableToolbar = () => (
    <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 mb-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        
        {/* Search + Filters */}
        <div className="flex flex-wrap gap-3 sm:gap-4">
          {search && (
            <div className="relative w-full sm:w-auto">
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 w-full sm:w-auto border border-gray-300 rounded-lg text-sm sm:text-base focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <svg
                className="h-5 w-5 text-gray-400 absolute left-3 top-2.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          )}

          {filter && (
            <>
              <select className="border border-gray-300 rounded-lg px-3 sm:px-4 py-2 text-sm sm:text-base focus:ring-2 focus:ring-primary-500">
                <option>All Classes</option>
                <option>10A</option>
                <option>10B</option>
                <option>11A</option>
                <option>11B</option>
              </select>

              <select className="border border-gray-300 rounded-lg px-3 sm:px-4 py-2 text-sm sm:text-base focus:ring-2 focus:ring-primary-500">
                <option>All Status</option>
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </>
          )}
        </div>

        {/* Export / Import Buttons */}
        <div className="flex gap-2 self-start sm:self-auto">
          {exportBtn && (
            <button className="bg-green-600 text-white px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base hover:bg-green-700 transition">
              Export CSV
            </button>
          )}

          {importBtn && (
            <button className="bg-blue-600 text-white px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base hover:bg-blue-700 transition">
              Import CSV
            </button>
          )}
        </div>
      </div>
    </div>
  );

  const Pagination = () =>
    pagination && (
      <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
        {/* Mobile Pagination */}
        <div className="flex-1 flex justify-between sm:hidden">
          <button className="px-4 py-2 border rounded-md text-sm text-gray-700">
            Previous
          </button>
          <button className="px-4 py-2 border rounded-md text-sm text-gray-700">
            Next
          </button>
        </div>

        {/* Desktop Pagination */}
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <p className="text-sm text-gray-700">Showing 1 to 3 of 1247 results</p>
          <nav className="inline-flex rounded-md shadow-sm -space-x-px">
            <button className="px-3 py-2 border rounded-l-md text-sm">Prev</button>
            <button className="px-3 py-2 border text-sm">1</button>
            <button className="px-3 py-2 border text-sm">2</button>
            <button className="px-3 py-2 border text-sm">3</button>
            <button className="px-3 py-2 border rounded-r-md text-sm">Next</button>
          </nav>
        </div>
      </div>
    );

  return (
    <>
      {/* Search and Filter */}
      <TableToolbar />

      {/* Table */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {columns?.map((col, idx) => (
                  <th
                    key={idx}
                    className="px-3 sm:px-6 py-2 sm:py-3 text-left text-sm font-medium text-gray-700"
                  >
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200">
              {data?.map((row, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  {columns?.map((col, j) => (
                    <td
                      key={j}
                      className="px-3 sm:px-6 py-2 sm:py-4 text-sm text-gray-900"
                    >
                      {col.cell ? col.cell(row) : row[col.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <Pagination />
      </div>
    </>
  );
}
