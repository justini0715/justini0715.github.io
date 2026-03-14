---
title: "42 - minishell"
description: "현재 로컬 기준으로는 구현보다 구조 스캐폴드가 앞서 있는 상태지만, 파서/실행기/시그널 분리를 준비한 셸 프로젝트."
pubDate: 2026-03-08
category: "42"
tags: ["42", "c", "shell", "minishell"]
series: "42-systems"
seriesTitle: "42 Systems"
seriesOrder: 4
difficulty: "셸 파서와 실행기 설계"
featured: false
draft: false
---

# 42 - minishell

## 현재 상태부터 정리

로컬 경로: `/home/iostream/Desktop/42-repo-workspace/minishell`

이 repo는 현재 **구현 완성본이라기보다 구조-first scaffold**에 가깝다.
README와 디렉터리 구조를 보면 다음이 분명하다.
- `src/main.c`는 placeholder 수준이다.
- `src/builtin`, `src/env`, `src/executor`, `src/expand`, `src/parser`, `src/signal`, `src/utils` 디렉터리가 미리 나뉘어 있다.
- README도 “real implementation is still pending” 성격으로 적혀 있다.

즉, 이 글은 완성 구현 분석보다 **어떤 구조를 먼저 준비했는지**를 기록하는 문서로 보는 게 맞다.

## 이 과제가 본질적으로 무엇인지

`minishell`은 결국 아래 문제를 한꺼번에 푼다.
- 입력 읽기
- 토큰화 / 파싱
- expansion
- builtins 처리
- pipe/redirection
- 프로세스 실행
- 시그널 처리
- env 관리

그래서 시작 전에 디렉터리를 저렇게 잘게 나눠둔 건 오히려 합리적이다. 구현보다 먼저 경계를 잡아야 하는 과제이기 때문이다.

## 현재 repo에서 읽을 수 있는 설계 의도

### 1. 책임 분리를 먼저 했다
- `parser/`
- `executor/`
- `env/`
- `signal/`
- `builtin/`

이 구조는 이후 코드가 커질 걸 전제한 분리다. minishell은 한 파일로 밀어붙이면 거의 반드시 유지보수가 무너진다.

### 2. 빌드 가능한 최소 상태를 남겨뒀다
`main.c`가 단순 placeholder인 덕분에, repo는 비어 있지 않고 빌드 가능한 상태를 유지한다.

### 3. docs가 먼저 붙어 있다
`docs/subject/minishell.pdf`, `docs/deps.md`가 먼저 준비돼 있어, 구현을 시작할 때 문서 참조 경로가 명확하다.

## 지금 단계에서 중요한 tradeoff

### 1. 구조를 먼저 잡는 선택
장점은 책임 분리가 미리 보인다는 것, 단점은 실제 구현이 들어오기 전까지는 문서가 코드보다 앞서간다는 점이다.

### 2. parser / executor 경계가 핵심이다
이 과제는 결국 parser가 executor를 얼마나 잘 위한 입력 구조를 만들어주느냐가 중요하다.

### 3. 스캐폴드 상태를 솔직하게 남기는 것이 낫다
현재는 “완성된 셸 구현”이라고 포장하기보다, **구조는 준비됐고 실제 엔진은 이제 채워야 하는 상태**라고 명시하는 편이 더 정직하다.

## 링크
- repository: [justini0715/minishell](https://github.com/justini0715/minishell)
