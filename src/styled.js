import styled from "styled-components";

export const FormsStyle = styled.form `
    font-family: 'Arial', sans-serif;
    width: 40%;
    border-radius: 10px;
    margin: auto;

    fieldset {
        background-color: #f5c905;
        border-radius: 10px;
        text-align: center;
    }

    legend {
        text-align: center;
    }

    label {
        width: 30%;
        margin: 10px auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    input {
        border-radius: 10px;
        border: 1px solid;
        padding: 10px;
        outline-color: #050152;
    }

    .divButton {
        margin-top: 20px;
        display: flex;
        justify-content: space-evenly;
    }

    button {
        font-size: 20px;
        padding: 10px;
        background-color: #04AA6D;
        border: none;
        border-radius: 10px;
    }

    button:hover {
        cursor: pointer;
        background-color: #4CAF50;
    }
`

export const DivFichas = styled.div `
    font-family: Arial, Helvetica, sans-serif;
    margin: 30px auto;
    width: 60%;
    border-radius: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

    h1 {
        text-align: center;
    }

    .fichaCliente, .fichaAnimal {
        padding: 10px;
        text-align: center;
        width: 30%;
        margin: 20px;
        border-radius: 10px;
    }

    .fichaCliente {
        background-color: #f5c905;
        border: #050152 2px solid;
    }

    .fichaAnimal {
        color: #f5c905;
        background-color: #050152;
        border: #f5c905 2px solid;
    }
`