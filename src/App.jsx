import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Table from "./components/Table/Table";

import { useQuery } from "react-query";
import { useEffect, useState, useMemo } from "react";

function App() {
  const [userList, setUserList] = useState(["luisavila97"]);
  const [queryArray, setQueryArray] = useState([]);

  const url = `https://api.github.com/users/${userList.slice(-1)}`;
  const { data } = useQuery([`user-${userList.slice(-1)}`, userList], async () => {
    const data = await fetch(url);
    return data.json();
  });

  useEffect(() => {
    if (data) {
      setQueryArray([...queryArray, data]);
    }
  }, [data]);

  return (
    <div className="App">
      <Header userList={userList} setUserList={setUserList} />
      <Table queries={queryArray} />
      <Footer />
    </div>
  );
}

export default App;
