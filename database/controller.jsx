// Controller
import Users from "../model/user"


// GET
export async function getUsers() {
    try {
        const users = await Users.find({})
        return users;
    } catch (error) {
        throw new Error("Error While Fetching Data");
    }
}

export async function getUser(userId) {
    try {
        const user = await Users.findById(userId);
        return user;
    } catch (error) {
        throw new Error("Error While Fetching Data");
    }
}

// POST
export async function postUser(data) {
    try {
        const newUser = await Users.create(data);
        return newUser;
    } catch (error) {
        throw new Error("Error While Creating User");
    }
}

// PUT
export async function putUser(userId, data) {
    try {
        const user = await Users.findByIdAndUpdate(userId, data);
        return user;
    } catch (error) {
        throw new Error("Error While Updating User");
    }
}

// DELETE
export async function deleteUser(userId) {
    try {
        await Users.findByIdAndDelete(userId);
        return { deleted: true };
    } catch (error) {
        throw new Error("Error While Deleting User");
    }
}
