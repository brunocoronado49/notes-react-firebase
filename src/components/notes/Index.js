import React, { useState, useEffect } from 'react';
import CardNote from './CardNote';
import Loading from '../loading/Loading';
import { getNotes } from '../../api/api';
import { motion } from 'framer-motion';
import { variants } from '../../sources/Variants';

const Index = () => {
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(false);

    const getAllNotes = async () => {
        const snapshot = await getNotes();
        const docs = [];
        snapshot.forEach((doc) => {
            docs.push({...doc.data(), id: doc.id});
        });

        setNotes(docs);
        setLoading(false);
    }

    useEffect(() => {
        setLoading(true);
        getAllNotes();
    }, [])

    return (
        <div className="content">
            <h1 className="title-form">Notes</h1>
            {
                loading ? <Loading/> :
                notes.length == 0 ? 
                <motion.h2 
                    className="loading"
                    variants={variants}
                    initial="hidden"
                    animate="show"
                >
                    No notes
                </motion.h2> :
                notes.map(note => (
                    <motion.div
                        variants={variants}
                        initial="hidden"
                        animate="show"
                        key={note.id}
                    >
                        <CardNote note={note} />
                    </motion.div>
                ))
            }
        </div>
    );
};

export default Index;
