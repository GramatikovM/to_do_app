import { useNavigate } from "react-router-dom";
import { NoteData } from "../../types";
import Button from "../Button/Button";
import styles from "./Note.module.css";

const Note: React.FC<NoteData> = ({ title, description, setNotes }) => {
  const navigate = useNavigate();
  const storedNotes = JSON.parse(localStorage.getItem("notes")!);

  const handleView = () => {
    navigate(`${title}`);
  };
  const handleDelete = () => {
    const updatedNotes = storedNotes.filter(
      (note: NoteData) => note.title !== title
    );
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    if (setNotes) {
      setNotes(updatedNotes);
    }
  };

  return (
    <div className={styles.noteContainer}>
      <div className={styles.textContainer}>
        <h2 className={styles.noteTitle}>{title}</h2>
        <p className={styles.noteDescription}>{description}</p>
      </div>
      <div className={styles.buttonContainer}>
        <Button text="View" onClick={handleView} />
        <Button text="Delete" isRed={true} onClick={handleDelete} />
      </div>
    </div>
  );
};

export default Note;
