const API_URL = import.meta.env.VITE_API_URL;

export const fetchActivities = async () => {
  if (!API_URL) {
    throw new Error('API URL is not defined in the environment variables.');
  }
  const apiResponse = await fetch(API_URL);

  if (!apiResponse.ok) {
    throw new Error(`HTTP response returned ${apiResponse.status}`);
  }

  return apiResponse.json();
};
