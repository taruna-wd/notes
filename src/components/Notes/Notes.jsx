import React, { useState ,useRef } from "react";
import MainBody from "../MainBody/MainBody";
import { useNotes  } from "../../context/NotesContext";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useDrawing } from "../../context/DrawingContext";
import Pinned from "./Pinned";




function Notes() {
  const {savedNotes,addNotes,archiveNote,updateNote,trashaddNote,pinNotebtn , UnpinNote, copy , makeCopy} = useNotes();

  const imageRef = useRef(null);
  const [image, setImage] = useState(
    JSON.parse(localStorage.getItem("image")) || []
  );
  const [editingNote, setEditingNote] = useState(false);
  
  const [openMenuId, setOpenMenuId] = useState(false);

  const handleEditChange = (e) => {
    let fieldName = e.target.name;
    let fieldValue = e.target.value;
    setEditingNote({
      ...editingNote,
      [fieldName]: fieldValue,
    });
  };

  const handleUpdateNote = (e) => {
    if (editingNote) {
      updateNote(editingNote.id, editingNote);
      e.preventDefault();
    }

    setEditingNote(false);
  };

  const handleChangeImage = (e )=>{
    const file = URL.createObjectURL(e.target.files[0])
    setImage((current )=> [... current , uuidv4() , file])

  }
  const imageAdd =(id)=>{
      imageRef.current.click()
  }

  const toggleMenu = (id) => {
    if (openMenuId === id) {
      setOpenMenuId(false);  // Close the menu if it's already open
    } else {
      setOpenMenuId(id);  // Open the menu for this specific note
    }
  };
  return (
    <div className="w-3/5">
      <MainBody addNotes={addNotes} />
      <Pinned/>
      <h2 className="text-xl my-2 px-2 ">Notes List</h2>

      <div className="flex flex-wrap gap-3 justify-between md:justify-start">
        
        {savedNotes.map((newnote) => (
          <div
            key={newnote.id}
            className="md:w-1/4 p-3 border rounded-md  shadow-lg m-2 w-full"
            onDoubleClick={() => setEditingNote(newnote)}
          >
               {/* { image && <img src={image}   key = {newnote.id}/>  } */}
            <div className="flex justify-between items-center">
              <p>{newnote.title}</p>
              <span>
               {newnote.pinned ? (
                    <i className="fa-solid fa-thumbtack-slash"></i>
                  ) : (
                    <i
                      className="fa-solid fa-thumbtack"
                      onClick={() => pinNotebtn(newnote.id)}
                      title="Pin Note"
                    ></i>
                  )}
              </span>
            </div>
            <p className="my-3 ">{newnote.content}</p>
            <div  className="flex  items-center flex-row-reverse">
              <i
                className="fa-solid fa-ellipsis-vertical  px-1 cursor-pointer "
                title="More"
                onClick={()=> toggleMenu(newnote.id) }
              ></i>
               <i
                    title="archive"
                    className="fa-solid fa-file-arrow-down rounded-full p-2"
                    onClick={(id) => archiveNote(newnote.id)}
                  ></i>
                   
              </div>

              {openMenuId === newnote.id && (
                <div className="flex flex-col   gap-3 cursor-pointer   absolute   bg-black  w-48  rounded-lg p-2 ">
                  <p onClick={() => trashaddNote(newnote.id)}> Delete note </p>

                  <Link
                    to={`/notes/${newnote.id}`}
                  >
                    Add Drawing
                  </Link>
                  <p onClick={() => makeCopy(newnote.id)}> Make a copy </p>
                </div>
              )}
          </div>
        ))}
        
      </div>
      {editingNote && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2shadow-lg">
          <div class="relative w-full p-3 border rounded-md shadow-white m-2 bg-black  ">
            <form className="flex flex-col" onSubmit={handleUpdateNote}>
              <div className="flex justify-between my-2 ">
                <i
                  className="fa-solid fa-xmark  hover:bg-slate-900 p-1 rounded-sm"
                  onClick={() => setEditingNote(null)}
                ></i>
                <i
                  className="fa-solid fa-floppy-disk  hover:bg-slate-900 p-1 rounded-sm"
                  onClick={handleUpdateNote}
                ></i>
              </div>
              <div className="">
                <input
                  type="text"
                  name="title"
                  placeholder="title"
                  value={editingNote.title}
                  onChange={handleEditChange}
                  className="w-full  bg-transparent   outline-none mb-3 hover:border-b pb-1"
                  required
                />
                <input
                  type="text"
                  name="content"
                  value={editingNote.content}
                  onChange={handleEditChange}
                  className="w-full  bg-transparent   outline-none mb-3 hover:border-b pb-1"
                  required
                />
                <div></div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Notes;
