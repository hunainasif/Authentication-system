import React from 'react'
import styles from  "./navbar.module.css"
import {Link} from "react-router-dom"
export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
      <div className={styles.wrapper}>
        <ul className={styles.list}>
         <Link to="/"> <li className={styles.listItem}>Home</li></Link>
         <Link to="/notes/1"> <li className={styles.listItem}>Notes</li></Link>
          <li className={styles.listItem}>Services</li>
          <li className={styles.listItem}>Contact Us</li>
        </ul>
      </div>
      <div className={styles.buttons}>
      <Link to="/login"><button className={styles.loginBtn}>Login</button></Link>
      <Link to="/register"> <button className={styles.registerBtn}>Register</button></Link>
      </div>
      </div>
    </div>
  )
}
