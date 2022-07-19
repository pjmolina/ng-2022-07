import { Pipe, PipeTransform } from '@angular/core';

/** TDD: Test Driven Development  / Unit Test
 * 1. requistos
 * 2. test
 * 3. implento el codigo
 * 4. paro
 */

/*** Requisitos
 *
 * 1230.459 EUR  ---->   1.230,46 €
 * 1230.459 USD  ---->   $ 1,230.46
 * 1230.459 YEN  ---->   1230.459 YEN
 *
 */

@Pipe({
  name: 'currency',
})
export class CurrencyPipe implements PipeTransform {
  transform(
    value: number | undefined | null,
    currency: string = 'EUR'
  ): string {
    if (value === null || value === undefined) {
      switch (currency) {
        case 'EUR':
          return '- €';
        case 'USD':
          return '$ -';
        default:
          return `- ${currency}`;
      }
    }

    switch (currency) {
      case 'EUR':
        const v = addThousandPoint(value?.toFixed(2).replace('.', ','), '.');
        return `${v} €`;
      case 'USD':
        const v2 = addThousandPoint(value?.toFixed(2), ',');
        return `\$ ${v2}`;
      default:
        return `${value} ${currency}`;
    }
  }
}

function addThousandPoint(v: string, sepM: string): string {
  // x1.000.123,   7-1 = 6
  const sepD = sepM === '.' ? ',' : '.';
  const parts = v.split(sepD);
  const entera = parts[0];
  const decimal = parts.length > 1 ? parts[1] : '';

  let res = '';
  for (let i = 0; i < entera.length; i++) {
    const index = entera.length - i;
    if (index % 3 === 0) {
      res += sepM + entera[i];
    } else {
      res += entera[i];
    }
  }
  return decimal === '' ? res : res + sepD + decimal;
}
