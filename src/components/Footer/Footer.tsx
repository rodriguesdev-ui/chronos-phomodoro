import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a className={styles.footerLink} href="">
        Entenda como funciona a Técnica Pomodoro 🍅
      </a>
      <a className={styles.footerLink} href="">
        Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com carinho
        🙏
      </a>
    </footer>
  );
}
