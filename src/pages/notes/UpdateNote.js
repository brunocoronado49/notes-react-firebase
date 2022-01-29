import React from 'react';
import FormUpdateNote from '../../components/notes/FormUpdateNote';

const UpdateNote = ({ params }) => {
  const { id } = params;
  return <FormUpdateNote id={id} />;
};

export default UpdateNote;
