import React, { useState, useEffect } from 'react';
import CardNote from './CardNote';
import { getNotes } from '../../api/api';

const Index = () => {
    const [notes, setNotes] = useState([]);

    const getAllNotes = async () => {
        const snapshot = await getNotes();
        const docs = [];
        snapshot.forEach((doc) => {
            docs.push({...doc.data(), id: doc.id});
        });

        setNotes(docs);
    }

    useEffect(() => {
        getAllNotes();
    }, [])

    return (
        <div className="content">
            <h1 className="title-form">Notes</h1>
            {
                notes.map(note => (
                    <CardNote
                        key={note.id} 
                        note={note}
                    />
                ))
            }
        </div>
    );
};

export default Index;
