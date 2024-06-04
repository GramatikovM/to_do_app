import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import type { NoteData } from "../../types";
import Note from "../Note/Note";
import Button from "../Button/Button";
import Pagination from "../Pagination/Pagination";
import styles from "./NoteList.module.css";

const NoteList = () => {
  const storedNotes = JSON.parse(localStorage.getItem("notes")!) || [];
  const [notes, setNotes] = useState(storedNotes);
  const [noteTitle, setNoteTitle] = useState("");
  const [noteDescription, setNoteDescription] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [notesPerPage] = useState(5);
  const indexOfLastRecord = currentPage * notesPerPage;
  const indexOfFirstRecord = indexOfLastRecord - notesPerPage;
  const currentNotes = notes.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(notes.length / notesPerPage);

  const handleTitleChange = (event: React.SyntheticEvent) => {
    setNoteTitle((event.target as HTMLInputElement).value);
  };
  const handleDescriptionChange = (event: React.SyntheticEvent) => {
    setNoteDescription((event.target as HTMLInputElement).value);
  };

  const handleAddNote = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (!noteTitle || !noteDescription) {
      alert("Add data");
    } else {
      const noteData = {
        id: uuid(),
        title: noteTitle,
        description: noteDescription,
      };
      const isNoteDuplicate = notes.some(
        (note: NoteData) => note.title === noteData.title
      );
      if (isNoteDuplicate) {
        alert("Note already exists.");
      } else {
        setNotes([noteData, ...notes]);
        setNoteTitle("");
        setNoteDescription("");
      }
    }
  };
  const handleClearAll = () => {
    localStorage.clear();
    setNotes([]);
  };

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className={styles.addNoteContainer}>
      <div className={styles.addNoteWrapper}>
        {currentNotes.map((note: NoteData) => (
          <Note
            key={note.id}
            title={note.title}
            description={note.description}
            setNotes={setNotes}
          />
        ))}
      </div>
      <form className={styles.addNoteWrapper}>
        <label htmlFor="noteTitle">Note Title</label>
        <input
          type="text"
          id="noteTitle"
          placeholder="...type here"
          onChange={handleTitleChange}
          value={noteTitle}
        />
        <label htmlFor="noteDescription">Note Description</label>
        <input
          type="text"
          id="noteDescription"
          placeholder="...type here"
          onChange={handleDescriptionChange}
          value={noteDescription}
        />
        <div className={styles.buttonContainer}>
          <Button text="Add Note" onClick={handleAddNote} />
          <Button text="Clear All" isRed onClick={handleClearAll} />
        </div>
      </form>
      <div className={styles.paginationContainer}>
        <Pagination
          nPages={nPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default NoteList;
