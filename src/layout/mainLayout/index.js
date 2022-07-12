import Header from "../../components/header";
import styles from "./MainLayout.module.scss";
import classNames from "classnames/bind";
import { children } from "react";

const cx = classNames.bind(styles);

function MainLayout({ children, headerName }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <Header headerName={headerName}></Header>
      </div>
      <div className={cx("content")}>{children}</div>
    </div>
  );
}

export default MainLayout;
