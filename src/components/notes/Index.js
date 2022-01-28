import React from 'react';
import CardNote from './CardNote';

const Index = () => {
    return (
        <div className="content">
            <h1 className="title-form">Notes</h1>
            <CardNote title="Title" description="Description"/>
        </div>
    );
};

export default Index;
