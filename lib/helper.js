const BASE_URL = `http://localhost:3000`;

export const getUser = async () => {
  const response = await fetch(`${BASE_URL}/api/users/`);
  if (!response.ok) throw new Error("Failed to fetch");
  const json = await response.json();

  return json;
};
