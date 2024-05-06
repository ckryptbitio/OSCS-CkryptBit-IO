const diacriticsData = {
  '\u24B6': 'A',
  '\uFF21': 'A',
  // ... rest of the diacritics data ...
  '\u2019': '\'',
};

export default diacriticsData;


import extend from 'lodash/extend';
import diacriticsData from './diacritics';

interface Diacritics {
  [key: string]: string;
}

const diacritics: Diacritics = {};

extend(diacritics, diacriticsData);

export default diacritics;
