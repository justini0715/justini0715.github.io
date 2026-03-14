---
title: "42 - philosopher"
description: "교착상태, mutex, 모니터링, 타이밍 문제를 동시에 다루게 만드는 42의 대표 동시성 과제."
pubDate: 2026-03-07
category: "42"
tags: ["42", "c", "threads", "philosopher"]
series: "42-circle-3"
seriesTitle: "Circle 3"
seriesOrder: 1
difficulty: "동시성과 시간 민감한 상태 관리"
featured: true
draft: false
---

# 42 - philosopher

## 이 과제가 무엇인지

`philosopher`는 42에서 동시성 문제를 가장 직접적으로 체감하게 만드는 과제다. 스레드만 만들면 끝나는 게 아니라, **교착상태 회피 / fork 상태 동기화 / 죽음 감지 / 출력 일관성**을 동시에 맞춰야 한다.

## 로컬 repo에서 확인한 구조

로컬 경로: `/home/iostream/Desktop/42-repo-workspace/philosopher`

실제로 확인한 주요 구조는 다음과 같다.
- `init.c` — info / forks / table / philosopher 초기화
- `fork_handle.c` — fork 점유/반납 로직
- `do_op.c` — eat / sleep / think 흐름
- `monitor.c` — 종료, quota, death detection
- `philo_utils.c` — 시간 계산과 출력 mutex
- `philo_handler.c` — join / cleanup / mutex destroy
- `inc/philosopher.h` — 구조체와 설계 주석

이 과제는 헤더 주석이 특히 중요했다. 상단 설명에 철학자 문제, 교착상태, 홀수/짝수 순서로 fork를 집는 해결 아이디어까지 적어 두고 있다.

## 코드와 주석에서 드러난 설계 포인트

### 1. fork 자체와 fork 상태를 분리한다
헤더 주석에 “fork is not a mutex, mutexes will protect forks”라고 적혀 있듯, 실제 구현도 `fork_state_mutex`와 개별 `mutex_fork`를 함께 둔다.

즉,
- 상태 검사/변경은 전역 상태 mutex
- 실제 fork 자원 점유는 개별 mutex

로 역할을 나눈다.

### 2. 모니터 계층이 분리돼 있다
`monitor.c`는 quota/full/dead/exit 검사를 별도 흐름으로 두고 있다. 이 분리가 없으면 philosopher routine 안에 모든 종료 조건이 섞여서 더 읽기 어려워진다.

### 3. 출력도 동기화 대상이다
`print_mutex`가 따로 존재한다는 건, 이 과제가 단순 계산보다 **관측 가능한 상태를 깨지 않게 보여주는 것**까지 포함한다는 뜻이다.

## 어려웠을 지점과 tradeoff

### 1. deadlock 회피와 starvation 감지가 따로 논다
fork를 잡는 순서를 바꾼다고 모든 문제가 끝나는 게 아니라, 결국 누가 오래 굶는지와 종료 판정을 따로 다뤄야 한다.

### 2. 상태 변수 + mutex 이중 관리가 복잡하다
현재 구조는 안전성을 높이지만, 잘못하면 state와 실제 mutex 점유가 어긋날 위험도 생긴다.

### 3. 시간 기반 버그는 재현이 어렵다
README에 valgrind/helgrind 예시가 있는 것도, 눈으로만 보면 안 잡히는 버그가 많기 때문이다.

## 지금 다시 보면

`philosopher`의 핵심은 “thread를 잘 썼다”가 아니라, **공유 자원을 둘러싼 상태를 얼마나 명확하게 분리했는가**에 있다. 구조가 곧 정확성인 과제다.

## 링크
- repository: [justini0715/philosopher](https://github.com/justini0715/philosopher)
