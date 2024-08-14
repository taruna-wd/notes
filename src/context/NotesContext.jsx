



import React, { createContext, useState, useContext, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  const [savedNotes, setSavedNotes] = useState(
    JSON.parse(localStorage.getItem("savednotes")) || []
  );
  const [archive, setArchive] = useState(
    JSON.parse(localStorage.getItem("archive")) || []
  );
  const [trashNote, setTrashNote] = useState(
    JSON.parse(localStorage.getItem("trashNote")) || []
  );

  useEffect(() => {
    localStorage.setItem("savednotes", JSON.stringify(savedNotes));
    localStorage.setItem("archive", JSON.stringify(archive));
    localStorage.setItem("trashNote", JSON.stringify(trashNote));
  }, [savedNotes, archive, trashNote]);

  const addNotes = (newnote) => {
    setSavedNotes((currentnote) => [
      ...currentnote,
      { ...newnote, id: uuidv4() },
    ]);
  };

  const trashaddNote = (id) => {
    const addTrash = savedNotes.find((note) => note.id === id);
    if (addTrash) {
      setTrashNote((current) => [...current, addTrash]);
    }
    setSavedNotes(savedNotes.filter((note) => note.id !== id));
  };

  const deleteNote = (id) => {
    setTrashNote(trashNote.filter((note) => note.id !== id));
  };
  const archiveNote = (id) => {
    const addArchive = savedNotes.find((note) => note.id === id);
    if (addArchive) {
      setArchive((currentArchive) => [...currentArchive, addArchive]);
      setSavedNotes(savedNotes.filter((note) => note.id !== id));
    }
  };

  const updateNote = (id, updatedNote) => {
    setSavedNotes((currentNotes) =>
      currentNotes.map((note) =>
        note.id === id ? { ...note, ...updatedNote } : note
      )
    );
  };

  const restoreforTrash = (id) =>{
    const restoreInTrash = trashNote.find((note)=> note.id ===  id);
    if(restoreInTrash){
      setSavedNotes((currentnote) => [...currentnote , restoreInTrash])
      setTrashNote(trashNote.filter((note)=> note.id !== id))
    }
  };
  const restoreforArchive = (id) =>{
      const restoreInArchive = archive.find((note)=> note.id ===  id);
      if(restoreInArchive){
        setSavedNotes((currentnote) => [...currentnote , restoreInArchive])
        setArchive(archive.filter((note)=> note.id !== id))
      }
  };

  return (
    <NotesContext.Provider value={{ savedNotes, archive, trashNote, addNotes, deleteNote, archiveNote ,updateNote,trashaddNote, restoreforTrash ,restoreforArchive }}>
      {children}
    </NotesContext.Provider>
  );
};

export const useNotes = () => useContext(NotesContext)
