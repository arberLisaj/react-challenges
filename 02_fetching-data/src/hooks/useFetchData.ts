import axios, { CanceledError } from "axios";
import { useEffect, useState } from "react";

interface Data {
  score: number;
  word: string;
}

const useFetchData = (inputValue: string) => {
  const [data, setData] = useState<Data[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    axios
      .get<Data[]>(`https://api.datamuse.com/words?rel_jja=${inputValue}`, {
        signal: controller.signal,
      })
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err);
        setLoading(false);
      });

    return () => controller.abort();
  }, [inputValue]);
  return { data, error, isLoading };
};

export default useFetchData;
