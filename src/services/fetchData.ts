import { FetchResponse } from "@/interfaces/common";
import translations from "@/locates/pl/translations.json";

const fetchData = async <T>(url: string): Promise<FetchResponse<T>> => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      return {
        data: null,
        error: `${translations["errorHttp"]}: ${response.status} - ${response.statusText}`,
      };
    }

    const data = await response.json();

    if (data && data.error) {
      return { data: null, error: data.error };
    }

    return { data, error: null };
  } catch (err) {
    if (err instanceof Error) {
      return { data: null, error: err.message || translations["errorUnknown"] };
    }
    return { data: null, error: translations["errorUnknown"] };
  }
};

export default fetchData;
