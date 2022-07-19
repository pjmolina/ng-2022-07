import { Pipe, PipeTransform } from '@angular/core';
import { UserData } from '../user/userdata';

@Pipe({
  name: 'personSearch',
})
export class PersonSearchPipe implements PipeTransform {
  transform(users: UserData[], searchText: string): UserData[] {
    if (searchText === '') {
      return users;
    }
    return users.filter((u) => {
      const fullName = normalizeString(`${u.name} ${u.surname}`);
      const res = fullName.includes(normalizeString(searchText));
      return res;
    });
  }
}

function normalizeString(valor: string): string {
  return valor
    .toLowerCase()
    .trim()
    .replace('á', 'a')
    .replace('é', 'e')
    .replace('í', 'i')
    .replace('ó', 'o')
    .replace('ú', 'u');
}
