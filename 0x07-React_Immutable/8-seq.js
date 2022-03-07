import { Seq } from 'immutable';

function capitalize(s) {
  return s[0].toUpperCase() + s.slice(1);
}

function bestStudents(grades) {
  return (
    Seq(grades)
      .filter((x) => x.score >= 70)
      .map(
        (x) => ({
          score: x.score,
          firstName: capitalize(x.firstName),
          lastName: capitalize(x.lastName),
        }),
      )
  );
}

export default function printBestStudents(grades) {
  console.log(bestStudents(grades).toObject());
}

/*
const grades = {
  1: {
    score: 99,
    firstName: 'guillaume',
    lastName: 'salva',
  },
};

printBestStudents(grades);
*/
