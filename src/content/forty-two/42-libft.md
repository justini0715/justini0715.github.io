---
title: "42 - libft"
description: "첫 정적 라이브러리를 직접 만들면서 문자열, 메모리, bonus linked list API까지 묶어낸 42의 기반 과제."
pubDate: 2026-03-01
category: "42"
tags: ["42", "c", "library", "libft"]
series: "42-circle-0"
seriesTitle: "Circle 0"
seriesOrder: 1
difficulty: "기초 C 라이브러리와 메모리 처리"
featured: true
draft: false
---

# 42 - libft

## 이 과제가 무엇인지

`libft`는 42에서 이후 거의 모든 과제의 바닥이 되는 첫 라이브러리 과제다. 단순히 함수를 많이 다시 만드는 게 아니라, **정적 라이브러리 구조 / 헤더 관리 / 메모리 규칙 / API 일관성**을 처음부터 직접 챙겨야 한다.

## 로컬 repo에서 확인한 구현 범위

로컬 경로: `/home/iostream/Desktop/42-repo-workspace/42-Libft`

실제로 확인한 구조는 아래와 같다.
- `include/libft.h`에 전체 함수 프로토타입이 한 번에 정리돼 있다.
- `src/`에 `ft_is*`, `ft_mem*`, `ft_str*`, `ft_atoi`, `ft_calloc` 같은 기본 함수가 들어 있다.
- `src/bonus/`에는 `ft_lst*` 계열 bonus linked list API가 따로 분리돼 있다.
- `Makefile`은 `make`, `make bonus`, `make clean`, `make fclean`, `make re` 구조를 유지한다.
- README에는 `submission` tag를 유지한다고 명시돼 있다.

즉 이 repo는 **필수/보너스 기능이 분리된 정적 라이브러리 프로젝트**라는 점이 구조에서 바로 드러난다.

## 코드와 주석에서 드러난 설계 포인트

`libft.h`를 보면 이 과제는 사실상 네 가지 묶음으로 정리된다.
- 문자 분류 / 대소문자 변환
- 메모리 함수
- 문자열 함수
- 출력과 linked list bonus

특히 `ft_split`, `ft_substr`, `ft_strjoin`, `ft_strtrim`, `ft_itoa` 같은 함수는 단순 wrapper가 아니라 **동적 메모리 할당과 실패 처리**가 필요한 함수들이라서, libft의 난이도가 여기서 올라간다.

bonus 쪽 `ft_lstmap`, `ft_lstclear`, `ft_lstdelone`은 단순히 list를 다루는 수준이 아니라, **새 노드를 만들다가 실패했을 때 어떻게 rollback할지**를 생각하게 만든다.

## 구현하면서 어려웠을 지점

이 repo 구조를 기준으로 보면 libft의 실제 어려움은 세 가지다.

### 1. 함수 수가 많아서 일관성이 깨지기 쉽다
파일이 많아질수록 네이밍, 반환 규칙, null 처리 방식이 조금씩 흔들릴 수 있다.

### 2. 메모리 할당 함수들은 실패 처리가 핵심이다
`ft_split`, `ft_strjoin`, `ft_substr`, `ft_itoa`처럼 새 버퍼를 만드는 함수는 중간 할당 실패 시 누수를 만들기 쉽다.

### 3. bonus linked list는 "구조체 API"를 처음 제대로 다루게 만든다
단순 문자열 함수보다, 포인터 소유권과 삭제 규약을 더 강하게 의식해야 한다.

## 지금 다시 보면 중요한 점

`libft`가 중요한 이유는 이후 과제에서 이 함수들을 다시 쓰기 때문만은 아니다. 이 과제는 **"내가 만든 API를 내가 신뢰할 수 있는가"**를 처음 묻는 프로젝트다.

여기서 함수 하나가 애매하면 나중에 `get_next_line`, `ft_printf`, `pipex`, `push_swap` 같은 과제에서 디버깅 비용이 그대로 커진다.

## 지금 다시 정리하면

- 정적 라이브러리 빌드 감각
- 헤더를 통해 public API를 묶는 감각
- 메모리 실패 처리
- linked list 소유권 정리

이 네 가지가 libft의 핵심이다.

## 링크
- repository: [justini0715/42-Libft](https://github.com/justini0715/42-Libft)
