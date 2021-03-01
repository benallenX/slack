import React from 'react'
import styled from 'styled-components'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


const Header = () => {
    return (
        <Container>
            <Main>
                <AccessTimeIcon />
                <SearchContainer>
                    <Search>
                        <input type='text' placeholder='Search...' />
                    </Search>
                </SearchContainer>
                <HelpOutlineIcon />
            </Main>
                <UserContainer>
                    <Name>
                        Ben Allen
                    </Name>
                    <UserImage>
                        <AccountCircleIcon />
                    </UserImage>
                </UserContainer>
        </Container>
    )
}

export default Header


const Container = styled.div `  
    background-color:#350d36;
    color:white;
    display: flex;
    align-items:center;
    justify-content:center;
    position:relative;
    z-index:10px;
`

const Main = styled.div `  
    display:flex;
    margin-right: 16px;
    margin-left: 16px;
`

const SearchContainer = styled.div ` 
min-width:500px;
margin-right:16px;
margin-left:16px;
`

const Search = styled.div `   
width:100%;
box-shadow: inset 0 0 0 1px rgb(104, 74,104);
border-radius: 6px;
display:flex;
align-items: center;

input {
    background-color:transparent;
    border:none;
    padding-left: 8px;
    padding-right: 8px;
    color:white;
    padding-top:4px;
    padding-bottom:4px;
}

input:focus{
    outline:none;
}
`

const UserContainer = styled.div `  
display: flex;
align-items:center;
padding-right:16px;
position:absolute;
right:0;


`

const Name = styled.div `   
padding-right:16px;

`

const UserImage = styled(AccountCircleIcon) `   
&&{
    height:40px;
    width:40px;
    color:red;
}


&:hover {
    color:black;
}

`