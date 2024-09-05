import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  
} from "react";
import { v4 as uuidv4 } from "uuid";

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
  const [otherNote, setOtherNote] = useState(
    JSON.parse(localStorage.getItem("othernote")) || []
  );
  const [storeDrawing, setStoreDrawing] = useState(
    JSON.parse(localStorage.getItem("othernote")) || []
  );

  const [disabled, setDisabled] = useState(false);
  const [openMenuId, setOpenMenuId] = useState(false);

  const [menu, setMenu] = useState(false);
  useEffect(() => {
    localStorage.setItem("savednotes", JSON.stringify(savedNotes));
    localStorage.setItem("archive", JSON.stringify(archive));
    localStorage.setItem("trashNote", JSON.stringify(trashNote));
    localStorage.setItem("othernote", JSON.stringify(otherNote));
  }, [savedNotes, archive, trashNote, otherNote]);

  
  const addNotes =  (newnote) => {
   setSavedNotes((currentnote) => [
    ...(Array.isArray(currentnote) ? currentnote : []),
    { ...newnote, id: uuidv4(), pinned: false , image :"" , data :null },
  ]);
  };

  const trashaddNote = (id) => {
    const addTrash = savedNotes.find((note) => note.id === id);
    console.log(addTrash)
    if (addTrash) {
      setTrashNote((current) => [...current, addTrash]);
    }
    setSavedNotes(savedNotes.filter((note) => note.id !== id));
    setDisabled(false)
  };

  const archiveNote = (id) => {
    const addArchive = savedNotes.find((note) => note.id === id);
    if (addArchive) {
      setArchive((currentArchive) => [...currentArchive, addArchive]);
      setSavedNotes(savedNotes.filter((note) => note.id !== id));
    }
  };

  const deleteNote = (id) => {
    setTrashNote(trashNote.filter((note) => note.id !== id));
  };

  const updateNote = (id, updatedNote) => {
    setSavedNotes((currentNotes) =>
      currentNotes.map((note) =>
        note.id === id ? { ...note, ...updatedNote } : note
      )
    );
    
  };

  const restoreforTrash = (id) => {
    const restoreInTrash = trashNote.find((note) => note.id === id);
    if (restoreInTrash) {
      setSavedNotes((currentnote) => [...currentnote, restoreInTrash]);
      setTrashNote(trashNote.filter((note) => note.id !== id));
    }

  };

  const restoreforArchive = (id) => {
    const restoreInArchive = archive.find((note) => note.id === id);
    if (restoreInArchive) {
      setSavedNotes((currentnote) => [...currentnote, restoreInArchive]);
      setArchive(archive.filter((note) => note.id !== id));
    }
  };

  const pinNotebtn = (id) => {
      const pinNote = savedNotes.find((note)=> note.id === id )

      if(pinNote){
        setOtherNote((current)=> [...current , {...pinNote , pinned : true}])
      }
      setSavedNotes(savedNotes.filter((note) => note.id !== id))

  };

  const  UnpinNote = (id)=>{
  const unpin = otherNote.find((note)=> note.id === id)
  if(unpin){
    setSavedNotes((prevPin) => [...prevPin ,{...unpin , pinned : false}])
  }
  setOtherNote(otherNote.filter((note)=> note.id !== id))
 }

  const makeCopy = (id) => {
    const noteToCopy = savedNotes.find((note) => note.id === id);
    if (noteToCopy) {
      const copiedNote = { ...noteToCopy, id: uuidv4() };
      setSavedNotes((currentnote) => [
        ...(Array.isArray(currentnote) ? currentnote : []),
        copiedNote,
      ]);
    }
    setOpenMenuId(false)
  };

 
  return (
    <NotesContext.Provider
      value={{
        savedNotes,
        archive,
        trashNote,
        otherNote,
        menu,
        openMenuId,
        UnpinNote,
        setOpenMenuId,
        setDisabled,
        makeCopy,
        pinNotebtn,
        addNotes,
        setSavedNotes,
        deleteNote,
        archiveNote,
        updateNote,
        trashaddNote,
        setMenu,
        restoreforTrash,
        restoreforArchive,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export const useNotes = () => useContext(NotesContext);
