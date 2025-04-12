# korean-number-count

숫자를 한글 수 표현으로 변환하는 TypeScript/JavaScript 라이브러리입니다.

## 설치

```bash
npm install korean-number-count
```

## 사용법

```typescript
import { toKoreanNumber } from "korean-number-count";

// 기본 사용법
console.log(toKoreanNumber(1, { postfix: "개" })); // '한개'
console.log(toKoreanNumber(15, { postfix: "개" })); // '열다섯개'
console.log(toKoreanNumber(42, { postfix: "개" })); // '마흔두개'
console.log(toKoreanNumber(99, { postfix: "개" })); // '아흔아홉개'

// 다른 접미사(postfix) 사용
console.log(toKoreanNumber(1, { postfix: "명" })); // '한명'
console.log(toKoreanNumber(3, { postfix: "개월" })); // '세개월'
console.log(toKoreanNumber(20, { postfix: "살" })); // '스무살'
```

## 특징

- 1부터 99까지의 숫자를 한글로 변환
- 올바른 한국어 수 표현 사용 (예: 스무, 서른, 마흔, 쉰, 예순, 일흔, 여든, 아흔)
- 필수 접미사(postfix) 파라미터
- TypeScript 지원
- 간단하고 직관적인 API

## 제한사항

- 1부터 99까지의 정수만 지원
- 음수나 소수점이 있는 숫자는 지원하지 않음

## 라이선스

MIT License - 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.
