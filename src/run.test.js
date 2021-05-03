import { run } from './run';

test('Should return 0 if string is empty', () => {
  const result = run('');
  expect(result).toEqual(0);
});

test("Should return 1 when string is '1'", () => {
  const result = run('1');
  expect(result).toEqual(1);
});


test("Should return 3 when imput is '1,2", () =>{
  const result = run('1,2');
  expect(result).toEqual(3);
});

test("Should return 4 when imput is '1,2,1", () =>{
  const result = run('1,2,1');
  expect(result).toEqual(4);
});