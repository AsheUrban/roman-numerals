import { convert } from '../src/js/convert.js';

describe('convert', () => {

  test('should return false when the input is not a number', () => {
    const number = "string";
    const result = convert(number);
    expect(result).toEqual(false);
  })

  test('should return false when the input is larger than 3999', () => {
    const number = 4000;
    const result = convert(number);
    expect(result).toEqual(false);
  })

  test('should return false when the input is less than 0', () => {
    const number = -1;
    const result = convert(number);
    expect(result).toEqual(false);
  })

  test('should return empty string when the input is equal to 0', () => {
    const number = 0;
    const result = convert(number);
    expect(result).toEqual("");
  })

  test('should return VI when the input is equal to 6', () => {
    const number = 6;
    const result = convert(number);
    expect(result).toEqual("VI");
  })

  test('should return IX when the input is equal to 9', () => {
    const number = 9;
    const result = convert(number);
    expect(result).toEqual("IX");
  })

  test('should return III when the input is equal to 3', () => {
    const number = 3;
    const result = convert(number);
    expect(result).toEqual("III");
  })

  test('should return XXIV when the input is equal to 24', () => {
    const number = 24;
    const result = convert(number);
    expect(result).toEqual("XXIV");
  })

  test('should return XL when the input is equal to 40', () => {
    const number = 40;
    const result = convert(number);
    expect(result).toEqual("XL");
  })

  test('should return L when the input is equal to 50', () => {
    const number = 50;
    const result = convert(number);
    expect(result).toEqual("L");
  })

  test('should return XC when the input is equal to 90', () => {
    const number = 90;
    const result = convert(number);
    expect(result).toEqual("XC");
  })

  test('should return CI when the input is equal to 101', () => {
    const number = 101;
    const result = convert(number);
    expect(result).toEqual("CI");
  })

  test('should return CDXCIX when the input is equal to 499', () => {
    const number = 499;
    const result = convert(number);
    expect(result).toEqual("CDXCIX");
  })

  test('should return D when the input is equal to 500', () => {
    const number = 500;
    const result = convert(number);
    expect(result).toEqual("D");
  })

  test('should return MMMCMXCIX when the input is equal to 3999', () => {
    const number = 3999;
    const result = convert(number);
    expect(result).toEqual("MMMCMXCIX");
  })
  
});