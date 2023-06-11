import { useState } from "react";

const useFirebase = (requestConfig, processData) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const sendRequest = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = fetch(requestConfig.url, {
        method: requestConfig.method,
      });

      if (!response.ok) {
        throw new Error("Request has failed!");
      }
      const data = await response.json();
      processData(data);
    } catch (err) {
      setError(err.message || "Oops, something went wrong!");
    }
    setIsLoading(false);
  };
  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useFirebase;
