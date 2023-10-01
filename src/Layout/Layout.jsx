import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Navigation, StyledLink, Wrapper } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <header>
        <Navigation>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </Navigation>
      </header>
      <main>
        <Wrapper>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </Wrapper>
      </main>
    </>
  );
};

export default Layout;
