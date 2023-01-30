export const currentTime = () => {
  const options = { hour: '2-digit', minute: '2-digit' };
  const today = new Date();
  return today.toLocaleString('ua-UA', options);
};
