import React from 'react';

const FormUpdateNote = () => {
    return (
        <div className="form">
            <h1 className="title-form">Update a note</h1>
            <form action="">
                <input type="text" placeholder="Title" />
                <textarea cols="25" rows="5"></textarea>
                <button className="btn-form">Save</button>
            </form>
        </div>
    );
};

export default FormUpdateNote;
