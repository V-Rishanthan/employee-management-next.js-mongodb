import React from 'react'
import AddUserForm from "./addUserForm"
import UpdateUserForm from "./updateUserForm"
const form = () => {

  const flag = true
  return (
    <div className="container mx-auto">
      {flag ? <AddUserForm /> : <UpdateUserForm />}
    </div>
  )
}

export default form