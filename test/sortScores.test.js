// eslint-disable-next-line import/no-unresolved
import { expect, it } from '@jest/globals';
import sortScores from '../src/js/actions/sortScores';

const dataExample = [
  {
    user: 'Ralph',
    score: 10,
  },
  {
    user: 'Max',
    score: 60,
  },
];

it('sorts the array by alphabetical order if the scores are equal', () => {
  const sorted = sortScores(dataExample);
  expect(sorted[0].user).toEqual('Max');
});

it('test for unsorted array', () => {
  const sorted = sortScores(dataExample);
  expect(sorted[0].user).not.toEqual('Ralph');
});

const sameScore = [
  {
    user: 'Max',
    score: 60,
  },
  {
    user: 'Ralph',
    score: 60,
  },
];

it('sorts the array by alphabetical order if the scores are equal', () => {
  const sorted = sortScores(sameScore);
  expect(sorted[0].user).toEqual('Max');
});

it('check if the array has been sorted', () => {
  const sorted = sortScores(sameScore);
  expect(sorted[0].user).not.toEqual('Ralph');
});
