import { StyleSheet } from 'react-native';

const positions = [
  'Top',
  'Left',
  'Right',
  'Bottom',
  'Vertical',
  'Horizontal',
  '', // To handle basic box name
];

const box = [
  'padding',
  'margin',
];

const marginSpaces = [
  0,
  5,
  10,
  15,
  20,
  30,
  40,
  50,
  60,
  80,
];

const rules = box.reduce((boxAcc, boxName) => {
  const newBoxRules = positions.reduce((positionAcc, positionName) => {
    const newPositionRules = marginSpaces.reduce((spacedAcc, space) => ({
      ...spacedAcc,
      [`${boxName}${positionName}${space}`]: {
        [`${boxName}${positionName}`]: space,
      },
    }), {});
    return {
      ...positionAcc,
      ...newPositionRules,
    };
  }, {});
  return {
    ...boxAcc,
    ...newBoxRules,
  };
}, {});


const otherUtils = {
  width100: {
    width: '100%',
  },
  width50: {
    width: '50%',
  },
};

export const utils = StyleSheet.create({
  ...rules,
  ...otherUtils,
});
