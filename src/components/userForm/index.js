import classNames from "classnames/bind";
import { useRef, useState } from "react";
import styles from "./UserForm.module.scss";

const cx = classNames.bind(styles);

function UserForm() {
  const [info, setInfo] = useState({ name: "", gender: "", skills: [] });
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [skills, setSkills] = useState([]);
  const handleStopSubmit = (e) => {
    e.preventDefault();
  };

  const checkRef1 = useRef();
  const checkRef2 = useRef();
  const checkRef3 = useRef();
  const checkRef4 = useRef();
  const checkRef5 = useRef();
  const checkRef6 = useRef();
  const checkRef7 = useRef();

  const handleSubmit = () => {
    setInfo({ name: name, gender: gender, skills: skills.join(", ") });
    setName("");
    setGender("");
    checkRef1.current.checked = false;
    checkRef2.current.checked = false;
    checkRef3.current.checked = false;
    checkRef4.current.checked = false;
    checkRef5.current.checked = false;
    checkRef6.current.checked = false;
    checkRef7.current.checked = false;
    setSkills([""]);
  };

  const handleCheckbox = (e) => {
    if (info.skills.includes(e.target.value)) {
      return setSkills((prev) => [...prev]);
    } else {
      return setSkills((prev) => [...prev, e.target.value]);
    }
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("form")}>
        <h1>Form</h1>
        <form onSubmit={(e) => handleStopSubmit(e)}>
          <div className={cx("input-name")}>
            <label htmlFor="name">Full name</label>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              id="name"
              placeholder="Enter name..."
            />
          </div>
          <div className={cx("input-gender")}>
            Nam
            <input
              ref={checkRef1}
              onChange={(e) => setGender(e.target.value)}
              name="gender"
              value="Nam"
              type="radio"
            />
            Nữ
            <input
              ref={checkRef2}
              onChange={(e) => setGender(e.target.value)}
              name="gender"
              value="Nữ"
              type="radio"
            />
            Khác
            <input
              ref={checkRef3}
              onChange={(e) => setGender(e.target.value)}
              name="gender"
              value="Khác"
              type="radio"
            />
          </div>
          <div className={cx("input-skills")}>
            <label htmlFor="Javascript">Javascript </label>
            <input
              ref={checkRef4}
              onChange={(e) => {
                if (e.target.checked === true) {
                  handleCheckbox(e);
                }
              }}
              id="Javascript"
              type="checkbox"
              value="Javascript"
            />
            <label htmlFor="C++">C++ </label>
            <input
              ref={checkRef5}
              onChange={(e) => {
                if (e.target.checked === true) {
                  handleCheckbox(e);
                }
              }}
              id="C++"
              type="checkbox"
              value="C++"
            />
            <label htmlFor="PHP">PHP </label>
            <input
              ref={checkRef6}
              onChange={(e) => {
                if (e.target.checked === true) {
                  handleCheckbox(e);
                }
              }}
              id="PHP"
              type="checkbox"
              value="PHP"
            />
            <label htmlFor="C#">C#</label>
            <input
              ref={checkRef7}
              onChange={(e) => {
                if (e.target.checked === true) {
                  handleCheckbox(e);
                }
              }}
              id="C#"
              type="checkbox"
              value="C#"
            />
          </div>
          <button onClick={handleSubmit} type="submit">
            Submit
          </button>
        </form>
      </div>
      <div className={cx("content")}>
        <div className={cx("info")}>
          <p>
            Name: <span>{info.name}</span>
          </p>
          <p>
            Gender: <span>{info.gender}</span>
          </p>
          <p>
            Skills: <span>{info.skills}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserForm;
