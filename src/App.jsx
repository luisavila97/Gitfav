import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Table from "./components/Table";

import useFetch from "./hooks/useFetch";

function App() {
  const { userList, setUserList, queryArray } = useFetch();

  return (
    <div className="App">
      <Header userList={userList} setUserList={setUserList} />
      <Table queries={queryArray} />
      <Footer />
    </div>
  );
}

export default App;
