import React, { useState } from "react";
import { useStore } from "../context/store";
import { Link } from "react-router-dom";
import fetchData from "../api/fetch";
import styles from "../styles/Login.module.css";
import Button from "../components/Button";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useStore();

  const doLogin = async (e) => {
    e.preventDefault();

    const url = "http://localhost:5000/api/login";
    const bodyData = { username, password };

    const data = await fetchData(
      url,
      null,
      "POST",
      bodyData,
      "Login successful.",
      "Login failed!"
    );

    if (data) {
      login(data.token);
      setUsername("");
      setPassword("");
    }
  };

  return (
    <div className={styles.container}>
      <img
        src={require("../assets/seynur_logo_dark.png")}
        alt="Logo"
        className={styles.logo}
      />
      <form onSubmit={doLogin} className={styles.form}>
        <label className={styles.label}>Username</label>
        <input
          className={styles.input}
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label className={styles.label}>Password</label>
        <input
          className={styles.input}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit">Login</Button>
      </form>
      <p className={styles.link}>
        Don't have an account yet? <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default Login;
