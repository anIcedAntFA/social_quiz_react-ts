import config from 'src/config';
import { generatePaths } from 'src/utilities';

const ROOT_AUTH = config.ROUTES.AUTH;
const ROOT_USER = config.ROUTES.USER;
const ROOT_PAGE = config.ROUTES.HOME;
const ROOT_ADMIN = config.ROUTES.ADMIN;

export const PATH_AUTH = {
  root: ROOT_AUTH,
  register: generatePaths(ROOT_AUTH, config.ROUTES.REGISTER),
  login: generatePaths(ROOT_AUTH, config.ROUTES.LOGIN),
  resetPassword: generatePaths(ROOT_AUTH, config.ROUTES.RESET_PASSWORD),
};

export const PATH_PAGE = {
  root: ROOT_PAGE,
  settings: config.ROUTES.SETTINGS,
  ranking: config.ROUTES.RANKING,
  flashcards: config.ROUTES.FLASHCARDS,
  about: config.ROUTES.ABOUT,
  contact: config.ROUTES.CONTACT,
  feedback: config.ROUTES.FEEDBACK,
};

export const PATH_USER = {
  root: ROOT_USER,
  profile: generatePaths(ROOT_USER, config.ROUTES.PROFILE),
};

export const PATH_ADMIN = {
  root: ROOT_ADMIN,
  dashboard: generatePaths(ROOT_ADMIN, config.ROUTES.DASHBOARD),
};
