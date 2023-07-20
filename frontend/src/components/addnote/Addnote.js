import React, { useContext, useState } from 'react'
import styles from  "./addnote.module.css"
import NotesContext from '../../context/notes/NotesContext'



export default function Addnote() {
    const context =useContext(NotesContext)
    const {addNotes}=context;

    const [credentials,setCredentials]=useState({title:"",description:"",tag:""})
    const handleOnChange=(e)=>{
      setCredentials({...credentials,[e.target.name]:e.target.value})

    }
   const handleOnClick=(e)=>{
    e.preventDefault();
    addNotes({title:credentials.title,description:credentials.description,tag:credentials.description})
    setCredentials({title:"",description:"",tag:""})

   }
  return (
    <div className={styles.addNote}>
        <div className={styles.wrapper}>
            <h1>Add Notes</h1>
            <input onChange={handleOnChange} type="text" name="title" id="" placeholder='Enter title here'/>
            <input onChange={handleOnChange} type="text" name="description" id=""  placeholder='Enter description here'/>
            <input onChange={handleOnChange} type="text" name="tag" id=""  placeholder='Enter tag here'/>
            <button className={styles.noteBtn} onClick={handleOnClick}>Add Note</button>
        </div>

    </div>
  )
}
