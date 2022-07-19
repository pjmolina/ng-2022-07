import { PersonSearchPipe } from './person-search.pipe';

describe('PersonSearchPipe', () => {
  it('create an instance', () => {
    const pipe = new PersonSearchPipe();
    expect(pipe).toBeTruthy();
  });
});
