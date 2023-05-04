import Image from "next/image";
import styles from "./styles.module.css";

export default function Card() {
  return (
    <div className={styles.container}>
      <svg className={styles.glowContainer}>
        <rect
          pathLength={100}
          strokeLinecap="round"
          className={styles.glowBlur}
        ></rect>
        <rect
          pathLength={100}
          strokeLinecap="round"
          className={styles.glowLine}
        ></rect>
      </svg>
      <div className={styles.title}>
        <h1 className={styles.titleCard}>Rey Skywalker</h1>
        <p className={styles.subtitleCard}>
          Era uma catadora de sucata que descobriu ser sensível à Força durante
          sua busca ao lendário Mestre Jedi Luke Skywalker.
        </p>
      </div>
      <div className={styles.topics}>
        <h6 className={styles.titleTopic}>Filmes</h6>
        <p className={styles.descriptionTopic}>
          The Force Awakens, The Last Jedi, The Rise of Skywalker & Forces of
          Destiny
        </p>
        <h6 className={styles.titleTopic}>Espécie</h6>
        <p className={styles.descriptionTopic}>Humana</p>
        <h6 className={styles.titleTopic}>Altura</h6>
        <p className={styles.descriptionTopic}>1,7m</p>
        <h6 className={styles.titleTopic}>Localidade</h6>
        <p className={styles.descriptionTopic}>Jakku</p>
        <h6 className={styles.titleTopic}>Armas</h6>
        <p className={styles.descriptionTopic}>
          Sabre de luz, Blaster, Quarterstaff
        </p>
      </div>
    </div>
  );
}
