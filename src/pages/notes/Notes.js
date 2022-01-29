import React from 'react';
import IndexNotes from '../../components/notes/Index';

const Notes = ({ params }) => {
    const { id } = params;
    return <IndexNotes id={id}/>;
};

export default Notes;
