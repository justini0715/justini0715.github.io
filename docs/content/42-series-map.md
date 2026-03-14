# 42 Circle Map

이 문서는 `/home/iostream/Desktop/42-repo-workspace`를 실제로 훑어 본 결과를, **42 Common Core의 concentric circle 기준**으로 다시 정리한 메모다.

예전처럼 `systems / graphics / infra / cpp`로 복잡하게 나누지 않고, 현재 사이트의 `/42`는 **Circle 0 ~ Circle 5**만 남긴다.

## 기준점
- 42 Abu Dhabi의 공개 curriculum 페이지는 Common Core를 **동심원(circle)** 구조로 설명한다.
- 42 Abu Dhabi handbook은 Common Core rank/circle progression을 표로 제시한다.
- 공개 student/common-core 정리 자료를 같이 참고해 현재 로컬 repo 집합을 어느 circle에 둘지 보정했다.

참고 링크:
- 42 Abu Dhabi curriculum: `https://42abudhabi.ae/curriculum/`
- 42 Abu Dhabi student handbook (public PDF): `https://cdn.prod.website-files.com/6273cfa344c89d6dcfef5e0f/640b2b29959ca5da42de36ba_2023_02_16%20Student%20Handbook-compressed.pdf`
- 공개 common-core map 예시: `https://github.com/mcombeau/42-common-core`

즉, 아래 분류는 **공개 42 cursus 구조 + 현재 내 로컬 archive**를 합친 실전용 분류다. 캠퍼스/기수에 따라 elective나 세부 프로젝트 배치는 조금 달라질 수 있다.

## Circle 0
- `42-libft` — 이후 거의 모든 과제의 바닥이 되는 첫 정적 라이브러리

## Circle 1
- `42-ft-printf` — 가변 인자와 format dispatch를 직접 다루는 출력 함수 재구현
- `42-get-next-line` — static 상태와 buffer 수명 관리가 핵심인 line reader
- `42-born2beroot` — 코드보다 VM 설정과 운영 정책 검증이 중심인 시스템 관리 과제

## Circle 2
- `42-push-swap` — 제한된 연산 집합으로 정렬을 수행하는 알고리즘 과제
- `42-pipex` — `pipe`, `fork`, `dup2`, `execve`를 조합하는 프로세스 과제
- `42-fdf` — 현재 로컬 archive 기준으로 Circle 2 확장 구간에 둔 MiniLibX wireframe 그래픽 과제

## Circle 3
- `42-philosopher` — 스레드, mutex, monitor, deadlock 회피를 다루는 동시성 과제
- `42-minishell` — parser / executor / signal 구조를 분리해 가는 셸 과제

## Circle 4
- `42-cub3d` — `.cub` 파싱과 raycasting 엔진을 묶는 그래픽/엔진 과제
- `42-cpp-modules-00-04` — OOP 기초, canonical form, inheritance, polymorphism으로 넘어가는 C++ 전환 구간

## Circle 5
- `42-cpp-module-05` — Bureaucrat/Form/AForm/Intern 기반의 예외와 추상화 설계
- `42-inception` — Docker Compose 기반 서비스 묶음과 운영 흐름을 다루는 인프라 과제
- `42-webserv` — 현재 로컬 checkout 기준으로는 README 중심 placeholder 상태인 HTTP 서버 과제

## 로컬 조사 기준
다음 로컬 경로를 직접 확인했다.

- `/home/iostream/Desktop/42-repo-workspace/42-Libft`
- `/home/iostream/Desktop/42-repo-workspace/ft_printf`
- `/home/iostream/Desktop/42-repo-workspace/get_next_line`
- `/home/iostream/Desktop/42-repo-workspace/born2beroot`
- `/home/iostream/Desktop/42-repo-workspace/pipex`
- `/home/iostream/Desktop/42-repo-workspace/push_swap`
- `/home/iostream/Desktop/42-repo-workspace/philosopher`
- `/home/iostream/Desktop/42-repo-workspace/minishell`
- `/home/iostream/Desktop/42-repo-workspace/fdf`
- `/home/iostream/Desktop/42-repo-workspace/cub3d`
- `/home/iostream/Desktop/42-repo-workspace/inception`
- `/home/iostream/Desktop/42-repo-workspace/Webserv`
- `/home/iostream/Desktop/42-repo-workspace/cpp_module`
- `/home/iostream/Desktop/42-repo-workspace/cpp-module-05`

## 로컬 조사 기준
다음 로컬 경로를 직접 확인했다.

- `/home/iostream/Desktop/42-repo-workspace/42-Libft`
- `/home/iostream/Desktop/42-repo-workspace/ft_printf`
- `/home/iostream/Desktop/42-repo-workspace/get_next_line`
- `/home/iostream/Desktop/42-repo-workspace/born2beroot`
- `/home/iostream/Desktop/42-repo-workspace/pipex`
- `/home/iostream/Desktop/42-repo-workspace/push_swap`
- `/home/iostream/Desktop/42-repo-workspace/philosopher`
- `/home/iostream/Desktop/42-repo-workspace/minishell`
- `/home/iostream/Desktop/42-repo-workspace/fdf`
- `/home/iostream/Desktop/42-repo-workspace/cub3d`
- `/home/iostream/Desktop/42-repo-workspace/inception`
- `/home/iostream/Desktop/42-repo-workspace/Webserv`
- `/home/iostream/Desktop/42-repo-workspace/cpp_module`
- `/home/iostream/Desktop/42-repo-workspace/cpp-module-05`

## 운용 원칙
- 42 글은 `/blog`가 아니라 `/42` 아래에서만 읽는다.
- 각 글은 **circle / repo 구조 / 실제 코드 단서 / 설계 tradeoff / 배운 점**을 우선한다.
- 구현이 비어 있는 repo는 비어 있다고 명시한다. 추측으로 포장하지 않는다.
- 앞으로 새 42 글을 추가할 때도 circle key를 유지한다.
