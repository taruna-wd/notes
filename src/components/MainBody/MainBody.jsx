import React, { useRef, useState } from "react";
import Notes from "../Notes/Notes";
import { v4 as uuidv4 } from "uuid";
import { Modal } from "@mui/material";
import { useNotes } from "../../context/NotesContext";

const MainBody = ({ addNotes }) => {
  const { setImage, image, imageAdd, imageRef } = useNotes();
  const [note, setNote] = useState({
    id: uuidv4(),
    title: "",
    content: "",
  });

  const [showInput, SetShowInput] = useState(false);

  const handleChange = (e) => {
    let fieldName = e.target.name;
    let fieldValue = e.target.value;
    setNote((currentvalue) => {
      return { ...currentvalue, [fieldName]: fieldValue };
    });
  };

  const Submit = (e) => {
    addNotes(note);
    e.preventDefault();
    setNote({
      title: "",
      content: "",
    });
    SetShowInput(false);
  };

  //  const addImage = (e) =>{
  //   console.log(e.target.files)
  //   setImage(URL.createObjectURL(e.target.files[0]));

  //  }

  return (
    <>
      <div className=" my-3 font-sans ">
        <div className="w-full p-2  rounded-lg bg-zinc-700 mx-3 border border-gray-100  shadow-gray-500/40 ">
          <form
            className="flex justify-center items-end px-1"
            onSubmit={Submit}
          >
            <div
              className="w-full bg-transparent outline-none  "
              onClick={() => SetShowInput(true)}
            >
              {showInput ? (
                <div>
                  <input
                    type="text"
                    placeholder="Title"
                    onChange={handleChange}
                    value={note.title}
                    name="title"
                    className="w-full  bg-transparent  outline-none mb-3 font-bold "
                    required
                  />

                  <input
                    type="text"
                    placeholder="Take a note..."
                    onChange={handleChange}
                    className="w-full  bg-transparent  outline-none font-bold text-slate-200 "
                    value={note.content}
                    name="content"
                    required
                  />
                </div>
              ) : (
                <div>
                  <input
                    type="text"
                    placeholder="Take a note..."
                    onChange={handleChange}
                    className="w-full  bg-transparent  outline-none font-bold text-slate-200 "
                    value={note.content}
                    name="content"
                    required
                  />
                </div>
              )}
            </div>
            <div className="flex">
              <button type="submit">
                <i className="fa-solid fa-notes-medical px-3"></i>

                {/* <div onClick={imageAdd} > 
            <img src={image} alt="" />
          <i class="fa-solid fa-image px-3 " ><input type="file" ref={imageRef}  onChange={addImage} style={{display:"none"}}/></i>   
                 </div> */}
              </button>
              <button type="button"></button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default MainBody;
