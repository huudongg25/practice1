import classNames from "classnames/bind";
import { useRef, useState } from "react";
import styles from "./TodoList.module.scss";

const cx = classNames.bind(styles);

var msg = "Vui lòng nhập vào";
function TodoList() {
  const [inputValue, setInputValue] = useState("");
  const [todo, setTodo] = useState(() => {
    const localItem = localStorage.getItem("TODO");
    return JSON.parse(localItem) ?? [];
  });

  const inputRef = useRef();

  const handleSetTodo = () => {
    setTodo((prev) => {
      const newWork = [...prev, inputValue];
      localStorage.setItem("TODO", JSON.stringify(newWork));
      return newWork;
    });
    setInputValue("");
    inputRef.current.focus();
  };

  const handleDelete = (index) => {
    const newWork = [...todo];
    newWork.splice(index, 1);
    localStorage.setItem("TODO", JSON.stringify(newWork));
    return setTodo(newWork);
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <h1>TODO LIST</h1>
        <input
          ref={inputRef}
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          type="text"
          placeholder="Enter to do..."
        />
        <button
          onClick={() => {
            if (inputValue === "") {
              alert(msg);
            } else {
              handleSetTodo();
            }
          }}
        >
          ADD
        </button>
      </div>
      <div className={cx("content")}>
        {todo.map((item, index) => {
          return (
            <div key={index}>
              <input value={item} />
              <button onClick={(e) => handleDelete(index)}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TodoList;
