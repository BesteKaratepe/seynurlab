import { errorMessage, successMessage } from "../helpers/toast";

const fetchData = async (
  url,
  token = null,
  method = "GET",
  bodyData = null,
  scsMsg = "Data fetched successfully.",
  errMsg = "Data fetch failed!"
) => {
  const options = {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  if (method === "POST") {
    options.body = JSON.stringify(bodyData);
  }

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        `HTTP error! status: ${response.status}, msg: ${
          errorData.message || "Unknown error"
        }`
      );
    }

    const result = await response.json();
    successMessage(scsMsg);
    return result;
  } catch (error) {
    console.error("Fetch error:", error);
    errorMessage(`${errMsg} Error desc: ${error.message}`);
    return null;
  }
};

export default fetchData;
