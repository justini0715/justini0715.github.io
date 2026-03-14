---
title: "42 - get_next_line"
description: "한 줄씩 읽는 함수 하나를 구현하면서 static 상태와 버퍼 수명 관리가 얼마나 까다로운지 드러나는 과제."
pubDate: 2026-03-02
category: "42"
tags: ["42", "c", "io", "get_next_line"]
series: "42-core"
seriesTitle: "42 Core"
seriesOrder: 2
difficulty: "버퍼 상태 보존과 메모리 수명 관리"
featured: false
draft: false
---

# 42 - get_next_line

## 이 과제가 무엇인지

`get_next_line`은 함수 하나만 보면 작아 보이지만, 실제로는 **입출력 + static 상태 + 문자열 분할 + 메모리 수명**이 한 번에 얽혀 있는 과제다. "한 줄을 반환한다"는 요구 하나가 얼마나 많은 상태 관리를 끌고 오는지 보여준다.

## 로컬 repo에서 확인한 구현 범위

로컬 경로: `/home/iostream/Desktop/42-repo-workspace/get_next_line`

실제로 확인한 구조는 아래와 같다.
- `include/get_next_line.h`
- `src/get_next_line.c`
- `src/get_next_line_utils.c`
- README에는 mandatory 완료, bonus 분리 소스는 현재 repo에 없다고 적혀 있다.

헤더를 보면 `BUFFER_SIZE` 기본값이 `42`로 정의돼 있고, `OPEN_MAX`도 직접 둔다.

`get_next_line.c`에서는 다음 흐름이 보인다.
- `static char *save;`
- `get_text()`로 read loop 수행
- `set_line()`에서 현재 줄과 남은 조각 정리
- 최종 `get_next_line(fd)`에서 save와 line 수명 정리

즉 이 구현은 **저장된 나머지 문자열을 다음 호출로 넘기는 전형적인 구조**다.

## 코드에서 보이는 핵심 포인트

### 1. 핵심 상태는 `static save`
한 줄을 끊고 남은 나머지를 다음 호출로 넘겨야 하므로, 결국 상태를 함수 바깥에 유지해야 한다.

### 2. read와 split이 분리돼 있다
- 먼저 `read()`를 반복해서 버퍼를 채우고
- 그 다음 줄 하나를 떼어내는 구조

이 분리가 없으면 코드가 금방 엉킨다.

### 3. utils 함수는 사실상 작은 문자열 런타임이다
`ft_strdup`, `ft_strchr`, `ft_strjoin`, `ft_substr`, `ft_strlen`이 모두 여기에 딸려온다. 결국 이 과제는 I/O 과제이면서 동시에 **문자열 누적/분해 과제**다.

## 어려웠을 지점과 tradeoff

### 1. static 상태는 편하지만 함정이 많다
간단히 구현되지만, save를 언제 free해야 하는지 한 번만 실수해도 누수나 double free가 난다.

### 2. 줄이 없는 파일 끝 처리
EOF 직전, 개행 없는 마지막 줄, 빈 파일, 잘못된 fd 같은 케이스가 구현을 지저분하게 만든다.

### 3. bonus를 생각하면 다중 fd 문제가 바로 나온다
현재 repo 구조는 단일 `static char *save` 중심이라 mandatory 흐름은 읽기 쉽지만, 다중 fd bonus까지 가면 설계가 달라진다.

## 이 과제가 남기는 감각

`get_next_line`은 이후 텍스트 파싱 과제들에서 계속 남는다. 줄 단위로 읽는 함수가 애매하면 parser 쪽은 거의 다 흔들린다.

즉 이 과제는 단순히 read wrapper를 만드는 게 아니라, **입력 스트림을 상태 기반으로 다루는 감각**을 익히는 시작점이다.

## 링크
- repository: [justini0715/get_next_line](https://github.com/justini0715/get_next_line)
