import React, { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { motion } from 'framer-motion';
import { variants } from '../../sources/Variants';
import { getNote, updateNote } from '../../api/api';

const initialValues = {
  name: '',
  description: ''
}

const FormUpdateNote = ({ id }) => {
  const [notes, setNotes] = useState(initialValues);
  const [location, setLocation] = useLocation();

  const handleChange = event => {
    const { name, value } = event.target;
    setNotes({...notes, [name]: value});
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if(id) {
      await updateNote(id, notes);
      if(window.confirm('Note update successfully!')) {
        setNotes(initialValues);
        setLocation("/notes");
      }
    }
  }

  const getNoteById = async (idNote) => {
    try {
      const doc = await getNote(idNote);
      setNotes({...doc.data()});
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    console.log(id);
    if(id) {
      getNoteById(id);
    }
  }, []);

  return (
    <div className="form">
      <h1 className="title-form">Update note</h1>
      <motion.form
        onSubmit={handleSubmit}
        variants={variants}
        initial="hidden"
        animate="show"
      >
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={notes.title}
        />
        <textarea
          cols="25"
          rows="5"
          name="description"
          onChange={handleChange}
          value={notes.description}
        ></textarea>
        <button className="btn-form">Update</button>
      </motion.form>
    </div>
  );
};

export default FormUpdateNote;
