const phoneParser = (phone: string) => {
  if (phone.length < 7) {
    return '';
  }

  return `(+${phone.slice(0, 3)})-${phone.slice(3, 6)}-${phone.slice(6, 10)}`;
};

export default phoneParser;
