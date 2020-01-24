import React from 'react';
import styled from 'styled-components';

const CharCard = props => {

    const Container = styled.div`
        width: 90%;
        margin: 0 auto;
    `;

    const StyledList = styled.li`
        list-style-type: none;
        padding: 5% 2%;
        margin: 10px auto;
        background-image: url('https://images.unsplash.com/photo-1520034475321-cbe63696469a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80');
        border: 1px solid grey;
        background-position: center;
        background-repeat: no-repeat;
        background-size: auto;
        color: white;
        border-radius: 7px;
        transition: 1.1s ease-in-out;
        width: 65%;

        &:hover {
            background-image: url('https://media.giphy.com/media/JNy7DzgqUnh9p93aru/giphy.gif');
            background-size: cover;
        }
    `;

    const CardHolder = styled.div`
        width: 50%;
    `;

    const Listed = styled.ul`
        margin: 0;
        padding: 0;
        width: 100%;
        display:flex;
        flex-direction: row;
        justify-content: space-evenly;
        flex-wrap: wrap;
    `;

    return (
        <Container>
            <Listed>
            {props.names.map(e => {
                return (
                    <CardHolder>
                    <StyledList key={props.names}><h2><strong>{e.name}</strong></h2>
                    <br/>
                    <br/>
                    <strong>Born: </strong> {e.birth_year}
                    <br/>
                    <br/>
                    <strong>Numbers of films: {e.films.length}</strong>
                    </StyledList>
                    </CardHolder>
                )
            })}
            </Listed>
        </Container>
    )
}

export default CharCard;