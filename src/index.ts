const KOREAN_NUMBERS = [
  "",
  "한",
  "두",
  "세",
  "네",
  "다섯",
  "여섯",
  "일곱",
  "여덟",
  "아홉",
  "열",
];

const KOREAN_TENS: { [key: number]: string } = {
  2: "스무",
  3: "서른",
  4: "마흔",
  5: "쉰",
  6: "예순",
  7: "일흔",
  8: "여든",
  9: "아흔",
};

export interface Options {
  /**
   * The postfix to be appended (e.g., '개', '명', etc.)
   */
  postfix: string;
}

/**
 * Converts a number to Korean number words with a required postfix
 * @param num - The number to convert (1-99)
 * @param options - Configuration options with required postfix
 * @returns The Korean number word with postfix
 */
export function toKoreanNumber(num: number, options: Options): string {
  if (!Number.isInteger(num) || num < 1 || num > 99) {
    throw new Error("Number must be an integer between 1 and 99");
  }

  const { postfix } = options;

  if (num <= 10) {
    return `${KOREAN_NUMBERS[num]}${postfix}`;
  }

  const tens = Math.floor(num / 10);
  const ones = num % 10;

  if (tens === 1) {
    return `${ones === 0 ? "열" : `열${KOREAN_NUMBERS[ones]}`}${postfix}`;
  }

  // Special cases for tens (20, 30, 40, etc.)
  if (ones === 0) {
    return `${KOREAN_TENS[tens]}${postfix}`;
  }

  return `${KOREAN_TENS[tens]}${KOREAN_NUMBERS[ones]}${postfix}`;
}
