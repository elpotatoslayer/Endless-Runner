// export default function fn() {
//   const form = document.querySelector('.nameForm');
//   form.remove();
// }

const destroyForm = () => {
  const form = document.querySelector('.nameForm');
  form.remove();
};

export default destroyForm;