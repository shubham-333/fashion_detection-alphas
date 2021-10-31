import React from 'react'
import styled from 'styled-components'
import IconButton from '@mui/material/IconButton';
import PinterestIcon from '@mui/icons-material/Pinterest';

function Header() {
    return (
        <Wrapper>
            <LogoWrapper>
                <IconButton>
                    <PinterestIcon />
                </IconButton>
            </LogoWrapper>
            <HomePageButton>
                <a href="/">Homepage</a>
            </HomePageButton>
            <FollowingButton>
                <a href="/">Following</a>
            </FollowingButton>
            {/* <SearchWrapper>
                <SearchBarWrapper>

                </SearchBarWrapper>
            </SearchWrapper> */}

        </Wrapper>
    )
}

export default Header

const Wrapper =styled.div`
    display: flex;
    align-items: center;
    height: 56px;
    padding: 12px 4px 4px 16px;
    backgroung-color: white;
    color: black;
`
const LogoWrapper= styled.div`
    .MuiSvgIcon-root {
        color: #e60023;
        font-size: 32px;
        cursor: pointer;
    }

`
const HomeButtons  = styled.div`
    display: flex;
    height: 48px;
    min-width:123px;
    align-items: center;
    justify-content: center;
    border-radius: 24px;
    cursor: pointer;

`

const HomePageButton = styled(HomeButtons)`
    background-color: rgb(17,17,17);
    a {
        text decoration: none;
        color: white;
        font-weight: 700;
    }
`

const FollowingButton = styled(HomeButtons)`
    background-color: white;
    a {
        text decoration: none;
        color: black;
        font-weight: 700;
    }
    :hover {
        background-color: #e1e1e1;
    }
`