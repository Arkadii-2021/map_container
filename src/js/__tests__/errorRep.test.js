import ErrorRepository from '../errorRep';

const listErrors = new ErrorRepository();

test('add character in Team', () => {
  expect(listErrors.translate(522)).toEqual('Connection Timed Out');
});

test('add character in Team', () => {
  expect(listErrors.translate(201)).toEqual('Unknown error');
});
