import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Header({ headerName }) {
  return (
    <div className={cx("wrapper")}>
      <h1 className={cx("header-name")}>{headerName}</h1>
      <div className={cx("header-nav")}>
        <Link className={cx("header-nav-item")} to="/todo">
          TODO LIST
        </Link>
        <Link className={cx("header-nav-item")} to="/user">
          USER FORM
        </Link>
      </div>
    </div>
  );
}

export default Header;
