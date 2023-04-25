import gitfavImage from "../../assets/Gitfav.svg";

import styles from "./Header.module.css";
import { useState } from "react";

const Header = ({ userList, setUserList }) => {
  const [searchGithubUser, setSearchGithubUser] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setUserList([...userList, searchGithubUser]);
  };

  return (
    <header className={styles.header}>
      <img src={gitfavImage} alt="Gitfav logo" />
      <form onSubmit={handleSubmit}>
        <input
          id="input-search"
          type="text"
          placeholder="Enter the Github username you want to bookmark"
          onChange={(e) => setSearchGithubUser(e.target.value)}
        />
        <button>Bookmark</button>
      </form>
    </header>
  );
};

export default Header;
