import { Container, styled } from '@mui/material';
import { Outlet } from 'react-router-dom';

import { Footer, Header } from './components';

type Variants = 'admin' | 'auth';

interface ILayoutProps {
  variants?: Variants;
}

export default function Layout({ variants }: ILayoutProps) {
  if (variants === 'auth') {
    return (
      // <RootStyle>
      //   <ContainerStyle maxWidth="md">
      <Outlet />
      //   </ContainerStyle>
      // </RootStyle>
    );
  }

  return (
    // <RootStyle>
    //   <ContainerStyle maxWidth="md">
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
    //   </ContainerStyle>
    // </RootStyle>
  );
}

// const RootStyle = styled(`div`)(({ theme }) => ({
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   width: '100vw',
//   height: '100vh',
// }));

// const ContainerStyle = styled(Container)(({ theme }) => ({
//   display: 'flex',
//   flexDirection: 'column',
//   gap: '24px',
//   padding: '32px 24px',
//   borderRadius: '8px',
//   backgroundColor: theme.palette.background.paper,
//   boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
// })) as typeof Container;
