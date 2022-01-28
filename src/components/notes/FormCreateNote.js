import React, { useState } from "react";
import { useLocation } from "wouter";
import { addNote } from '../../api/api';

const initialValues = {
  title: "",
  description: ""
}

const error = "This field is required";

const FormCreateNote = () => {
  const [notes, setNotes] = useState(initialValues);
  const [location, setLocation] = useLocation();

  const handleChange = event => {
    const { name, value } = event.target;
    setNotes({...notes, [name]: value});
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    await addNote(notes);

    if(window.confirm('Note added succefully!')) {
      setNotes(initialValues);
      setLocation("/notes");
    }

  }

  return (
    <div className="form">
      <h1 className="title-form">Create a note</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          name="title"
          placeholder="Title" 
          onChange={handleChange}
        />
        <textarea 
          cols="25" 
          rows="5" 
          name="description"
          onChange={handleChange}
        ></textarea>
        <button className="btn-form">Save</button>
      </form>
    </div>
  );
};

export default FormCreateNote;
