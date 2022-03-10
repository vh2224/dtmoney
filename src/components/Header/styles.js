import styled from 'styled-components';

export const Component = styled.header`

    background: var(--blue);

`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1120px;
    margin: 0 auto;
    padding:3rem 1rem 10rem;

    button {
        color: var(--white);
        background: var(--blue-light);
        border: none;
        border-radius: 5px;
        padding: 0.8rem 2rem;

        transition: filter 0.25s;

        &:hover {

            filter: brightness(0.90);

        }
}

`;