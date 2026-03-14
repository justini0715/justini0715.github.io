---
title: "42 - pipex"
description: "파이프, fork, dup2, execve를 묶어 셸의 두 단계 파이프라인을 복제하는 시스템 프로그래밍 과제."
pubDate: 2026-03-05
category: "42"
tags: ["42", "c", "pipe", "execve", "pipex"]
series: "42-circle-2"
seriesTitle: "Circle 2"
seriesOrder: 2
difficulty: "프로세스/파이프/리다이렉션"
featured: false
draft: false
---

# 42 - pipex

## 이 과제가 무엇인지

`pipex`는 셸에서 너무 익숙한 파이프라인 동작을 C로 직접 재현하게 만든다. 핵심은 결국 **`pipe` + `fork` + `dup2` + `execve`**를 올바른 순서로 조합하는 것이다.

## 로컬 repo에서 확인한 구현 범위

로컬 경로: `/home/iostream/Desktop/42-repo-workspace/pipex`

구조는 매우 단순하다.
- `include/pipex.h`
- `src/pipex.c`
- `src/func.c`
- `src/ft_split.c`

`pipex.c`를 보면 구현이 아주 직접적이다.
- PATH를 환경변수에서 찾아 명령 경로를 조합한다.
- `exec()`에서 명령 문자열을 split하고 `execve()`를 호출한다.
- `child_process()`는 infile → pipe write end로 연결한다.
- `parent_process()`는 pipe read end → outfile로 연결한다.
- `main()`은 `pipe()`와 `fork()`를 수행하고 두 프로세스를 순서대로 실행한다.

즉 이 과제는 **프로세스 파이프라인의 핵심 동작을 최소 단위로 노출한 구현**이다.

## 코드에서 보이는 tradeoff

### 1. 명령 파싱은 단순 split 기반이다
현재 구현은 공백 기준 `ft_split`을 쓰기 때문에, shell quoting 같은 복잡한 케이스는 다루지 않는다.

### 2. PATH 탐색을 직접 구현한다
`parse()`가 `PATH`를 찾아서 실행 파일을 찾는 구조라서, 셸이 해주던 일을 직접 떠안는다.

### 3. 에러 처리는 셸보다 거칠지만 과제 범위에는 맞다
`"No such file or directory"`, `"Path not found"`, `"execve"` 같은 직접 출력은 작은 구현엔 맞지만, 실제 셸처럼 세밀한 에러 모델은 아니다.

## 왜 중요한가

`pipex`는 이후 `minishell`의 전초전처럼 느껴진다. 셸을 완전히 만들기 전에, **프로세스와 파일 디스크립터가 실제로 어떻게 연결되는지**를 손으로 익히게 한다.

## 링크
- repository: [justini0715/pipex](https://github.com/justini0715/pipex)
