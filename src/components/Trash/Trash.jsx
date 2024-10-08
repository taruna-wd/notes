import React from 'react';
import { useNotes } from '../../context/NotesContext';

function Trash() {
  const { trashNote  , deleteNote ,restoreforTrash} = useNotes();

  return (
    <div className='mt-2  w-3/5'>
      <h2 className='text-center text-2xl border-b w-1/3 m-auto '>Trash Notes</h2>
      <div className="flex justify-around flex-wrap mt-2">

      {trashNote.length > 0 ? (
        trashNote.map((note) => (
          <div
            key={note.id}
            className="w-1/3 p-3 border rounded-md  shadow-lg m-2"
          >
            <p>{note.title}</p>
            <p className="my-3 ">{note.content}</p>
            <div className="flex justify-end gap-2 cursor-pointer my-1">
              <a
                className=" rounded-full  overflow-hidden group  relative hover:bg-gradient-to-r hover:from-gary-400 hover:to-gray-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-gray-400 transition-all ease-out duration-300"
              >
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span className="relative">
                  <i
                  title='Delete forever'
                    className="fa-solid fa-trash   rounded-full p-2"
                    onClick={() => deleteNote(note.id)}
                  ></i>
                </span>
              </a>
              <a
                className=" rounded-full  overflow-hidden group  relative hover:bg-gradient-to-r hover:from-gary-400 hover:to-gray-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-gray-400 transition-all ease-out duration-300"
              >
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span className="relative">
                  <i
                    title='Restore'
                    className="fa-solid fa-trash-arrow-up rounded-full p-2"
                    onClick={() => restoreforTrash(note.id)}
                  ></i>
                </span>
              </a>

             

              
            </div>
          </div>
        ))
      ) : (
        <p>No notes in trash.</p>
      )}
    </div>
    </div>
  );
}

export default Trash;
