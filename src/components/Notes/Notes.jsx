
import React, { useEffect, useState } from 'react'
import MainBody from '../MainBody/MainBody'
import { v4 as uuidv4 } from 'uuid';
import Archive from '../Archive/Archive';
import Modal from './Modal';
import Trash from '../Trash/Trash';

 
function Notes()   {
  const [savedNotes , setSavedNotes] = useState(JSON.parse(localStorage.getItem("savednotes")) || [])
  const [archive , setArchive ]  = useState(JSON.parse(localStorage.getItem("archive")) ||[])
  const [trashNote , setTrashNote ] = useState(JSON.parse(localStorage.getItem("trashNote")) ||[])


   useEffect(()=>{
   localStorage.setItem("savednotes" ,JSON.stringify(savedNotes));
   localStorage.setItem("archive" ,JSON.stringify(archive));
   localStorage.setItem("trashNote" ,JSON.stringify(trashNote));
    
   },[savedNotes,archive,trashNote])
   
 
  const addNotes = (newnote) =>{
    setSavedNotes((currentnote) => [...currentnote ,{ ...newnote, id: uuidv4() } ])
  }
  const deleteNote = (id) =>{
    const addTrash = savedNotes.find((note) => note.id === id);
  if(addTrash){
    setTrashNote((current) => [...current ,addTrash])

  } setSavedNotes(savedNotes.filter((note)=> note.id !== id))
  }
 
  const archiveNote = (id) => {
    const addArchive = savedNotes.find((note) => note.id === id);
  
    if (addArchive) {
      setArchive((currentArchive) => {
        const updatedArchive = [...currentArchive, addArchive];
        console.log("Updated Archive State:", updatedArchive); // Check if it is updating correctly
        return updatedArchive;
      });
      setSavedNotes(savedNotes.filter((note) => note.id !== id));
    }
  };
  
  
  // let [editnote , setEditnote] = useState([])
  // let editNote = (id) =>{
  //   let edit = savedNotes.find((note) =>note.id === id )  
  //   if (edit) {
  //     setEditnote((currentnote) => [...currentnote, edit]);
  //   }

  // }
  

  return (
    <>
      <div className='w-3/5 '>
        <MainBody addNotes={addNotes}/>
        <div className='flex justify-around flex-wrap' >
        {savedNotes.map((newnote) => (
            <div key={newnote.id} className="w-1/4 p-3 border rounded-md shadow-white m-2">
              <p>{newnote.title}</p>
              <p>{newnote.content}</p>
              <div className='flex justify-around cursor-pointer'>
                <i className="fa-solid fa-trash" onClick={() => deleteNote(newnote.id)}></i>
                <i className="fa-solid fa-file-arrow-down" onClick={() => archiveNote(newnote.id)}></i>
                <i className="fa-solid fa-pen-to-square" onClick={() => editNote(newnote.id)}></i>

              </div>
            </div>
          ))}
        </div>
        {/* <Modal editnote={editnote}/> */}

        <div className=''>
          <Archive archive={archive}   />
          <Trash trashNote={trashNote} />
        </div>
      
       
       
      
          </div>
    </>
  
  )
}

export default Notes 