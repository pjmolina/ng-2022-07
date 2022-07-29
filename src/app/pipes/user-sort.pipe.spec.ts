import { UserData } from '../user/userdata';
import { UserSortPipe } from './user-sort.pipe';

describe('UserSortPipe', () => {
  it('create an instance', () => {
    const pipe = new UserSortPipe();
    expect(pipe).toBeTruthy();
  });
  it('should return [] when passing null', () => {
    const pipe = new UserSortPipe();
    expect(pipe.transform(null)).toEqual([]);
  });
  it('should return [] with an empty array', () => {
    const pipe = new UserSortPipe();
    expect(pipe.transform([])).toEqual([]);
  });
  it('should sort the names', () => {
    const z: UserData = {
      name: 'Zacarias',
      surname: 'Garcia',
    };
    const a: UserData = {
      name: 'Alicia',
      surname: 'Perez',
    };

    const pipe = new UserSortPipe();
    expect(pipe.transform([z, a])).toEqual([a, z]);
  });
  it('should sort the names using surname when name match', () => {
    const z1: UserData = {
      name: 'Zacarias',
      surname: 'Garcia',
    };
    const z2: UserData = {
      name: 'Zacarias',
      surname: 'Guzman',
    };
    const a1: UserData = {
      name: 'Alicia',
      surname: 'Perez',
    };
    const a2: UserData = {
      name: 'Alicia',
      surname: 'Lopez',
    };

    const pipe = new UserSortPipe();
    expect(pipe.transform([z1, z2, a1, a2])).toEqual([a2, a1, z1, z2]);
  });
});
