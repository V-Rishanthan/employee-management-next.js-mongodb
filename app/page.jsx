"use client";
import Button from "@/components/ui/button";
import Table from "@/components/ui/table";
import Form from "../components/ui/form";
import { useState } from "react";
import { UserPlus } from "lucide-react";

export default function Home() {
  const [visible, setVisible] = useState(false);

  const handleToggle = () =>{
    setVisible(visible?false:true)
  }

  return (
    <div className="p-6">
      {/* Header */}
      <h1 className="text-4xl text-gray-900 text-center capitalize font-bold">
        Employees management
      </h1>

      {/* add btn section */}
       <Button onClick={handleToggle} variant="primary">
          <span><UserPlus/></span>Add Record
        </Button>

      {/* form container */}
      <div>{visible ? <Form /> : <></>}</div>

      {/* line */}
      <div className="mt-6 border-b border-gray-300"></div>

      {/* table section */}
      <div className="container mx-auto">
        <Table />
      </div>
    </div>
  );
}
