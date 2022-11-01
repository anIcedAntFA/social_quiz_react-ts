import { AppBar, Button, Container, Stack, Toolbar, Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

import { PATH_PAGE } from 'src/routes/path';
import { LoggedInUserActions } from '../logged-in-user-actions';
import { UserActions } from '../user-actions';
import { NAV_LINKS } from './header-config';

export default function Header() {
  const { pathname } = useLocation();

  return (
    <AppBar position="static" color="transparent">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href={PATH_PAGE.root}
            color="primary"
            sx={{
              display: { xs: 'none', md: 'flex' },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: '.3rem',
              textDecoration: 'none',
            }}
          >
            K-QUIZ
          </Typography>

          <Stack
            direction="row"
            spacing={2}
            sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
          >
            {NAV_LINKS.map((page, index) => {
              const isActive =
                page.path === PATH_PAGE.root
                  ? page.path === pathname
                  : `/${page.path}` === pathname;
              return (
                <Button
                  key={index}
                  component={Link}
                  to={page.path as string}
                  startIcon={page.icon}
                  sx={isActive ? { border: '1px solid #2979ff', fontWeight: 'bold' } : {}}
                >
                  {page.title}
                </Button>
              );
            })}
          </Stack>

          {true ? <LoggedInUserActions /> : <UserActions />}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
