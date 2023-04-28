import { useQuery } from "react-query";
import { useEffect, useState } from "react";

const useFetch = () => {
  const [userList, setUserList] = useState(["luisavila97"]);
  const [queryArray, setQueryArray] = useState([]);

  const url = `https://api.github.com/users/${userList.slice(-1)}`;

  const fetchData = async () => {
    const data = await fetch(url);
    return data.json();
  };

  const { data } = useQuery(
    [`user-${userList.slice(-1)}`, userList],
    fetchData,
    {
      enabled: !!userList,
    }
  );

  useEffect(() => {
    if (data) {
      setQueryArray([...queryArray, data]);
    }
  }, [data]);

  return { userList, setUserList, queryArray };
};

export default useFetch;
