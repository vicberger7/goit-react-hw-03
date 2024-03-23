import css from "./Contact.module.css";
// import { HiPhone, HiUser } from "react-icons";

export default function Contact({ data: { id, name, number }, onDelete }) {
  return (
    <div className={css.container}>
      <div className={css.textContainer}>
        {/* <HiPhone size={30} color="black" /> */}
        <p className={css.text}>{name}</p>
        {/* <HiUser size={30} color="black" /> */}
        <p className={css.text}>{number}</p>
      </div>
      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
