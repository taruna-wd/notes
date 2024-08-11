import React from 'react'

function Modal({editnote ,setNote ,setEditnote}) {

    console.log(editnote)
  let save = (e) =>{
    e.preventDefault()
    addNotes(editnote)
  }
  let handleChange = ( e)=>{
    let fieldName = e.target.name;
    let fieldValue = e.target.value;
    setEditnote((currentvalue) => {
      return { ...currentvalue, [fieldName]: fieldValue };
      });
  }
  return (
    <div>
         <form className="flex" onSubmit={save}>
          <div className="w-full bg-transparent outline-none">
            <div>
              <input
                type="text"
                placeholder="Add title"
                onChange={handleChange}
                value={editnote.title}
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
                value={editnote.content}
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
    </div>
  )
}

export default Modal