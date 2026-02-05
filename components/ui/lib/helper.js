const BASE_URL = "http://localhost:3000";

export const getUsers = async () => {
    const response = await fetch(`${BASE_URL}/api/users`);
    return response.json();
};
