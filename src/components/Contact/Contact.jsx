import css from "./Contact.module.css";

export default function Contact({ data: { id, name, number }, onDelete }) {
  return (
    <div className={css.container}>
      <div className={css.textContainer}>
        {/* <svg>
          <use href="./assets/react.svg#icon-phone"></use>
        </svg> */}
        <p className={css.text}>{name}</p>
        {/* <svg>
          <use href="./assets/react.svg#icon-phone"></use>
        </svg> */}
        <p className={css.text}>{number}</p>
      </div>
      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
