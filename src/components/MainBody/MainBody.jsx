import React, {  useState } from "react";
import { v4 as uuidv4 } from "uuid";

const MainBody = ({ addNotes }) => {
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


  return (
    <>
      <section className=" my-3 font-sans ">
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
              </button>
              <button type="button"></button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default MainBody;
