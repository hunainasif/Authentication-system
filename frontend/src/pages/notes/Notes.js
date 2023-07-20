import React, { useContext, useEffect } from 'react'
import Noteitem from '../../components/noteitem/Noteitem'
import styles from "./notes.module.css"
import NotesContext from '../../context/notes/NotesContext'
export default function Notes() {
  const context=useContext(NotesContext)
  const {notes,getAllNotes}=context

  useEffect(()=>{
  getAllNotes()
  },[])
  return (
    <div className={styles.notes}>
      <h1>Your Notes </h1>
      <div className={styles.wrapper} >

     {notes.map((note)=>{
      return <Noteitem key={note._id} note={note}/>
     })}
    
      </div>
    </div>
  )
}
