import { FetchResponse } from "@/interfaces/common";

const fetchData = async <T>(url: string): Promise<FetchResponse<T>> => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      return {
        data: null,
        error: `Błąd HTTP: ${response.status} - ${response.statusText}`,
      };
    }

    const data = await response.json();

    if (data && data.error) {
      return { data: null, error: data.error };
    }

    return { data, error: null };
  } catch (err) {
    if (err instanceof Error) {
      return { data: null, error: err.message || "Wystąpił nieznany błąd" };
    }
    return { data: null, error: "Wystąpił nieznany błąd" };
  }
};

export default fetchData;
