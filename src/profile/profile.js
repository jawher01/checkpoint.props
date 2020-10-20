import React from 'react'

function Profile(props) {
    return (
        <div className="cardProfile">
            <h2>FullName:{props.name}</h2>
            <h2>Bio:{props.bio}</h2>
            <h2>Profession:{props.profession}</h2>
            {props.children}
            <button onClick={()=>props.alertMyInput(props.name)}>
            my name
            </button>
        </div>
    
    );
    
}
export default Profile