import styled from 'styled-components';


export const CardContent = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1120px;
    margin: -68px auto 0;

`;

export const Card = styled.div`

    height:135px;
    width:352px;
    background: var(--white);
    border-radius: 5px;
    padding: 2rem;


    strong {
        display: block;
        font-size: 36px;
        line-height: 54px;
        font-weight: 500;
    }

    :last-child {

        background: var(--green);

        strong {
            color: var(--white);
        }
        
        &.deposit {
            background: var(--green);
        }

        &.withdraw {
            background: var(--red)
        }
    }

`;

export const CardHeader = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;

    .total {
        color: white;
    }

`;


