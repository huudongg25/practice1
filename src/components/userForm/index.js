import classNames from "classnames/bind";
import { useState } from "react";
import styles from "./UserForm.module.scss";

const cx = classNames.bind(styles);

function UserForm() {
  const [info, setInfo] = useState({ name: "", gender: "", skills: "" });
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [skills, setSkills] = useState([]);
  const handleStopSubmit = (e) => {
    e.preventDefault();
  };

  const handleSubmit = () => {
    setInfo({ name: name, gender: gender, skills: skills.join(", ") });
    setName("");
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
              onChange={(e) => setGender(e.target.value)}
              name="gender"
              value="Nam"
              type="radio"
            />
            Nữ
            <input
              onChange={(e) => setGender(e.target.value)}
              name="gender"
              value="Nữ"
              type="radio"
            />
            Khác
            <input
              onChange={(e) => setGender(e.target.value)}
              name="gender"
              value="Khác"
              type="radio"
            />
          </div>
          <div className={cx("input-skills")}>
            <label htmlFor="Javascript">Javascript </label>
            <input
              onChange={(e) => setSkills((prev) => [...prev, e.target.value])}
              id="Javascript"
              type="checkbox"
              value="Javascript"
            />
            <label htmlFor="C++">C++ </label>
            <input
              onChange={(e) => setSkills((prev) => [...prev, e.target.value])}
              id="C++"
              type="checkbox"
              value="C++"
            />
            <label htmlFor="PHP">PHP </label>
            <input
              onChange={(e) => setSkills((prev) => [...prev, e.target.value])}
              id="PHP"
              type="checkbox"
              value="PHP"
            />
            <label htmlFor="C#">C#</label>

            <input
              onChange={(e) => setSkills((prev) => [...prev, e.target.value])}
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
