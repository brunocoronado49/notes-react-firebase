import React from 'react';
import { deleteNote } from '../../api/api';
import { useLocation } from "wouter";

const CardNote = ({note}) => {

    const deleteNote = async (id) => {
        if(window.confirm("Do you want delete this note?")) {
            await deleteNote(id);
            alert("Note dleted successfully!")
        }
    }

    return (
        <div className="card">
            <div className="container">
                <h3><b>{note.title}</b></h3>
                <p>{note.description}</p>
                <button className="btn-update">Update</button>
                <button 
                    className="btn-delete"
                    onClick={event => {
                        event.stopPropagation();
                        deleteNote(note.id)
                    }}
                >Delete</button>
            </div>
        </div>
    );
};

export default CardNote;
