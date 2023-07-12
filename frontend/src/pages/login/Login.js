import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./login.module.css"

export default function Login() {
  return (
   <div className={styles.login}>
    <div className={styles.wrapper}>
         <div className={styles.left}>
          <h1>Hello To Honey Notes Club</h1>
          <p>Honey Provides the World's Best Quality Notes All over the world He is the best Notes Maker on the Planet</p>
         </div>
         <div className={styles.right}>
          <div className={styles.form}>

           <input type="email" name="email" id="" placeholder='Enter Your email Address' />
           <input type="password" name="password" id="" placeholder='Enter Tour Password' />
           <button className={styles.loginBtn}>Login</button>
           <button className={styles.registerBtn}><Link to="/register"> Create New Account</Link></button>
          </div>

         </div>
    </div>
   </div>

  )
}
