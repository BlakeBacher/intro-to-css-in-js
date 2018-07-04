import styled from 'styled-components'

export const main = 'red'
export const secondary = 'blue'
export const white = '#fff'
export const boxShadow = 'box-shadow:0 2px 4px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)'
export const textShadow = 'text-shadow: 0 2px 2px white'

export const PrimaryButton = styled.button`
color:${main}
width:120px;
height:45px;
outline:none;
background:none;
border:solid 4px;
border-color: ${white};
border-radius: 5px;
transition: .3s;
font-weight: 400;
font-size: 18px

&:hover{
    color:white;
    border-color:${main};
    background: #5e5e5ead;
    font-size: 24px;

}
`

