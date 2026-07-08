import { it, expect, describe, } from 'vitest';
import formatMoney from './money';

describe('formatMoney', () => {
  it('formats 1999 cents as $19.99', () => {
    expect(formatMoney(1999)).toBe('$19.99');
  });

  it('format 0', ()=>{
    expect(formatMoney(0)).toBe('$0.00');
  });

  it('format negative', ()=>{
    expect(formatMoney(-999)).toBe('-$9.99');
  });
});