import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../index";
import styles from "./NavBar.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";

const NavBarComponent = () => {
  const { user } = useContext(Context);
  const [ role, setRole ] = useState(null);
  const [active, setActive] = useState("");
  const navigate = useNavigate();

  const handleExit = () => {
    user.logout();
  };

  const fetchUser = async () => {
    const userData = await user.userDataInfo();
    setRole(userData.role);
  };

  useEffect(() => {
    fetchUser();
  }, []);


  return (
    <header className={styles.header}>
      <ul className={styles.navbar}>
        <li className={styles.nav_item}>
          <NavLink className={styles.link} to="/map">
            Карта
          </NavLink>
        </li>
        <li className={styles.nav_item}>
          <NavLink className={styles.link} to="/tasks">
            Задачи
          </NavLink>
        </li>
        <li className={styles.nav_item}>
          <NavLink className={styles.link} to="/profile">
            Профиль
          </NavLink>
        </li>
        <li className={styles.nav_item}>
          <NavLink onClick={handleExit} className={styles.link} to="/login">
            Выйти
          </NavLink>
        </li>
        <li className={styles.nav_item}>
          <NavLink className={styles.link} to="/admin">
            {role == 'User' && <p>Админка</p>}
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default observer(NavBarComponent);
