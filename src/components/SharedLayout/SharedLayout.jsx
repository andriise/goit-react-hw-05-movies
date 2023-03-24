import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { HeaderList, HeaderItem } from './SharedLayout.styled';

const StyledLink = styled(NavLink)`
  color: #212121;
  &.active {
    color: orangered;
  }
`;

const SharedLayout = () => {
  return (
    <div>
      <HeaderList>
        <ul>
          <HeaderItem>
            <StyledLink to="/">Home</StyledLink>
          </HeaderItem>
          <HeaderItem>
            <StyledLink to="/movies">Movies</StyledLink>
          </HeaderItem>
        </ul>
      </HeaderList>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
