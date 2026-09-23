#!/usr/bin/node

exports.nbOccurences = function (list, searchElement) {
  let occurrences = 0;

  for (const element of list) {
    if (element === searchElement) {
      occurrences += 1;
    }
  }

  return occurrences;
};
