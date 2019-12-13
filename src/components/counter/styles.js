import styled from 'styled-components'

export const Button = styled.button`
    width: 50px;
    height: 50px;
    background: lightblue;
    color: white;
    font-size: 35px;
    border: none;
    border-radius: 15px;
    cursor: pointer;
    :active, :focus, :hover {
        border:none;
        box-shadow: none;
        width: 52px;
        height: 52px;
    } 
`

export const Content = styled.div`
   width: 100vw;
   height: 500px;
   display: flex;
   justify-content: center;
   align-items: center;
`

export const CounterContent = styled.div`
    display: flex;
    width: 300px;
    justify-content: space-between;
    align-items: center;
`