export const ROUTES = {
  HOME: '/',
  SERVICES: '/services',
  ABOUT_US: '/about-us',
  LOGIN: '/login',
  REGISTER: '/register',
  SEARCH_CATEGORY: '/search/:category',
};

export const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^#])[A-Za-z\d@$!%*?&^#]{8,}$/;
