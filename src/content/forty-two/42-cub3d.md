---
title: "42 - cub3d"
description: "`.cub` 파싱, 텍스처 메타데이터, 맵 검증, 레이캐스팅 엔진이 함께 들어 있는 42 그래픽 과제."
pubDate: 2026-03-10
category: "42"
tags: ["42", "c", "raycasting", "cub3d"]
series: "42-circle-4"
seriesTitle: "Circle 4"
seriesOrder: 1
difficulty: "맵 파싱과 레이캐스팅 렌더링"
featured: true
draft: false
---

# 42 - cub3d

## 이 과제가 무엇인지

`cub3d`는 42 그래픽 계열에서 가장 “엔진 같은 느낌”을 주는 과제다. 단순 렌더링이 아니라, **입력 파일 파싱 → 맵 검증 → 플레이어 상태 구성 → 레이캐스팅 → 텍스처 샘플링**까지 하나의 흐름으로 이어진다.

## 로컬 repo에서 확인한 구조

로컬 경로: `/home/iostream/Desktop/42-repo-workspace/cub3d`

README와 헤더, 디렉터리 구조에서 확인한 핵심은 아래와 같다.
- `inc/cub3d.h` — texture / rgb / map metadata 구조
- `src/parse/` — `.cub` 메타데이터와 map parsing
- `src/raycast/` — 레이캐스트 계산과 렌더링
- `src/utils/` — 공통 유틸
- `cub/` — 샘플 map
- `texture/` — wall textures
- `minilibx-linux/` — 렌더링 의존성 포함

`src/main.c`에서는 `init_metadata()` → `validate_and_store_map()` → `init_raycast()` → `run_raycast()` 순서가 보인다.

## 코드와 주석에서 드러난 설계 포인트

### 1. parser와 engine을 나누려고 한 흔적이 강하다
헤더엔 `valid_input`, `file_to_str`, `parse_meta`, `classify`, `parse_rgb`, `validate_and_store_map` 같은 함수들이 먼저 나온다. 즉 화면을 그리기 전에 **입력 정의를 정확히 표준화하는 과정**이 중요하다.

### 2. 텍스처와 색상 메타를 구조체로 먼저 묶는다
`NO`, `SO`, `WE`, `EA`, `F`, `C` 같은 identifier를 enum으로 구분하는 건 parser를 덜 fragile하게 만들기 위한 선택이다.

### 3. main.c에도 구조 고민 흔적이 남아 있다
주석으로 debug print 유틸이 남아 있고, “아.. 에러 핸들러 하나 만들까.. 구조 뒤집어 엎고 싶네.” 같은 코멘트도 보인다. parser/cleanup이 꽤 복잡해졌다는 신호로 읽힌다.

## 어려웠을 지점

### 1. 메타데이터와 맵 파싱이 렌더링만큼 어렵다
map이 닫혀 있는지, 플레이어 시작 위치가 유효한지, 텍스처 경로와 RGB가 맞는지 먼저 보장해야 한다.

### 2. asset와 코드가 함께 관리된다
샘플 맵과 텍스처가 repo에 함께 있기 때문에, 코드만 맞다고 끝나지 않고 asset path/형식까지 같이 관리해야 한다.

### 3. 에러 처리와 cleanup이 길어진다
parser 단계에서 실패하면 intermediate 2D array와 `t_cub`를 정리해야 해서, 구조가 쉽게 무거워진다.

## 지금 다시 보면

`cub3d`는 그래픽 프로젝트이면서 동시에 **parser 프로젝트**다. 레이캐스팅 자체도 중요하지만, 그 이전에 world data를 어떻게 안전하게 읽고 표준화하느냐가 핵심이다.

## 링크
- repository: [justini0715/cub3d](https://github.com/justini0715/cub3d)
