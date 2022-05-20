import React from "react";

const Card = ({name, email, id}) => {
    // const {name, email, id} = props;
    return (
        <div className="bg-light-green tc dib shadow-5 grow pa3 ma3 br3">
            <img src={`https://robohash.org/${id}`} alt="abhay" />
            <div>
                <h1>{name}</h1>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;