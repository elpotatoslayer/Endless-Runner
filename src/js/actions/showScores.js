import sortScores from './sortScores';
import getScores from './getScores';

const showScores = () => getScores()
  .then((data) => {
    const sorted = sortScores(data.result);
    const top10 = sorted.slice(0, 10);
    return top10;
  });

export default showScores;