export const isMobileDevice = (navigator: Navigator) => {
  return /Mobile/i.test(navigator.userAgent);
};
