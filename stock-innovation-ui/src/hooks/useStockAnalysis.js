import { useState } from "react";
import axios from "axios";

const API_BASE_URL =
  "https://rajat5ranjan-stock-api.hf.space/gradio_api/call/predict";
const REQUEST_TIMEOUT = 5 * 60 * 1000; // 5 minutes

function useStockAnalysis() {
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [startTime, setStartTime] = useState(null);

  const fetchAnalysis = async (ticker) => {
    if (!ticker.trim()) return;

    setLoading(true);
    setError(null);
    setAnalysis(null);
    setStartTime(Date.now());

    try {
      // First call to initiate the prediction
      const response = await axios.post(API_BASE_URL, {
        data: [ticker.toUpperCase()],
      });

      if (response.data?.event_id) {
        // Use Server-Sent Events to get the result
        const eventId = response.data.event_id;
        const eventSource = new EventSource(`${API_BASE_URL}/${eventId}`);

        // Set a timeout for 5 minutes
        const timeout = setTimeout(() => {
          eventSource.close();
          setError("Request timed out after 5 minutes. Please try again.");
          setLoading(false);
        }, REQUEST_TIMEOUT);

        const handleMessage = (event) => {
          try {
            const data = JSON.parse(event.data);
            if (data && data.length > 0) {
              // Got the analysis result
              clearTimeout(timeout);
              eventSource.close();
              setAnalysis(data[0]);
              setLoading(false);
            }
          } catch {
            // Ignore non-JSON data (like heartbeat messages)
            console.log("Received non-JSON data:", event.data);
          }
        };

        const handleComplete = (event) => {
          try {
            const data = JSON.parse(event.data);
            clearTimeout(timeout);
            eventSource.close();
            setAnalysis(data[0]);
            setLoading(false);
          } catch (parseError) {
            console.error("Error parsing complete event:", parseError);
          }
        };

        const handleError = () => {
          clearTimeout(timeout);
          eventSource.close();
          setError(
            "Connection error while waiting for analysis. Please try again."
          );
          setLoading(false);
        };

        eventSource.onmessage = handleMessage;
        eventSource.addEventListener("complete", handleComplete);
        eventSource.addEventListener("error", handleError);
        eventSource.onerror = handleError;
      } else {
        // Direct response (if API returns data immediately)
        setAnalysis(response.data);
        setLoading(false);
      }
    } catch (err) {
      setError(
        `Failed to fetch stock analysis for ${ticker.toUpperCase()}. Please check the ticker symbol and try again.`
      );
      console.error("API Error:", err);
      setLoading(false);
    }
  };

  return {
    analysis,
    loading,
    error,
    startTime,
    fetchAnalysis,
  };
}

export default useStockAnalysis;
