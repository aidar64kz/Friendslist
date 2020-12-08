import React from 'react';

const Card = ({ name, email, id }) => {

    return (
        <div className='tc bg-washed-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='friend' src={`https://robohash.org/${id}?set=set5`}/>
        <div>
        <h2>{name}</h2>
        <p>{email}</p>
        </div>
        </div>
    );
}



export default Card;