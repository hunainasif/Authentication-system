import { useState } from "react"
import NotesContext from "./NotesContext"

const NotesState=(props)=>{
  const url=`http://127.0.0.1:5500`

    
    const initialNotes=[]

      const [notes,setNotes]=useState(initialNotes)
    //   getAllNotes
      const getAllNotes=async()=>{

        const response=await fetch(`${url}/notes/getAllNotes`,
        {
          method:"GET",
          headers:{
            "Content-type":"application/json",
            "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRhZDc2NWI0ZmM0ZTY1ODQwMjNlZWQwIn0sImlhdCI6MTY4OTEwMTQ3NH0.pLzMHE7EGVoAsJvFP9usFiDgSAUqb59_jk6c169yiqA"

          }
        })
        const data=await response.json();
        console.log(data.notes)
        setNotes(data.notes)

      }
    //   updateNotes
    const updateNotes=async(id,title,description,tag)=>{
      const response=await fetch(`${url}/notes/updateNotes/${id}`,{
        method:"PUT",
        headers:{
          "Content-type":"applicaon/json",
          "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRhZDc2NWI0ZmM0ZTY1ODQwMjNlZWQwIn0sImlhdCI6MTY4OTEwMTQ3NH0.pLzMHE7EGVoAsJvFP9usFiDgSAUqb59_jk6c169yiqA"
        },
        body:JSON.stringify({title,description,tag})

      })
      const data=await response.json()
      console.log(data)

    }

    // deleteNotes
    const deleteNotes=async(id)=>{
      console.log(id)

      const response=await fetch(`${url}/notes/deleteNotes/${id}`,{
        method:"DELETE",
        headers:{
          "Content-type":"appication/json",
          
          "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRhZDc2NWI0ZmM0ZTY1ODQwMjNlZWQwIn0sImlhdCI6MTY4OTEwMTQ3NH0.pLzMHE7EGVoAsJvFP9usFiDgSAUqb59_jk6c169yiqA"
        }
      })

      const data=await response.json()
      console.log(data)
       
      const newNotes=notes.filter((note)=>{
        return note._id!==id
      })

      setNotes(newNotes)

    }
    // addNotes
      const addNotes=async({title,description,tag})=>{
        const response=await fetch(`${url}/notes/createNotes`,{
          method:"POST",
          headers:{
            "Content-type":"application/json",
            "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRhZDc2NWI0ZmM0ZTY1ODQwMjNlZWQwIn0sImlhdCI6MTY4OTEwMTQ3NH0.pLzMHE7EGVoAsJvFP9usFiDgSAUqb59_jk6c169yiqA"
          },
          body:JSON.stringify({title,description,tag})
        })
        const data=await response.json()
        console.log(data)
         setNotes(notes.concat(notes))
      }
    return(
    <NotesContext.Provider value={{notes,addNotes,deleteNotes,getAllNotes,updateNotes}}>
      
        {props.children}
        
    </NotesContext.Provider>
)}

export default NotesState;