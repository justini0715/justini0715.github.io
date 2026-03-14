---
title: "42 - fdf"
description: "height map을 isometric wireframe으로 그리면서 파싱, 좌표 변환, MiniLibX 이벤트 루프를 함께 다루는 그래픽 과제."
pubDate: 2026-03-09
category: "42"
tags: ["42", "c", "graphics", "fdf"]
series: "42-circle-2"
seriesTitle: "Circle 2"
seriesOrder: 3
difficulty: "그래픽 좌표 변환과 map 파싱"
featured: false
draft: false
---

# 42 - fdf

## 이 과제가 무엇인지

`fdf`는 `.fdf` height map을 읽어서 **isometric wireframe**으로 그리는 그래픽 과제다. 이 repo를 보면 단순히 선만 그리는 문제가 아니라, parser / transform / render loop / event handling이 모두 엮여 있다는 게 잘 드러난다.

## 로컬 repo에서 확인한 구조

로컬 경로: `/home/iostream/Desktop/42-repo-workspace/fdf`

실제로 보이는 핵심 구조:
- `src/parse*.c` — map width/height 확인, 데이터 할당, 형식 검증
- `src/draw.c` — horizontal/vertical line 그리기
- `src/transform.c` — 좌표 변환과 z interpolation
- `src/events.c` — key/close/render 이벤트
- `src/init.c` — config/window/image 초기화
- `src/utils.c` — cleanup와 에러 출력
- `src/gnl/*` — line reader 내장

## 코드에서 보이는 설계 포인트

### 1. parser가 생각보다 크다
`read_map_dimensions`, `allocate_map_data`, `parse_map_data` 흐름을 보면, 그래픽 과제지만 시작은 결국 **텍스트 파일 파싱**이다.

### 2. map 크기에 따라 scale을 조정한다
`adjust_scale()`가 map 크기에 따라 scale/z_scale을 바꾼다. 즉 이 구현은 렌더링보다 먼저 **입력 데이터 크기에 맞는 화면 전략**을 생각한다.

### 3. draw는 수평/수직 선으로 분리돼 있다
wireframe 특성상 map의 인접 점만 연결하면 되므로, horizontal/vertical line pass를 나누는 방식이 읽기 쉽다.

### 4. 이벤트 루프가 명확하다
`setup_mlx()`에서 hook을 걸고 `render()`가 반복 호출되는 구조라서, MiniLibX 기반 앱의 기본 뼈대가 선명하다.

## 어려웠을 지점

### 1. parser가 틀리면 렌더링 이전에 무너진다
폭이 맞지 않는 line, 잘못된 숫자, 빈 map 같은 경우를 먼저 막아야 한다.

### 2. 좌표 변환과 scale은 감각이 필요하다
같은 데이터라도 scale/z_scale/center 값에 따라 전혀 다른 화면이 나온다.

### 3. cleanup이 꽤 복잡하다
map, data, mlx window/image/display까지 정리해야 해서, 실패 지점별 free 경로가 중요하다.

## 링크
- repository: [justini0715/fdf](https://github.com/justini0715/fdf)
