import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Navigation, StyledLink } from './Layout.styled';

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
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
