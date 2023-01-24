import settingsButtonLight from '../../images/icons/light/settings.png'
import settingsButtonDark from '../../images/icons/dark/settings.png'

import styled  from 'styled-components'

export const Wrapper = styled.div``

export const WrapperButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 10px;
    background-color: ${props => props.theme.primaryColor};
    border: ${props => props.settingsStatus ? 'none' : '2px solid #000'};
    &:hover{
    cursor: pointer;
    }
`

export const SettingsButton = styled.button`
    width: 32px;
    height: 32px;
    background-color: ${props => props.theme.primaryColor};
    background-image: url(${props => props.theme.title === 'light' ? settingsButtonLight : settingsButtonDark});
    border: none;
    &:hover{
    cursor: pointer;
    }
`

export const Label = styled.label`
    color: ${props => props.theme.fontColor};
    width: 115px;
    height: 27px;
    margin-left: 23px;
    margin-top: 20px;
    font-size: 20px;
    box-sizing: border-box;
`

export const Select = styled.select`
    font-size: 17px;
    width: 140px;
    margin-top: 20px;
    height: 25px;
    outline: none;
    color: ${props => props.theme.fontColor};
    background-color: ${props => props.theme.secondaryColor};
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    border: none;
    border-radius: 32px;
    text-align: center;
    padding-right: 12px;
    
    &:hover {
    cursor: pointer;
    outline: 2px solid ${props => props.theme.hoverColor};
    }
`

export const SelectWrapper = styled.div`
position: relative;
&::before {
    content: "";
    position: absolute;
    top: 34px;
    right: 10px;
    transform: translateY(-50%);
    pointer-events: none;
    display: block;
    width: 12px;
    height: 12px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 9px 4px 0 4px;
    border-color:  white transparent transparent transparent;
}
`

export const Option = styled.option``


export const Input = styled.input`
    width: 140px;
    height: 27px;
    margin-top: 23px;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: ${props => props.theme.primaryColor};
    border: none;

    &::-webkit-slider-runnable-track {
        border-radius: 10px;
        height: 10px;
        background-color: ${props => props.theme.secondaryColor};
        &:hover {
        cursor: pointer;
        }
    }
    &::-webkit-slider-thumb {
        background: ${props => props.theme.secondaryColor};
        border-radius: 10px;
        cursor: pointer;
        border: 1px solid ${props => props.theme.additionalColor};
        width: 10px;
        height: 20px;
        -webkit-appearance: none;
        margin-top: -5px;
    }
    &::-moz-range-track {
        border-radius: 10px;
        height: 10px;
        background-color: ${props => props.theme.secondaryColor};
        &:hover {
        cursor: pointer;
        } 
    }
    &::-moz-range-thumb {
    background: ${props => props.theme.secondaryColor};
    border: 1px solid ${props => props.theme.additionalColor};
    border-radius: 10px;
    cursor: pointer;
    width: 10px;
    height: 20px;
    -webkit-appearance: none;
    margin-top: -5px;
    }
`

export const DefaultButton = styled.button`
    position: absolute;
    font-size: 20px;
    width: 150px;
    height: 50px;
    bottom: 40px;
    margin-left: 75px;
    color: ${props => props.theme.fontColor};
    background-color: ${props => props.theme.secondaryColor};
    border: none;
    border-radius: 12px;
    &:hover {
    cursor: pointer;
    outline: 2px solid ${props => props.theme.hoverColor};
    }
`

export const TumblerWrapper = styled.label`
  display: flex;
  margin-left: 90px;
  align-items: end;
  gap: 10px;
  cursor: pointer;
`;

export const Switch = styled.div`
  position: relative;
  width: 40px;
  height: 15px;
  background: #b3b3b3;
  border-radius: 32px;
  padding: 4px;
  transition: 300ms all;
  &:before {
    transition: 300ms all;
    content: "";
    position: absolute;
    width: 15px;
    height: 15px;
    border-radius: 35px;
    top: 50%;
    left: 4px; 
    background: white;
    transform: translate(0, -50%);
  }
`;

export const TumblerInput = styled.input`
  opacity: 0;
  position: absolute;
  display: none;

  &:checked + ${Switch} {
    background: green;
     &:before {
      transform: translate(25px, -50%);
    }
  }
`;