export const convert = (number) => {
  if(isNaN(number) || number > 3999 || number < 0) {
    return false;
  }
  if(number === 0) return "";
  if(number >= 1000) return "M" + convert(number - 1000);
  if(number >= 900) return "CM" + convert(number - 900);
  if(number >= 500) return "D" + convert(number - 500);
  if(number >= 400) return "CD" + convert(number - 400);
  if(number >= 100) return "C" + convert(number - 100);
  if(number >= 90) return "XC" + convert(number - 90);
  if(number >= 50) return "L" + convert(number - 50);
  if(number >= 40) return "XL" + convert(number - 40);
  if(number >= 10) return "X" + convert(number - 10);
  if(number >= 9) return "IX" + convert(number - 9);
  if(number >= 5) return "V" + convert(number - 5);
  if(number >= 4) return "IV" + convert(number - 4);
  if(number >= 1) return "I" + convert(number - 1);
}