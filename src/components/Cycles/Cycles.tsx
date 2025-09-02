import styles from "./Cycles.module.css";

export function Cycles() {
  return (
    <div className={styles.cycles}>
      <span className={styles.cyclesLabel}>Ciclos:</span>

      <div className={styles.cyclesContent}>
        <span
          className={`${styles.cyclesContentDot} ${styles.workTime}`}
        ></span>
        <span
          className={`${styles.cyclesContentDot} ${styles.shortBreakTime}`}
        ></span>
        <span
          className={`${styles.cyclesContentDot} ${styles.workTime}`}
        ></span>
        <span
          className={`${styles.cyclesContentDot} ${styles.workTime}`}
        ></span>
        <span
          className={`${styles.cyclesContentDot} ${styles.workTime}`}
        ></span>
        <span
          className={`${styles.cyclesContentDot} ${styles.workTime}`}
        ></span>
        <span
          className={`${styles.cyclesContentDot} ${styles.longBreakTime}`}
        ></span>
      </div>
    </div>
  );
}
