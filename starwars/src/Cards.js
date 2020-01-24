import React from 'react';
import styled from 'styled-components';

const CharCard = props => {

    const Container = styled.div`
        width: 90%;
        margin: 0 auto;
    `;

    const StyledList = styled.li`
        list-style-type: none;
        padding: 1%;
        margin: 10px auto;
        background: lightgray;
        border: 1px solid grey;
        width: 75%;
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
                    <StyledList key={props.names}><strong>Name: </strong>{e.name}
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