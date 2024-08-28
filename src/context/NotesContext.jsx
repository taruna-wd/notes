import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useRef,
} from "react";
import { v4 as uuidv4 } from "uuid";
import databaseService from "../database/store";
import { AuthContext } from "./Authcontext";

const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  // const { user } = useContext(AuthContext);

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
  const imageRef = useRef(null);

  

  // const [storeDrawing, setStoreDrawing] = useState([]);

  useEffect(() => {
    localStorage.setItem("savednotes", JSON.stringify(savedNotes));
    localStorage.setItem("archive", JSON.stringify(archive));
    localStorage.setItem("trashNote", JSON.stringify(trashNote));
    localStorage.setItem("othernote", JSON.stringify(otherNote));
  }, [savedNotes, archive, trashNote, otherNote]);

  // useEffect(() => {
  //   if (user) {
  //     // Fetch notes from the database when the user is logged in
  //     fetchNotes();
  //   }
  // }, [user]);

  // const fetchNotes = async () => {
  //   try {
  //     const notesResponse = await databaseService.getNotes(user.$id);
  //     setSavedNotes(notesResponse.documents);
  //   } catch (error) {
  //     console.error("Failed to fetch notes", error);
  //   }
  // };
  const addNotes = async (newnote) => {
    setSavedNotes((currentnote) => [ ...currentnote,
      { ...newnote, id: uuidv4(), pinned: false ,  image:null},
    ]);
    // if (!user) {
    //   console.log("User must be logged in to add notes");
    //   return;
    // }

    // try {
    //   const noteId = uuidv4();
    //   await databaseService.createNote({
    //     title: newnote.title,
    //     content: newnote.content,
    //     slug: noteId,
    //     userId: user.$id,
    //   });
    //   setSavedNotes((currentnote) => [ ...currentnote,
    //     { ...newnote, id: uuidv4(), pinned: false },
    //   ]);
    // } catch (error) {
    //   console.log("error adding note", error);
    // }
  };
  

  const trashaddNote = (id) => {
    const addTrash = savedNotes.find((note) => note.id === id);
    console.log(addTrash)
    if (addTrash) {
      setTrashNote((current) => [...current, addTrash]);
    
    }
    setSavedNotes(savedNotes.filter((note) => note.id !== id));
  };

  const deleteNote = async(id) => {
    setTrashNote(trashNote.filter((note) => note.id !== id));

    // if (!user) {
    //   console.log("User must be logged in to delete notes");
    //   return;
    // }
    // try {
    //   await databaseService.deleteNote(id)
    //   setTrashNote(trashNote.filter((note) => note.id !== id));
    //   console.log("Error deleting note:", error);

    // } catch (error) {
    // }
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
    // if (!user) {
    //   console.log("User must be logged in to update notes");
    //   return;
    // }
    // try {
    //   await databaseService.updateNote(id,updateNote)
    //   setSavedNotes((currentNotes) =>
    //     currentNotes.map((note) =>
    //       note.id === id ? { ...note, ...updatedNote } : note
    //     )
    //   );
    // } catch (error) {
    //   console.log("Error updating note:", error);
 
    // }
    
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

 

  // Other functions remain the same, with the same user checks if necessary

  return (
    <NotesContext.Provider
      value={{
        savedNotes,
        archive,
        trashNote,
        otherNote,
        pinNotebtn,
        addNotes,
        deleteNote,
        archiveNote,
        updateNote,
        trashaddNote,
        restoreforTrash,
        restoreforArchive,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export const useNotes = () => useContext(NotesContext);
