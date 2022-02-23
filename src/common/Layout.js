import Head from "next/head";
import Link from "next/link";
import styles from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
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
