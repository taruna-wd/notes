import React, { useState } from "react";
import MainBody from "../MainBody/MainBody";
import { useNotes } from "../../context/NotesContext";
import { Link, useNavigate } from "react-router-dom";


function Notes() {
  const { savedNotes, addNotes, archiveNote, updateNote, trashaddNote  } =
    useNotes();
  const [editingNote, setEditingNote] = useState(false);

  const handleEditChange = (e) => {
    let fieldName = e.target.name;
    let fieldValue = e.target.value;
    setEditingNote({
      ...editingNote,
      [fieldName]: fieldValue,
    });
  };

  const handleUpdateNote = () => {
    if (editingNote) {
      updateNote(editingNote.id, editingNote);
      setEditingNote(false);
    }
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
            <p>{newnote.title}</p>
            <p className="my-3 ">{newnote.content}</p>
            <div className="flex justify-end gap-3 cursor-pointer my-1">
              <a
                href="#_"
                className=" rounded-full  overflow-hidden group  relative hover:bg-gradient-to-r hover:from-gary-400 hover:to-gray-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-gray-400 transition-all ease-out duration-300"
              >
                <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span class="relative">
                  <i
                    className="fa-solid fa-trash   rounded-full p-2"
                    onClick={() => trashaddNote(newnote.id)}
                  ></i>
                </span>
              </a>
              <a
                className=" rounded-full  overflow-hidden group  relative hover:bg-gradient-to-r hover:from-gary-400 hover:to-gray-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-gray-400 transition-all ease-out duration-300"
              >
                <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span class="relative">
                  <i
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
                className="fa-solid fa-pen-to-square rounded-full p-2"
                onClick={() => setEditingNote(newnote)}
              ></i>
                </span>
              </a>
              
              <Link to="/drawing"
               className=" rounded-full  overflow-hidden group  relative hover:bg-gradient-to-r hover:from-gary-400 hover:to-gray-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-gray-400 transition-all ease-out duration-300"
              >
                <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span class="relative">
                  <i
                    className="fa-solid fa-file-arrow-down rounded-full p-2"
                  ></i>
                </span>
              </Link>
              
              
            </div>
          </div>
        ))}
      </div>
      {editingNote && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2shadow-lg">
          <div class="relative w-full p-3 border rounded-md shadow-white m-2 bg-black  ">
            <form className="flex flex-row">
              <div>
                <i
                  class="fa-solid fa-xmark"
                  onClick={() => setEditingNote(null)}
                ></i>
                <input
                  type="text"
                  name="title"
                  value={editingNote.title}
                  onChange={handleEditChange}
                  className="w-full  bg-transparent  border outline-none mb-3"
                  required
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Add note"
                  onChange={handleEditChange}
                  className="w-full  bg-transparent  outline-none border"
                  name="content"
                  value={editingNote.content}
                  required
                />
              </div>
              <div>
                <i
                  class="fa-solid fa-floppy-disk"
                  onClick={handleUpdateNote}
                ></i>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Notes;
