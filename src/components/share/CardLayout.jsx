import React from "react";

export default function CardLayout({ CardConfig, data }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {Array.isArray(CardConfig) &&
        CardConfig.map((card, idx) => (
          <div
            className="bg-white rounded-xl shadow-md p-4 sm:p-6 hover:shadow-lg transition-shadow"
            key={idx}
          >
            <div className="flex items-center space-x-3 sm:space-x-4 mb-4">
              <div className="bg-indigo-500 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center">
                <span className="text-white text-lg sm:text-xl font-semibold">
                  {card.first_name?.[0]}
                  {card.last_name?.[0]}
                  {card.name?.split(' ').map(n => n[0]).join('')}
                </span>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                  {card.first_name} {card.last_name} {card.name}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  {card.email}
                </p>
              </div>
            </div>

            <div className="space-y-1.5 sm:space-y-2 text-gray-700 text-sm sm:text-base">
              {data &&
                data.map((col, index) => (
                  <div key={index}>
                    {col.showLabel !== false && (
                      <span className="font-medium">{col.label} </span>
                    )}
                    <span>
                      {col.cell ? col.cell(card) : card[col.key] ?? "—"}
                    </span>
                  </div>
                ))}
            </div>
          </div>
        ))}
    </div>
  );
}
