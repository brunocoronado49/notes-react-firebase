import React from 'react';

const CardNote = ({title, description}) => {
    return (
        <div className="card">
            <div className="container">
                <h3><b>{title}</b></h3>
                <p>{description}</p>
                <button className="btn-update">Update</button>
                <button className="btn-delete">Delete</button>
            </div>
        </div>
    );
};

export default CardNote;
