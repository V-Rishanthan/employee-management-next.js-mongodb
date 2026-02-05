import { Pencil,Delete } from "lucide-react";
import data from '../../database/data.json'

export default function Table() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border-collapse">
        {/* Table Head */}
        <thead>
          <tr className="bg-gray-800">
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-300">
              Name
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-300">
              Email
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-300">
              Salary
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-300">
              Birthday
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-300">
              Status
            </th>
            <th className="px-6 py-3 text-center text-sm font-semibold text-gray-300">
              Actions
            </th>
          </tr>
        </thead>
{/* mongodb://localhost:27017/ */}
        {/* Table Body */}
        <tbody className="bg-gray-100">
         {
          data?.map((obj,i)=><Tr {...obj} key={i}/>)
         }
        
        </tbody>
      </table>
    </div>
  );
}

const Tr = ({id,name,avatar,email,salary,date,status}) =>{
  return(
 <tr className="border-b hover:bg-gray-200 transition">
            {/* Name */}
            <td className="px-6 py-4 flex items-center gap-3">
              <img
                src={avatar || '#'}
                alt="User avatar"
                className="w-8 h-8 rounded-full"
              />
              <span className="font-medium text-gray-800">{name || "Unknown"}</span>
            </td>

            {/* Email */}
            <td className="px-6 py-4 text-gray-700">
             {email || "Unknown"}
            </td>

            {/* Salary */}
            <td className="px-6 py-4 text-gray-700">
           {salary || "Unknown"}
            </td>

            {/* Birthday */}
            <td className="px-6 py-4 text-gray-700">
             <span>{date||"Unknown"}</span>
            </td>

            {/* Status */}
            <td className="px-6 py-4">
              <span className="inline-block bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
               {status||"Unknown"}
              </span>
            </td>

            {/* Actions */}
            <td className="px-6 py-4 text-center flex justify-around gap-5">
              <button className="cursor-pointer bg-indigo-500 text-white p-2 rounded-md hover:bg-indigo-600 transition">
                <Pencil size={16} />
              </button>
              <button className="cursor-pointer bg-red-500 text-white p-2 rounded-md hover:bg-indigo-600 transition">
                <Delete size={16} />
              </button>
            </td>
          </tr>
  )
}