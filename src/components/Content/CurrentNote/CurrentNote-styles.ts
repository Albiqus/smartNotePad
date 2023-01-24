
import styled from 'styled-components'

import favoriteButtonLight from '../../../images/icons/light/favorite-button-empty.png';
import favoriteButtonDark from '../../../images/icons/dark/favorite-button-empty.png';
import unfavoriteButtonLight from '../../../images/icons/light/favorite-button.png';
import unfavoriteButtonDark from '../../../images/icons/dark/favorite-button.png';
import editButtonLight from '../../../images/icons/light/edit-button.png';
import editButtonDark from '../../../images/icons/dark/edit-button.png';
import deleteButtonLight from '../../../images/icons/light/delete-button.png';
import deleteButtonDark from '../../../images/icons/dark/delete-button.png';


export const Main = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: flex-end;
`
export const Header = styled.h1`
    margin: 0;
    width: 366px;
    height: 40px;
    margin-top: 30px;
    margin-left: 50px;
    margin-right: 20px;
    overflow: hidden;
    color: ${props => props.theme.fontColor}
`

export const Button = styled.button`
    width: 60px;
    height: 60px;
    margin: 20px 20px 0px 0px;
    background-color: ${props => props.theme.secondaryColor};
    border: none;
    border-radius: 30px;
    &:hover {
    cursor: pointer;
    outline: 2px solid ${props => props.theme.hoverColor};
  }
`
export const UnfavoriteButton = styled(Button)`
    background-image: url(${props => props.theme.title === 'light' ? unfavoriteButtonLight : unfavoriteButtonDark});
  }
`

export const FavoriteButton = styled(Button)`
    background-image: url(${props => props.theme.title === 'light' ? favoriteButtonLight : favoriteButtonDark});
  }
`

export const EditButton = styled(Button)`
    background-image: url(${props => props.theme.title === 'light' ? editButtonLight : editButtonDark});
  }
`

export const DeleteButton = styled(Button)`
    background-image: url(${props => props.theme.title === 'light' ? deleteButtonLight : deleteButtonDark});
  }
`

export const Paragraph = styled.p`
    word-wrap: break-word;
    white-space: pre-wrap;
    width: 500px;
    height: 460px;
    margin: 0;
    margin-top: 40px;
    margin-right: 46px;
    font-family: "custom";
    font-size: 20px;
    color: ${props => props.theme.fontColor}
`