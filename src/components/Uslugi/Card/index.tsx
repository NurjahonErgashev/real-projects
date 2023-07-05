/* eslint-disable @typescript-eslint/no-explicit-any */
import Button from "../../Button";
import styles from "./index.module.scss";
export function UslugiCard(props: {
  img: any;
  title: string;
  description: string;
}) {
  const { img, title, description } = props;

  return (
    <div className={styles.Card}>
      <div className={styles.Img}>
        <img src={img} alt="" />
      </div>
      <div className={styles.Texts}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className={styles.Button}>
        <button >Подробнее</button>
      </div>
    </div>
  );
}
