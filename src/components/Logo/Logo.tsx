import { TimerIcon } from "lucide-react";
import styles from "./Logo.module.css";

export function Logo() {
  return (
    <div className={styles.logo}>
      <a className={styles.link} href="/">
        <TimerIcon size={64} />
        <span>Chronos</span>
      </a>
    </div>
  );
}
