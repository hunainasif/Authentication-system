import React from 'react'
import styles from  "./register.module.css"
export default function Register() {
  return (
     <div className={styles.register}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <h1>Honey</h1>
          <span>The Name of Trust</span>
          <p>Honey Provide the The Best Quality Software Services All over the globe</p>
        </div>
        <div className={styles.right}>
          <input type="text" name="name" id="" placeholder='Enter your Name' />
          <input type="email" name="email" id="" placeholder='Enter your Email' />
          <input type="password" name="password" id="" placeholder='Enter your password'/>
          <button className={styles.registerBtn}>Register</button>
        </div>
      </div>
     </div>
  )
}
