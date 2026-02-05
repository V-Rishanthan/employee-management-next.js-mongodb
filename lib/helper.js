const BASE_URL = `http://localhost:3000`;

// All Users
export const getUsers = async () => {
  const response = await fetch(`${BASE_URL}/api/users/`);
  if (!response.ok) throw new Error("Failed to fetch");
  const json = await response.json();

  return json;
};

// Single User
export const getUser = async (userId) => {
  const response = await fetch(`${BASE_URL}/api/users//${userId}`);
  const json = await response.json();
  if (json) return json;

  return {};
};

// posting a new user

export async function addUser(formData) {
  try {
    const Options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };

    const response = await fetch(`${BASE_URL}/api/users/`, Options);
    const json = await response.json();

    return json;
  } catch (error) {
    return error;
  }
}

// Update a New user

export async function updateUser(userId, formData) {
  try {
    const Options = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };

    const response = await fetch(`${BASE_URL}/api/users/${userId}`, Options);
    const json = await response.json();
    return json;
  } catch (error) {
    throw new console.log(error);
  }
}

// Delete user

export async function deleteUser(userId) {
  try {
    const Options = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };

    const response = await fetch(`${BASE_URL}/api/users/${userId}`, Options);
    const json = await response.json();
    return json;
  } catch (error) {
    throw new console.log(error);
  }
}
