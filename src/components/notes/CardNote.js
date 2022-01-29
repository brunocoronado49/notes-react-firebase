import React from 'react';
import { deleteNote } from '../../api/api';
import { useLocation } from "wouter";

const CardNote = ({note}) => {
    const [location, setLocation] = useLocation();

    const onDeleteNote = async (id) => {
        if(window.confirm("Do you want delete this note?")) {
            await deleteNote(id);
            alert("Note dleted successfully!")
            setLocation("/notes");
        }
    }

    return (
        <div className="card">
            <div className="container">
                <h3><b>{note.title}</b></h3>
                <p>{note.description}</p>
                <button 
                    className="btn-update"
                    onClick={() => {
                        setLocation(`/update-note/${note.id}`);
                    }}
                >Update</button>
                <button 
                    className="btn-delete"
                    onClick={event => {
                        event.stopPropagation();
                        onDeleteNote(note.id)
                    }}
                >Delete</button>
            </div>
        </div>
    );
};

export default CardNote;
