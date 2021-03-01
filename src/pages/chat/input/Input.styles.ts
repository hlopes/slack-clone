import styled from '@emotion/styled';

export const Container = styled.div`
    border-radius: 2rem;

    > form {
        position: relative;
        display: flex;
        justify-content: center;

        > input {
            position: fixed;
            bottom: 3rem;
            width: 60%;
            padding: 2rem;
            border: 0.1rem solid gray;
            border-radius: 0.3rem;
            outline: none;
        }

        > button {
            display: none;
        }
    }
`;
