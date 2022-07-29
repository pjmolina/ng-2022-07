import { CurrencyPipe } from './currency.pipe';

/*** Requisitos
 *
 * 1230.459 EUR  ---->   1.230,46 €
 * 1230.459 USD  ---->   $ 1,230.46
 * 1230.459 YEN  ---->   1230.459 YEN
 * -----
 *    0     EUR  ---->       0,00 €
 *   null   EUR  ---->       -    €
 *  undefined   EUR  ---->       -    €
 *  123     undefined  --->  123,00 EUR
 *  -34 USD          --> $ - 34,00
 */

describe('CurrencyPipe', () => {
  it('create an instance', () => {
    const sut = new CurrencyPipe();
    expect(sut).toBeTruthy();
  });
  describe('Test de EUR', () => {
    it('should return "1.230,46 €" for input 1230.459 EUR', () => {
      const sut = new CurrencyPipe();
      expect(sut.transform(1230.459, 'EUR')).toBe('1.230,46 €');
    });
    it('should return "- €" for input null EUR', () => {
      const sut = new CurrencyPipe();
      expect(sut.transform(null, 'EUR')).toBe('- €');
    });
    it('should return "0,00 €" for input 0 EUR', () => {
      const sut = new CurrencyPipe();
      expect(sut.transform(0, 'EUR')).toBe('0,00 €');
    });
  });
  describe('Test de USD', () => {
    it('should return "$ 1,230.46" for input 1230.459 USD', () => {
      const sut = new CurrencyPipe();
      expect(sut.transform(1230.459, 'USD')).toBe('$ 1,230.46');
    });
    xit('should put a space between minus sign and number', () => {
      const sut = new CurrencyPipe();
      expect(sut.transform(-1230.459, 'USD')).toBe('$- 1,230.46');
    });
    it('should return "$ -" when passing null data', () => {
      const sut = new CurrencyPipe();
      expect(sut.transform(null, 'USD')).toBe('$ -');
    });
  });

  it('should return "1230.459 YEN" for input 1230.459 and currency is unknown', () => {
    // AAA

    // Arrange
    const sut = new CurrencyPipe();

    // Act
    const res = sut.transform(1230.459, 'YEN');

    // Assert
    expect(res).toBe('1230.459 YEN');
  });
});
