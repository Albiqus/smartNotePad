import styled from 'styled-components'

export const Form = styled.form`
    display: flex;
    flex-wrap: wrap;

`

export const Input = styled.input`
    height: 27px;
    width: 210px;
    font-size: 20px;
    padding-left: 10px;
    background-color: ${props => props.theme.primaryColor}
    box-sizing: border-box;
    border: none;
    outline: none;
    &::placeholder{
    color: rgb(180, 180, 180);
}
`