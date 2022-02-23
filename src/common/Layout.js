import Link from "next/link";
import styles from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <div>
      <ul className={styles.list}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/doctors">Doctors</Link>
        </li>
        <li>
          <Link href="/appointment">Appointment</Link>
        </li>
      </ul>
      {children}
    </div>
  );
}
