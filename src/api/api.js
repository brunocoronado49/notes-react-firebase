import {
    collection,
    addDoc,
    updateDoc,
    onSnapshot,
    deleteDoc,
    doc,
    getDoc,
    getDocs
} from 'firebase/firestore';
import { db } from './config';

const collectionName = "NotesCrud"

// Add new note
export const addNote = newNote => 
    addDoc(collection(db, collectionName), newNote);

// Get all notes
export const getNotes = () => 
    getDocs(collection(db, collectionName))

// Get note
export const getNote = id => 
    getDoc(doc(db, collectionName, id));

// Update note
export const updateNote = (id, fields) => 
    updateDoc(doc(db, collectionName, id), fields);

// Delete notes
export const deleteNote = (id) => 
    deleteDoc(doc(db, collectionName, id));

// onGetNotes
export const onGetNotes = callback =>
    onSnapshot(collection(db, collectionName), callback);
