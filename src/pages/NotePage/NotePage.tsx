import { useNavigate, useParams } from "react-router-dom";
import { NoteData } from "../../types";
import Button from "../../components/Button/Button";
import styles from "./NotePage.module.css";

const NotePage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const storedNotes = JSON.parse(localStorage.getItem("notes")!);
  const currentNote: NoteData = storedNotes.find(
    (note: NoteData) => note.title === params.title
  );

  return (
    <>
      <div className={styles.noteContainer}>
        <h2 className={styles.noteTitle}>{currentNote.title}</h2>
        <p className={styles.noteDescription}>{currentNote.description}</p>
        <Button text="Go Back" onClick={() => navigate(-1)} />
      </div>
    </>
  );
};

export default NotePage;
