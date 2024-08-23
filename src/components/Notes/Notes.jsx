import React, { useState } from "react";
import MainBody from "../MainBody/MainBody";
import { useNotes } from "../../context/NotesContext";
import { Link, useParams } from "react-router-dom";

function Notes() {
  const { savedNotes, addNotes, archiveNote, updateNote, trashaddNote  ,pinNotebtn ,image ,otherNote} =
    useNotes();
  const [editingNote, setEditingNote] = useState(false);
  
  console.log(import.meta.env.VITE_APPWRITE_URL)


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

  
  return (
    <div className="w-3/5">
      <MainBody addNotes={addNotes} />
      <div className="flex justify-around flex-wrap">
        
      {savedNotes.map((newnote) => (
        
          <div
            key={newnote.id}
            className="w-1/4 p-3 border rounded-md  shadow-lg m-2"
          >
            
            <div className="flex justify-between items-center">
            {/* <img src={image} alt="" /> */}

              <p>{newnote.title}</p> <span >
              <i
                  className={`fa-solid fa-thumbtack ${
                    newnote.pinned ? "text-blue-500" : ""
                  }`}
                  onClick={() => pinNotebtn(newnote.id)}
                ></i>              </span>
            </div>
            <p className="my-3 ">{newnote.content}</p>
            <div className="flex justify-end gap-3 cursor-pointer my-1">
              <a
                className=" rounded-full  overflow-hidden group  relative hover:bg-gradient-to-r hover:from-gary-400 hover:to-gray-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-gray-400 transition-all ease-out duration-300"
              >
                <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span class="relative">
                  <i
                    title="trash"
                    className="fa-solid fa-trash   rounded-full p-2"
                    onClick={() => trashaddNote(newnote.id)}
                  ></i>
                </span>
              </a>
              <a className=" rounded-full  overflow-hidden group  relative hover:bg-gradient-to-r hover:from-gary-400 hover:to-gray-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-gray-400 transition-all ease-out duration-300">
                <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span class="relative">
                  <i
                  title="archive"
                    className="fa-solid fa-file-arrow-down rounded-full p-2"
                    onClick={() => archiveNote(newnote.id)}
                  ></i>
                </span>
              </a>

              <a
                href="#_"
                className=" rounded-full  overflow-hidden group  relative hover:bg-gradient-to-r hover:from-gary-400 hover:to-gray-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-gray-400 transition-all ease-out duration-300"
              >
                <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span class="relative">
                  <i
                  title="edit"
                    className="fa-solid fa-pen-to-square rounded-full p-2"
                    onClick={() => setEditingNote(newnote)}
                  ></i>
                </span>
              </a>
              <a className=" rounded-full  overflow-hidden group  relative hover:bg-gradient-to-r hover:from-gary-400 hover:to-gray-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-gray-400 transition-all ease-out duration-300">
                <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span class="relative">
                  <i className="fa-solid fa-bell rounded-full p-2"></i>
                </span>
              </a>

              <Link
                to={`/notes/${newnote.id}`}
                className=" rounded-full  overflow-hidden group  relative hover:bg-gradient-to-r hover:from-gary-400 hover:to-gray-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-gray-400 transition-all ease-out duration-300"
              >
                <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span class="relative">
                  <i className="fa-solid fa-scroll rounded-full p-2"></i>
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
      {editingNote && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2shadow-lg">
          <div class="relative w-full p-3 border rounded-md shadow-white m-2 bg-black  ">
            <form className="flex flex-col" onSubmit={handleUpdateNote}>
              <div   className="flex justify-between my-2 ">
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
               <div>
               
                
               </div>
                
              </div>

            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Notes;
