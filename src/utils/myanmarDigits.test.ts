import { toMyanmarDigits } from './myanmarDigits';

describe('toMyanmarDigits', () => {
  it('converts Latin digits to Myanmar numerals', () => {
    expect(toMyanmarDigits(2026)).toBe('၂၀၂၆');
    expect(toMyanmarDigits(0)).toBe('၀');
    expect(toMyanmarDigits(1234567890)).toBe('၁၂၃၄၅၆၇၈၉၀');
  });

  it('produces the current year in Myanmar numerals', () => {
    const year = new Date().getFullYear();
    expect(toMyanmarDigits(year)).toMatch(/^[၀-၉]+$/);
  });
});
