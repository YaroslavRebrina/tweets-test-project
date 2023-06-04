import { NavLink, Outlet } from "react-router-dom";
import css from "./Header.module.css";

export const Header = () => {
  return (
    <div>
      <header className={css.header}>
        <nav className={css.headerNav}>
          <NavLink to={"/"} className={css.headerNavLink}>
            Home
          </NavLink>
          <NavLink to={"/tweets"}>Tweets</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
