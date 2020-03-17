import { minimist } from '../src';
import cases from 'jest-in-case';

cases(
  'minmist mod',
  options => {
    expect(minimist(options)).toMatchSnapshot();
  },
  [
    ['cmd', '--dude', '1', '--bool', '-b', '-a'],
    ['cmd', 'another', '--dude', '1', '--bool', '-b', '-a'],
    ['cmd', 'one', 'more', '--dude', '1', '--bool', '-b', '-a']
  ]
);
