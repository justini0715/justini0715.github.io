---
title: "42 - ft_printf"
description: "가변 인자와 포맷 dispatch를 직접 다루면서 출력 함수를 작은 런타임처럼 재구성하는 과제."
pubDate: 2026-03-03
category: "42"
tags: ["42", "c", "printf", "variadic"]
series: "42-circle-1"
seriesTitle: "Circle 1"
seriesOrder: 1
difficulty: "가변 인자와 포맷 파싱"
featured: false
draft: false
---

# 42 - ft_printf

## 이 과제가 무엇인지

`ft_printf`는 단순히 출력 예쁘게 찍는 과제가 아니다. 실제로는 **가변 인자 처리 / 포맷 문자열 파싱 / 타입별 출력 함수 dispatch / 출력 길이 누적**을 직접 다루게 만든다.

## 로컬 repo에서 확인한 구현 범위

로컬 경로: `/home/iostream/Desktop/42-repo-workspace/ft_printf`

확인한 구조:
- `include/ft_printf.h`
- `src/ft_printf.c`
- `src/parsing.c`
- `src/str_util.c`
- `src/type_util.c`

README 기준 지원 포맷은 다음과 같다.
- `c`, `s`, `p`, `d`, `i`, `u`, `x`, `X`, `%`

즉 전체 구조는 **entrypoint → parsing → type helpers**로 나뉘어 있다.

## 코드에서 보이는 설계 포인트

### 1. 진입점은 아주 얇다
`ft_printf(const char *format, ...)`에서 `va_start` → `parsing(format, argp)` → `va_end` 흐름으로 깔끔하게 넘긴다.

### 2. parsing이 dispatch 중심이다
`parsing.c`의 `check_type()`는 포맷 문자 하나를 읽고 어떤 출력 함수를 부를지 결정한다.

즉 이 과제의 중심은 포맷 문법 전체를 구현하는 게 아니라, **지원 범위를 작게 두고도 타입 dispatch를 안정적으로 만드는 것**이다.

### 3. 숫자/16진수 출력이 재귀 구조를 가진다
`type_util.c` 쪽 함수 이름과 구현 흐름을 보면 10진수/16진수 출력은 재귀적으로 내려가며 자릿수를 풀어내는 방식이다.

## 어려웠을 지점과 tradeoff

### 1. 반환 길이 일관성
printf류 구현에서 실제 출력과 반환 길이가 어긋나면 함수 전체를 신뢰하기 어렵다.

### 2. 포인터/unsigned/hex 처리 분기
문자열/정수보다 `p`, `u`, `x`, `X` 쪽이 구현 실수가 나기 쉽다.

### 3. 범위를 어디까지 자를지 결정해야 한다
폭(width), 정밀도(precision), flag 전체를 다 구현하지 않는 대신, subject 범위 안에서 작고 단단한 구현을 택해야 한다.

## 이 과제가 남기는 감각

`ft_printf`는 이후 디버깅과 로깅에 직접 도움이 된다. 단순히 라이브러리 하나를 다시 만든 게 아니라, **출력 포맷을 함수 설계로 쪼개는 법**을 익히는 과제다.

## 링크
- repository: [justini0715/ft_printf](https://github.com/justini0715/ft_printf)
