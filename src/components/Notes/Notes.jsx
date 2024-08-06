import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import MainBody from '../MainBody/MainBody';

function Notes() {
  let [saveNotes, setSaveNotes] = useState([
    {
      id:uuidv4(),
      title: "new",
      content: "new content"
    }
  ]);

  let storage =  ()=>{
    localStorage.setItem("savenotes" , saveNotes)
    console.log("saved ")
  }

  let addNotes = (newnotes) => {
    setSaveNotes((currentNotes) => [...currentNotes, {...newnotes , id:uuidv4()}]);
    console.log("add new note");
  };


   let deleteNote = (id) =>{
      setSaveNotes(  saveNotes.filter((note)=> note.id != id))
   }
  //  let archiveNote = (id) =>{
  //   let getArchive = saveNotes.find((note)=> note.id != id )
  //   setArchive((currentNotes)=>[...currentNotes , getArchive]  )
  //   setSaveNotes(saveNotes.filter((note)=> note.id != id))

  //      console.log(" archove note")
  //  }
  return (
    <>
      <div className='w-3/5'>
        <MainBody addNotes={addNotes} />
        {/* <h2>Notes List</h2> */}
        <div className='mt-7 flex flex-wrap'>
          {saveNotes.map((newnote ) => (
            <div key={newnote.id} className="w-1/4 p-3 border rounded-md shadow-white m-2">
              <p>{newnote.title}</p>
              <p>{newnote.content}</p>
              <div className='flex justify-around cursor-pointer'>
              <i className="fa-solid fa-ellipsis-vertical"></i>
              <i className="fa-solid fa-trash" onClick={()=>deleteNote(newnote.id)}></i>
              {/* <i className="fa-solid fa-file-arrow-down" onClick={()=>archiveNote(newnote.id)}></i> */}

              </div>
             
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Notes;
