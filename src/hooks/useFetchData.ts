import { useEffect, useState } from "react";

const useFetchData = <T>(url: string) => {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading };
};

export default useFetchData;
