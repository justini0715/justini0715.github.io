---
title: "42 - push_swap"
description: "정렬 자체보다 제한된 연산 집합과 move budget이 본질이 되는 42의 대표 알고리즘 과제."
pubDate: 2026-03-06
category: "42"
tags: ["42", "c", "algorithms", "push_swap"]
series: "42-systems"
seriesTitle: "42 Systems"
seriesOrder: 2
difficulty: "연산 제한 기반 알고리즘 설계"
featured: true
draft: false
---

# 42 - push_swap

## 이 과제가 무엇인지

`push_swap`은 정렬 문제를 다시 풀게 만드는 과제가 아니다. 핵심은 **두 개의 스택과 제한된 연산 언어** 안에서 정렬을 얼마나 효율적으로 표현하느냐에 있다.

## 로컬 repo에서 확인한 구현 구조

로컬 경로: `/home/iostream/Desktop/42-repo-workspace/push_swap`

헤더와 소스 구조를 보면 다음 축으로 나뉜다.
- `main.c` / `init.c` — 프로그램 진입과 스택 초기화
- `parse.c`, `parse_step_1.c`, `parse_step_2.c` — 입력 파싱, 형식 검사, 중복/정렬 여부 검사
- `push.c`, `swap.c`, `rotate.c`, `reverse_rotate.c` — primitive operations
- `sort.c` — 일반 case 정렬 흐름
- `sort_case.c` — `small_sort_three`, `small_sort_five` 같은 작은 입력 최적화
- `list_stack_handler.c` — doubly linked list 기반 stack 조작
- `terminator.c` — 종료/에러 정리

즉 이 repo는 **파서 / primitive operation / 정렬 전략**을 의식적으로 분리한 구조다.

## 코드와 주석에서 보이는 설계 포인트

`push_swap.h` 상단 주석은 프로젝트 성격을 아주 직접적으로 설명한다.
- 두 스택 사용
- 제한된 연산 집합
- 에러 케이스와 메모리 관리 중요

실제 코드에선 다음이 눈에 띈다.
- tiny input은 `small_sort_three`, `small_sort_five`로 별도 처리
- 입력 검증 단계에서 `quick_sort`를 이용해 duplicate / sorted 상태를 확인
- 일반 case는 `sort_to_b`, `sort_to_a`, `a_to_b`, `b_to_a`처럼 pivot 기반 분할 정렬 흐름을 가진다

## 어려웠을 지점

### 1. 일반 case와 small case를 동시에 관리해야 한다
작은 입력 최적화와 큰 입력 전략을 같은 코드베이스에서 유지해야 해서, 흐름이 쉽게 꼬일 수 있다.

### 2. parser가 정렬기만큼 중요하다
잘못된 입력, 중복 값, 이미 정렬된 입력 처리 때문에 parser가 생각보다 커진다.

### 3. primitive operation은 boring해야 한다
정렬 전략을 공격적으로 바꾸려면, push/swap/rotate 계열은 최대한 단순하고 예측 가능해야 한다.

## 지금 다시 보면

`push_swap`은 “알고리즘을 잘 안다”보다 **제약된 API 위에서 전략을 설계하는 능력**을 더 많이 요구한다. 이 점에서 그냥 sorting 문제보다 훨씬 실전적이다.

## 링크
- repository: [justini0715/push_swap](https://github.com/justini0715/push_swap)
