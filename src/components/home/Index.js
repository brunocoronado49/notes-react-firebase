import React from 'react';
import '../styles/styles.css';
import LogoHome from './LogoHome';

const Index = () => {
    return (
        <div className="content">
            <div className="row">
                <div className="column">
                    <h1 className="title">Home</h1>
                    <p className="info">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus inventore error maiores ea illum nisi aliquid quam culpa. Officia delectus magni cum saepe, consectetur iure exercitationem mollitia pariatur maiores odit voluptatibus quo modi voluptas dolorum, deleniti recusandae sed reprehenderit labore fugit error ratione. Earum totam velit a culpa minus molestiae.</p>
                </div>
                <div className="column logo">
                    <LogoHome/>
                </div>
            </div>
        </div>
    );
};

export default Index;
