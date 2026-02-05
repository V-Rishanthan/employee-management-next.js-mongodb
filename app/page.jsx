"use client";
import Button from "@/components/ui/button";
import Table from "@/components/ui/table";
import Form from "@/components/ui/form";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import { useState } from "react";
import { UserPlus } from "lucide-react";

export default function Home() {
  const [visible, setVisible] = useState(false);

  const handleToggle = () => {
    setVisible(!visible);
  };

  return (
    <Provider store={store}>
      <main className="min-h-screen bg-gray-50/50 p-6 md:p-12">
        <div className="max-w-7xl mx-auto">
          {/* Header & Add Button Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10 border-b border-gray-200 pb-6">
            <h1 className="text-4xl text-gray-900 capitalize font-bold tracking-tight">
              Employees Management
            </h1>
            <Button onClick={handleToggle} variant="primary" className="shadow-sm">
              <UserPlus className="w-5 h-5" />
              <span>Add Record</span>
            </Button>
          </div>

          {/* Form container */}
          <div className="transition-all duration-300 ease-in-out">
            {visible && (
              <div className="mb-10 p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                <Form />
              </div>
            )}
          </div>

          {/* Table section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <Table />
          </div>
        </div>
      </main>
    </Provider>
  );
}
