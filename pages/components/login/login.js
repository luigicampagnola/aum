import styles from "./login.module.css";
import Link from "next/link";

export default function Login() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <h1>Member Login</h1>
        <p>Email</p>
        <input className={styles.input}></input>
        <p>Password</p>
        <input className={styles.input}></input>
        <button className={styles.button}>Login</button>
        <p className={styles.forgotpw}>Forgot password?</p>
        <div
          style={{
            borderTop: "1px solid #c4c4c4",
            marginLeft: 20,
            marginRight: 20,
          }}
        ></div>
        <Link
          href="/register/register
        "
        >
          <button className={styles.createbutton}>Create new account</button>
        </Link>
      </div>
    </div>
  );
}
