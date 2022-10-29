import { createBrowserRouter } from 'react-router-dom';

import Layout from 'src/layouts';
import AboutPage from 'src/pages/about';
import { Dashboard } from 'src/pages/admin';
import { LoginPage, RegisterPage } from 'src/pages/auth';
import ContactPage from 'src/pages/contact';
import ErrorPage from 'src/pages/error';
import FeedbackPage from 'src/pages/feedback';
import HomePage from 'src/pages/home';
import RankingPage from 'src/pages/ranking';
import SettingsPage from 'src/pages/settings';
import { ProfilePage } from 'src/pages/user';
import { PATH_ADMIN, PATH_AUTH, PATH_PAGE, PATH_USER } from './path';

const router = createBrowserRouter([
  {
    element: <Layout variants="auth" />,
    children: [
      {
        path: PATH_AUTH.register,
        element: <RegisterPage />,
      },
      {
        path: PATH_AUTH.login,
        element: <LoginPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
  {
    path: PATH_PAGE.root,
    element: <Layout />,
    children: [
      { element: <HomePage />, index: true },
      { path: PATH_PAGE.settings, element: <SettingsPage /> },
      { path: PATH_PAGE.ranking, element: <RankingPage /> },
      { path: PATH_PAGE.about, element: <AboutPage /> },
      { path: PATH_PAGE.contact, element: <ContactPage /> },
      { path: PATH_PAGE.feedback, element: <FeedbackPage /> },
    ],
    errorElement: <ErrorPage />,
  },
  {
    element: <Layout />,
    children: [
      {
        path: PATH_USER.profile,
        element: <ProfilePage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
  {
    element: <Layout variants="admin" />,
    children: [
      {
        path: PATH_ADMIN.dashboard,
        element: <Dashboard />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default router;
