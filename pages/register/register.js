import styles from "./register.module.css";

export default function Register() {
  return (
    <div className={styles.maincontainer}>
      <div className={styles.main}>
        <div className={styles.container}>
          <h1>Register</h1>
          <p>Name</p>
          <input className={styles.input}></input>
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

          <button className={styles.createbutton}>Create new account</button>
        </div>
      </div>
    </div>
  );
}
