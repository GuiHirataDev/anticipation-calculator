import styled from "styled-components";

export const MainHome = styled.main`
    display: flex;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
    gap: 100px;

    .textArea h2 {
        font-size: 35px;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 700;
        color: var(--color-primary);

        width: 300px;
    }

    .textArea p {
        margin: 15px 0px 35px 0px;;
        font-size: 18px;
        font-weight: 500;
    }

    .textArea a {
        text-decoration: none;
        background-color: var(--color-primary);
        color: var(--color-white);
        
        font-weight: 600;
        padding: 15px 100px;
        margin-top: 20px;
        border-radius: 10px;
    }

    .imageArea img {
        width: 600px;
        height: 500px;
    }
`