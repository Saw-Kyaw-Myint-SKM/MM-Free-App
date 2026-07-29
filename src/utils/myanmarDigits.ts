export function toMyanmarDigits(n: number): string {
  return n.toString().replace(/\d/g, (d) => String.fromCharCode(0x1040 + parseInt(d, 10)));
}
