import styles from "./styles.module.css";

export default function OverlayCard({className, name}) {
  return (
    <>
      <div className={className}>
        <span className={styles.name}>{name}</span>
      </div>
    </>
  )
}