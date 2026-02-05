// "use client";
// import { useReducer } from "react";
// import { Plus } from "lucide-react";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { addUser } from '../../lib/helper'

// const formReducer = (state, event) => {
//   return {
//     ...state,
//     [event.target.name]: event.target.value,
//   };
// };

// export default function AddUserForm() {
//   const [formData, setFormData] = useReducer(formReducer, {
//     status: "active",
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const required = ["firstName", "lastName", "email", "salary", "birthday"];
//     const missing = required.filter(
//       (k) => !String(formData[k] ?? "").trim()
//     );

//     if (missing.length) {
//       toast.error("Please fill all fields");
//       return;
//     }

//     // Convert form data to DB format
//     const payload = {
//       name: `${formData.firstName} ${formData.lastName}`,
//       email: formData.email,
//       salary: Number(formData.salary),
//       birthday: formData.birthday,
//       status: formData.status,
//     };

//     try {
//       const res = await addUser(payload);

//       if (res?.error) {
//         toast.error(res.error);
//         return;
//       }

//       toast.success("Employee added successfully!");

//       // Optional: clear form
//       e.target.reset();
//     } catch (err) {
//       toast.error("Failed to add employee");
//       console.error(err);
//     }

//     console.log("FORM DATA =>", formData);
//     toast.success("Employee added successfully!");
//   };

//   return (
//     <form
//       className="grid w-full max-w-3xl gap-4 lg:grid-cols-2"
//       onSubmit={handleSubmit}
//     >
//       <div>
//         <input
//           name="firstName"
//           onChange={setFormData}
//           type="text"
//           className="w-full rounded-md border px-5 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
//           placeholder="First Name"
//         />
//       </div>

//       <div>
//         <input
//           name="lastName"
//           onChange={setFormData}
//           type="text"
//           className="w-full rounded-md border px-5 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
//           placeholder="Last Name"
//         />
//       </div>

//       <div>
//         <input
//           name="email"
//           onChange={setFormData}
//           type="email"
//           className="w-full rounded-md border px-5 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
//           placeholder="Email"
//         />
//       </div>

//       <div>
//         <input
//           name="salary"
//           onChange={setFormData}
//           type="number"
//           className="w-full rounded-md border px-5 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
//           placeholder="Salary"
//         />
//       </div>

//       <div>
//         <input
//           name="birthday"
//           onChange={setFormData}
//           type="date"
//           className="w-full rounded-md border px-5 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
//         />
//       </div>

//       <div className="flex items-center gap-10">
//         <label className="flex items-center gap-2 text-gray-800">
//           <input
//             onChange={setFormData}
//             type="radio"
//             value="active"
//             name="status"
//             defaultChecked
//             className="h-4 w-4 cursor-pointer accent-green-500"
//           />
//           Active
//         </label>

//         <label className="flex items-center gap-2 text-gray-800">
//           <input
//             onChange={setFormData}
//             type="radio"
//             value="inactive"
//             name="status"
//             className="h-4 w-4 cursor-pointer accent-green-500"
//           />
//           Inactive
//         </label>
//       </div>

//       <div className="lg:col-span-2">
//         <button
//           type="submit"
//           className="flex items-center gap-2 w-auto rounded-md bg-green-500 px-6 py-2 text-white transition hover:bg-green-600"
//         >
//           <Plus size={16} />
//           Add
//         </button>
//       </div>
//     </form>
//   );
// }


"use client";
import { useReducer } from "react";
import { Plus } from "lucide-react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addUser } from "../../lib/helper";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

export default function AddUserForm() {
  const [formData, setFormData] = useReducer(formReducer, {
    status: "active",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const required = ["firstName", "lastName", "email", "salary", "birthday"];
    const missing = required.filter((k) => !String(formData[k] ?? "").trim());

    if (missing.length) {
      toast.error("Please fill all fields");
      return;
    }

    const payload = {
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      salary: Number(formData.salary),
      birthday: formData.birthday,
      status: formData.status,
    };

    try {
      const res = await addUser(payload);

      if (res?.error) {
        toast.error(res.error);
        return;
      }

      toast.success("Employee added successfully!");
      e.target.reset(); // clears inputs
    } catch (err) {
      console.error(err);
      toast.error("Failed to add employee");
    }
  };

  return (
    <form
      className="grid w-full max-w-3xl gap-4 lg:grid-cols-2"
      onSubmit={handleSubmit}
    >
      <input
        name="firstName"
        onChange={setFormData}
        type="text"
        className="w-full rounded-md border px-5 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
        placeholder="First Name"
      />

      <input
        name="lastName"
        onChange={setFormData}
        type="text"
        className="w-full rounded-md border px-5 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
        placeholder="Last Name"
      />

      <input
        name="email"
        onChange={setFormData}
        type="email"
        className="w-full rounded-md border px-5 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
        placeholder="Email"
      />

      <input
        name="salary"
        onChange={setFormData}
        type="number"
        className="w-full rounded-md border px-5 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
        placeholder="Salary"
      />

      <input
        name="birthday"
        onChange={setFormData}
        type="date"
        className="w-full rounded-md border px-5 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
      />

      <div className="flex items-center gap-10">
        <label className="flex items-center gap-2 text-gray-800">
          <input
            onChange={setFormData}
            type="radio"
            value="active"
            name="status"
            defaultChecked
            className="h-4 w-4 cursor-pointer accent-green-500"
          />
          Active
        </label>

        <label className="flex items-center gap-2 text-gray-800">
          <input
            onChange={setFormData}
            type="radio"
            value="inactive"
            name="status"
            className="h-4 w-4 cursor-pointer accent-green-500"
          />
          Inactive
        </label>
      </div>

      <div className="lg:col-span-2">
        <button
          type="submit"
          className="flex items-center gap-2 w-auto rounded-md bg-green-500 px-6 py-2 text-white transition hover:bg-green-600"
        >
          <Plus size={16} />
          Add
        </button>
      </div>
    </form>
  );
}
