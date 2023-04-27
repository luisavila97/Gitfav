import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Table from "./components/Table";

import { useEffect, useState } from "react";
import useFetch from "./hooks/useFetch";

function App() {
  const [userList, setUserList] = useState(["luisavila97"]);
  const [queryArray, setQueryArray] = useState([]);

  useFetch(userList.slice(-1), userList, setQueryArray, queryArray);

  return (
    <div className="App">
      <Header userList={userList} setUserList={setUserList} />
      <Table queries={queryArray} />
      <Footer />
    </div>
  );
}

export default App;
