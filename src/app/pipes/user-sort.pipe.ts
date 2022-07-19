import { Pipe, PipeTransform } from '@angular/core';
import { UserData } from '../user/userdata';

@Pipe({
  name: 'userSort',
})
export class UserSortPipe implements PipeTransform {
  transform(users: UserData[]): UserData[] {
    return users.sort((a: UserData, b: UserData) => {
      const fa = `${a.name} ${a.surname}`;
      const fb = `${b.name} ${b.surname}`;

      return fa.localeCompare(fb);
    });
  }
}
