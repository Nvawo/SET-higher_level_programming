#!/usr/bin/node

exports.esrever = function (list) {
  const reversedList = [];

  for (let i = list.length - 1; i >= 0; i -= 1) {
    reversedList.push(list[i]);
  }

  return reversedList;
};
