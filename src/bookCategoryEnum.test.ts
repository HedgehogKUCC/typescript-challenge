import { describe, it, expect } from 'vitest';
import { getBookCategory, BookCategory } from './bookCategoryEnum';

describe('書籍類別分類', () => {
  it('應根據輸入的書籍類別返回對應的描述', () => {
    expect(getBookCategory(BookCategory.Novel)).toBe('Book category: Novel');
  });

  it('應根據輸入的書籍類別返回對應的描述', () => {
    expect(getBookCategory(BookCategory.Science)).toBe('Book category: Science');
  });

  it('應根據輸入的書籍類別返回對應的描述', () => {
    expect(getBookCategory(BookCategory.Education)).toBe('Book category: Education');
  });
});

describe('不是書籍類別分類', () => {
  // it('應返回錯誤訊息', () => {
  //   try {
  //     // @ts-expect-error
  //     getBookCategory(123);
  //     throw new Error("Should not reach here");
  //   } catch(error) {
  //     expect((error as Error).message).toBe('Invalid category');
  //   }
  // });

  it('應返回錯誤訊息', () => {
    // @ts-expect-error
    expect(() => getBookCategory(123)).toThrowError('Invalid category');
  });
});