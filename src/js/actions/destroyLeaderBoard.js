// export default function fn() {
//   const h1 = document.querySelector('h2');
//   const table = document.querySelector('table');
//   h1.remove();
//   table.remove();
// }

const destroyLeaderBoard = () => {
  const h1 = document.querySelector('h2');
  const table = document.querySelector('table');
  h1.remove();
  table.remove();
};

export default destroyLeaderBoard;