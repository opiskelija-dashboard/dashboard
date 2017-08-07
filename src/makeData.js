import React from "react";
import namor from "namor";

const range = len => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = () => {
  const statusChance = Math.random();
  return {
    id: namor.generate({ words: 1, numbers: 0 }),
    points: Math.floor(Math.random() * 30)
  };
};

export function makeData(len = 50) {
  return range(len).map(d => {
    return Object.assign({}, newPerson(), {
      children: range(10).map(newPerson)
    });
  });
}
