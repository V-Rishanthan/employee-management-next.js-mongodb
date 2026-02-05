import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
    name: String,
    email: String,
    salary: String,
    date: String,
    status: String,
    avatar: String
})

const Users = models.users || model('users', userSchema)
export default Users

