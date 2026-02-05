"use client";

import { useEffect, useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import { getUsers } from "./lib/helper";
import { useSelector, useDispatch } from "react-redux";
import { toggleChangeAction } from "../../redux/reducer"

export default function Table() {


  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;

    (async () => {
      try {
        setLoading(true);
        setError("");

        const res = await getUsers();
        console.log("API USERS =>", res);

        // If API returns {error: "..."} or something unexpected, normalize it
        const list = Array.isArray(res) ? res : [];
        if (mounted) setUsers(list);

        if (!Array.isArray(res) && res?.error) {
          setError(res.error);
        }
      } catch (err) {
        console.error("GET USERS ERROR =>", err);
        if (mounted) setError(err?.message || "Failed to fetch users");
      } finally {
        if (mounted) setLoading(false);
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);

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

        {/* Table Body */}
        <tbody className="bg-gray-100">
          {loading ? (
            <tr>
              <td colSpan={6} className="px-6 py-4 text-gray-700">
                Loading...
              </td>
            </tr>
          ) : error ? (
            <tr>
              <td colSpan={6} className="px-6 py-4 text-red-600">
                {error}
              </td>
            </tr>
          ) : users.length === 0 ? (
            <tr>
              <td colSpan={6} className="px-6 py-4 text-gray-700">
                No users found.
              </td>
            </tr>
          ) : (
            users.map((user) => <Tr key={user._id || user.id} {...user} />)
          )}
        </tbody>
      </table>
    </div>
  );
}

const Tr = ({ _id, name, avatar, email, salary, birthday, date, status }) => {
  const visible = useSelector((state) => state.app?.client?.toggleForm);
  const dispatch = useDispatch();
  const onUpdate = () => {
    dispatch(toggleChangeAction())
    console.log(visible);
  };
  // Support both "birthday" (DB) and "date" (your JSON old field)
  const birth = birthday || date;

  return (
    <tr className="border-b hover:bg-gray-200 transition">
      {/* Name */}
      <td className="px-6 py-4 flex items-center gap-3">
        <img
          src={avatar || "https://via.placeholder.com/40"}
          alt="User avatar"
          className="w-8 h-8 rounded-full object-cover"
        />
        <span className="font-medium text-gray-800">{name || "Unknown"}</span>
      </td>

      {/* Email */}
      <td className="px-6 py-4 text-gray-700">{email || "Unknown"}</td>

      {/* Salary */}
      <td className="px-6 py-4 text-gray-700">
        {salary !== undefined && salary !== null && salary !== ""
          ? salary
          : "Unknown"}
      </td>

      {/* Birthday */}
      <td className="px-6 py-4 text-gray-700">{birth || "Unknown"}</td>

      {/* Status */}
      <td className="px-6 py-4">
        {status === "active" && (
          <span className="inline-block bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
            Active
          </span>
        )}

        {status === "inactive" && (
          <span className="inline-block bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
            Inactive
          </span>
        )}
      </td>



      {/* Actions */}
      <td className="px-6 py-4 text-center flex justify-around gap-5">
        <button onClick={onUpdate} className="cursor-pointer bg-indigo-500 text-white p-2 rounded-md hover:bg-indigo-600 transition">
          <Pencil size={16} />
        </button>
        <button className="cursor-pointer bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition">
          <Trash2 size={16} />
        </button>
      </td>
    </tr>
  );
};
