import { describe, expect, it } from 'vitest';
import { calculateSpeed, formatDate, formatTimeInMotion } from '../utils';

describe('calculateSpeed', () => {
  it('calculates speed correctly', () => {
    expect(calculateSpeed(10000, 3600)).toBeCloseTo(10.0); // 10km/h
    expect(calculateSpeed(5000, 1800)).toBeCloseTo(10.0); // 10km/h
    expect(calculateSpeed(0, 3600)).toBe(0);
  });

  it('throws an error if time is zero or negative', () => {
    expect(() => calculateSpeed(1000, 0)).toThrow(
      'Time must be greater than zero.'
    );
    expect(() => calculateSpeed(1000, -1)).toThrow(
      'Time must be greater than zero.'
    );
  });
});

describe('formatTimeInMotion', () => {
  it('formats time correctly', () => {
    expect(formatTimeInMotion(3661)).toBe('1h:1m');
    expect(formatTimeInMotion(7200)).toBe('2h:0m');
    expect(formatTimeInMotion(59)).toBe('0h:0m');
  });

  it('handles edge cases', () => {
    expect(formatTimeInMotion(0)).toBe('0h:0m');
  });
});

describe('formatDate', () => {
  it('formats date strings correctly', () => {
    expect(formatDate('2025-03-17')).toBe('March 17, 2025');
    expect(formatDate('2023-01-01')).toBe('January 1, 2023');
  });

  it('formats Date objects correctly', () => {
    const date = new Date('2025-03-17T12:00:00Z');
    expect(formatDate(date)).toBe('March 17, 2025');
  });
});
