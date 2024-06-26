import * as React from "react";
import { Note } from "../models/note.model";
import Notes from "./Notes";

interface INoteListProps {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

const NoteList: React.FunctionComponent<INoteListProps> = ({
  notes,
  setNotes,
}) => {
  const handleDelete = (id: string) => {
    setNotes(notes.filter((notes) => notes.id !== id));
  };
  const renderNotes = (): JSX.Element[] => {
    return notes.map((note) => {
      return <Notes key={note.id} note={note} handleDelete={handleDelete} />;
    });
  };
  return (
    <>
      <h2 className="mt-3"> Notes</h2>
      <div>{renderNotes()}</div>
    </>
  );
};

export default NoteList;
