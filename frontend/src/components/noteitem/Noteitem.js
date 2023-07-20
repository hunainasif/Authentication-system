import React, { useContext } from 'react'
import styles from "./noteitem.module.css"
import NotesContext from '../../context/notes/NotesContext'


export default function Noteitem({note}) {
  const context=useContext(NotesContext)
  const {deleteNotes}=context;

  return (
    <div className={styles.noteitem}>
        <div className={styles.wrapper}>
            <h1>{note.title}</h1>
            <p>{note.descrpition}</p>
            <span>{note.tag}</span>

            <div className={styles.buttons}>

            <button onClick={()=>{deleteNotes(note._id)}}>Delete</button>
            <button>update</button>
            </div>
        </div>
      
    </div>
  )
}
