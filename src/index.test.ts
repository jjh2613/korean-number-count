import { toKoreanNumber } from "./index";

describe("toKoreanNumber", () => {
  it("converts single digit numbers correctly", () => {
    expect(toKoreanNumber(1, { postfix: "개" })).toBe("한개");
    expect(toKoreanNumber(5, { postfix: "개" })).toBe("다섯개");
    expect(toKoreanNumber(9, { postfix: "개" })).toBe("아홉개");
  });

  it("converts numbers 11-19 correctly", () => {
    expect(toKoreanNumber(10, { postfix: "개" })).toBe("열개");
    expect(toKoreanNumber(11, { postfix: "개" })).toBe("열한개");
    expect(toKoreanNumber(15, { postfix: "개" })).toBe("열다섯개");
    expect(toKoreanNumber(19, { postfix: "개" })).toBe("열아홉개");
  });

  it("converts special tens numbers correctly", () => {
    expect(toKoreanNumber(20, { postfix: "개" })).toBe("스무개");
    expect(toKoreanNumber(30, { postfix: "개" })).toBe("서른개");
    expect(toKoreanNumber(40, { postfix: "개" })).toBe("마흔개");
    expect(toKoreanNumber(50, { postfix: "개" })).toBe("쉰개");
    expect(toKoreanNumber(60, { postfix: "개" })).toBe("예순개");
    expect(toKoreanNumber(70, { postfix: "개" })).toBe("일흔개");
    expect(toKoreanNumber(80, { postfix: "개" })).toBe("여든개");
    expect(toKoreanNumber(90, { postfix: "개" })).toBe("아흔개");
  });

  it("converts numbers 20-99 correctly", () => {
    expect(toKoreanNumber(21, { postfix: "개" })).toBe("스무한개");
    expect(toKoreanNumber(32, { postfix: "개" })).toBe("서른두개");
    expect(toKoreanNumber(42, { postfix: "개" })).toBe("마흔두개");
    expect(toKoreanNumber(55, { postfix: "개" })).toBe("쉰다섯개");
    expect(toKoreanNumber(99, { postfix: "개" })).toBe("아흔아홉개");
  });

  it("works with different postfixes", () => {
    expect(toKoreanNumber(1, { postfix: "명" })).toBe("한명");
    expect(toKoreanNumber(2, { postfix: "개월" })).toBe("두개월");
    expect(toKoreanNumber(15, { postfix: "살" })).toBe("열다섯살");
    expect(toKoreanNumber(42, { postfix: "명" })).toBe("마흔두명");
  });

  it("throws error for invalid numbers", () => {
    expect(() => toKoreanNumber(0, { postfix: "개" })).toThrow();
    expect(() => toKoreanNumber(100, { postfix: "개" })).toThrow();
    expect(() => toKoreanNumber(1.5, { postfix: "개" })).toThrow();
    expect(() => toKoreanNumber(-1, { postfix: "개" })).toThrow();
  });
});
