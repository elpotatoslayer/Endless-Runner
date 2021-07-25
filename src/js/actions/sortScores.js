// export default function fn(data) {
//   const sorted = data.sort((a, b) => {
//     if (a.score < b.score) {
//       return 1;
//     }
//     if (a.score === b.score) {
//       if (a.user > b.user) {
//         return 1;
//       }
//       return -1;
//     }
//     return -1;
//   });
//   return sorted;
// }

const sortScores = (data) => {
  const sorted = data.sort((a, b) => {
    if (a.score < b.score) {
      return 1;
    }
    if (a.score === b.score) {
      if (a.user > b.user) {
        return 1;
      }
      return -1;
    }
    return -1;
  });
  return sorted;
};

export default sortScores;