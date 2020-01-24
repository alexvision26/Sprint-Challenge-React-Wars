import React from 'react';

const CharCard = props => {

    

    return (
        <div>
            <ul>
            {props.names.map(e => {
                return (
                    <div>
                    <li key={props.names}>Name: {e.name}
                    <br/>
                    <br/>
                    <strong>Born: </strong> {e.birth_year}
                    <br/>
                    <br/>
                    <strong>Numbers of films: {e.films.length}</strong>
                    </li>
                    </div>
                )
            })}
            </ul>
        </div>
    )
}

export default CharCard;