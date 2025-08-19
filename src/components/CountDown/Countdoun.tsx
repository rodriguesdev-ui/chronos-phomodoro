import styles from "./Countdown.module.css";

export function CountDown() {
  return (
    <div className={styles.countDown}>
      <span>00:00</span>
    </div>
  );
}
