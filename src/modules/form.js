const destroyTitle = () => {
  const h1 = document.querySelector('h1');
  const div = document.querySelector('div');
  const para = document.querySelector('p');
  h1.remove();
  div.remove();
  para.remove();
}

const createForm = () => {
  const body = document.querySelector('body');

  const div = document.createElement('div');
  div.classList.add('nameForm');
  body.appendChild(div);

  const label = document.createElement('label');
  label.classList.add('nameForm__label');
  label.textContent = 'Enter your name here';
  div.appendChild(label);

  const input = document.createElement('input');
  input.setAttribute('id', 'name');
  input.setAttribute('type', 'text');
  input.classList.add('nameForm__input');
  input.setAttribute('autofocus', true);
  div.appendChild(input);
}

const destroyForm = () => {
  const form = document.querySelector('.nameForm');
  form.remove();
}

const getName = () => {
  const findInputValue = () => document.querySelector('input').value;

  if (findInputValue() === '') { return 'unknown'; }
  return findInputValue();
}

const createTitle = () => {
  const body = document.querySelector('body');

  const div = document.createElement('div');
  div.classList.add('titleDiv');
  body.appendChild(div);

  const title = document.createElement('h1');
  title.classList.add('titleDiv__title');
  title.textContent = 'Box runner';
  div.appendChild(title);

  const para = document.createElement('p');
  para.classList.add('titleDiv__para');
  para.textContent = `Press -SPACE- or the mouse's LEFT KEY to jump.
  Press again while in the air to double jump.
  Avoid being pushed by the errors.`;
  div.appendChild(para);
}

export {createForm, destroyForm, destroyTitle, getName, createTitle};