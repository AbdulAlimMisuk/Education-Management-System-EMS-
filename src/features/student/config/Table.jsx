import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

const Table = (action) => {
  return [
    { key: "first_name", label: "Name" ,cell: (card) => `${card.first_name} ${card.last_name}`

    },
    // { key: "email", label: "Email" },
    // { key: "phone", label: "Phone" },
    // { key: "address", label: "Address:" },
    // { key: "admission_date", label: "Admission", cell: (card) => new Date(card.admission_date).toLocaleDateString() || "-"},
    { key: "class_id", label: "Class", cell: (card) => card.class_id?.name || "-"},
    { key: "section_id", label: "Section", cell: (card) => card.section_id?.name || "-"},

    {
        label: "Action" ,
     
      cell: (card) => (
        <div className="mt-5 flex  ">
          <button
            className="  font-medium text-yellow-600 hover:text-yellow-900 py-2 px-2 rounded-lg transition-colors cursor-pointer"
            onClick={() => {
              action.onEdit(card);
            }}
          >
           <FaEdit />
          </button>
          <button
            className=" font-medium text-red-600 hover:text-red-900 py-2 px-2 rounded-lg  transition-colors cursor-pointer"
            onClick={() => {
              action.onDelect(card._id);
            }}
          >
           <FaTrash />
          </button>
        </div>
      ),
    },
  ];
};
export default Table;
