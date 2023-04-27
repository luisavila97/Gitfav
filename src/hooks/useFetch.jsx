import { useQuery } from "react-query";
import { useEffect } from "react";

const useFetch = (user, userList, setQueryArray, queryArray) => {
  const url = `https://api.github.com/users/${user}`;

  const fetchData = async () => {
    const data = await fetch(url);
    return data.json();
  };

  const { data } = useQuery([`user-${user}`, userList], fetchData, {
    enabled: !!user,
  });

  useEffect(() => {
    if (data) {
      setQueryArray([...queryArray, data]);
    }
  }, [data]);
};

export default useFetch;
