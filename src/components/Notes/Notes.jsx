import React, { useState ,useRef } from "react";
import MainBody from "../MainBody/MainBody";
import { useNotes  } from "../../context/NotesContext";
import { Link, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";


function Notes() {
  const {savedNotes,addNotes,archiveNote,updateNote,trashaddNote,pinNotebtn,setSavedNotes    } = useNotes();
  const imageRef = useRef(null);

  const [image, setImage] = useState(
    JSON.parse(localStorage.getItem("image")) || []
  );

  const [editingNote, setEditingNote] = useState(false);
  
  const [disabled, setDisabled] = useState(false);

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

  const imageAdd =()=>{
      imageRef.current.click()

  }
  const handleChangeImage = (e,id)=>{
    
    const file = URL.createObjectURL(e.target.files[0])
    const add = savedNotes.find((note) => note.id !== id);
    if(add){
      setImage((file)=> [...file ])
    console.log("ab ho rahi h")
    }




    
    
   

  }
  return (
    <div className="w-3/5">
      <MainBody addNotes={addNotes} />
      <div className="flex justify-around flex-wrap">
        {savedNotes.map((newnote) => (
          <div
            key={newnote.id}
            className="md:w-1/4 p-3 border rounded-md  shadow-lg m-2 w-full"
            onDoubleClick={() => setEditingNote(newnote)}
          >
            <img src={image} alt={image.name} /> 

            <div className="flex justify-between items-center">
              <p>{newnote.title}</p>
              <span>
                <i
                  className={`fa-solid fa-thumbtack ${
                    newnote.pinned ? "text-blue-500" : ""
                  }`}
                  onClick={() => pinNotebtn(newnote.id)}
                ></i>{" "}
              </span>
            </div>
            <p className="my-3 ">{newnote.content}</p>
            <div  className="flex  items-center flex-row-reverse">
              <i
                className="fa-solid fa-ellipsis-vertical  px-1 cursor-pointer "
                title="More"
                onClick={() => setDisabled(!disabled) }
              ></i>
               <i
                    title="archive"
                    className="fa-solid fa-file-arrow-down rounded-full p-2"
                    onClick={(id) => archiveNote(newnote.id)}
                  ></i>
                   <i
                    title="image"
                    className="fa-solid fa-image rounded-full p-2"
                    onClick={imageAdd}

                  >  <input type="file" ref={imageRef}  onChange={handleChangeImage} style={{display : "none"}}/>
   </i>
              </div>

              {disabled && (
                <div className="flex flex-col   gap-3 cursor-pointer   absolute   bg-black  w-48  rounded-lg p-2 ">
                  <p onClick={() => trashaddNote(newnote.id)}> Delete note </p>

                  <Link
                    to={`/notes/${newnote.id}`}
                  >
                    Add Drawing
                  </Link>
                  <p onClick={() => trashaddNote(newnote.id)}> Make a copy </p>
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
