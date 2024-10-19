import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Button from "../components/Button";
import styles from "../styles/Login.module.css";
import fetchData from "../api/fetch";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signUp = async (e) => {
    e.preventDefault();

    const url = "http://localhost:5000/api/register";
    const bodyData = { username, password };

    try {
      const response = await fetchData(
        url,
        null,
        "POST",
        bodyData,
        "Register success.",
        "Register failed."
      );

      if (response) {
        setUsername("");
        setPassword("");
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.container}>
      <img
        src={require("../assets/seynur_logo_dark.png")}
        alt="Logo"
        className={styles.logo}
      />
      <form onSubmit={signUp} className={styles.form}>
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
        <Button type="submit">Register</Button>
      </form>
      <p className={styles.link}>
        Do you have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Register;
