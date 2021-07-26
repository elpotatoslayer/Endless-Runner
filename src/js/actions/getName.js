const findInputValue = () => document.querySelector('input').value;

const getName = () => {
  if (findInputValue() === '') { return 'unknown'; }
  return findInputValue();
};

export default getName;