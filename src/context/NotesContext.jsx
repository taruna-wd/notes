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
  const [copy , setCopy] = useState([])
  const [otherNote, setOtherNote] = useState(
    JSON.parse(localStorage.getItem("othernote")) || []
  );
  const [storeDrawing, setStoreDrawing] = useState(
    JSON.parse(localStorage.getItem("othernote")) || []
  );

  const [reminder, setReminder] = useState(
    JSON.parse(localStorage.getItem("reminder")) || []
  );

  const [disabled, setDisabled] = useState(false);
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    localStorage.setItem("savednotes", JSON.stringify(savedNotes));
    localStorage.setItem("archive", JSON.stringify(archive));
    localStorage.setItem("trashNote", JSON.stringify(trashNote));
    localStorage.setItem("othernote", JSON.stringify(otherNote));
  }, [savedNotes, archive, trashNote, otherNote]);

  
  const addNotes =  (newnote) => {
    setSavedNotes((currentnote) => [ ...currentnote,
      { ...newnote, id: uuidv4(), pinned: false },
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
    setSavedNotes((currentnote) =>
      currentnote.map((note) =>
        note.id === id ? { ...note, pinned: !note.pinned } : note
      )
    );
  };

  const makeCopy = (id )=>{
    const copy = savedNotes.find((note)=> note.id === id);
    // if(copy){
    //   setSavedNotes((currentcopy) => [...currentcopy , copy ])

    // }
      // setSavedNotes(savedNotes.filter((note) => note.id !== id));

  }

  const reminderNoteAdd = ()=>{
    
  }
 
  return (
    <NotesContext.Provider
      value={{
        savedNotes,
        archive,
        copy,
        trashNote,
        makeCopy,
        otherNote,
        menu,
        setDisabled,
        pinNotebtn,
        addNotes,
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