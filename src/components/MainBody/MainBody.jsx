import React, { useState } from "react";
import Notes from "../Notes/Notes";
import { v4 as uuidv4 } from 'uuid';


const MainBody = ({addNotes}) => {
  const [note, setNote] = useState({
    id : uuidv4(),
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    let fieldName = e.target.name;
    let fieldValue = e.target.value;
    console.log(fieldValue);
    setNote((currentvalue) => {
      return { ...currentvalue, [fieldName]: fieldValue };
    });
  };

  const Submit = (e) => {
    console.log(note);
    addNotes(note)
    e.preventDefault();
    setNote({
      title: "",
      content: "",
    });
  };

  return (
    <div className=" my-3">
      <div className="w-full p-3 rounded-lg bg-zinc-700 mx-3">
        <form className="flex" onSubmit={Submit}>
          <div className="w-full bg-transparent outline-none">
            <div>
              <input
                type="text"
                placeholder="Add title"
                onChange={handleChange}
                value={note.title}
                name="title"
                className="w-full  bg-transparent  outline-none mb-3"
                required
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Add note"
                onChange={handleChange}
                className="w-full  bg-transparent  outline-none"
                value={note.content}
                name="content"
                required
              />
            </div>
          </div>

          <button type="submit">
            <i className="fa-solid fa-notes-medical px-3"></i>
          </button>
          <button type="button">
            <i className="fa-solid fa-paintbrush px-3"></i>
          </button>
        </form>
        {/* <p class="mt-2 text-sm text-green-600 dark:text-green-500"><span class="font-medium">Well done!</span> Some success message.</p> */}
      </div>
  
    </div>
  );
};

export default MainBody;
