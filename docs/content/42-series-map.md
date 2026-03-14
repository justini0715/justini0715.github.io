# 42 Series Map

이 문서는 `/home/iostream/Desktop/42-repo-workspace`를 실제로 훑어서 정리한 **42 시리즈 맵**이다.
현재 사이트에서는 42 글을 아래 5개 축으로 묶는다.

## 1. 42 Core
- `42-libft` — 첫 정적 라이브러리 구축, libc 유사 함수와 bonus linked list API
- `42-get-next-line` — 파일 descriptor에서 한 줄씩 읽는 상태 보존형 reader
- `42-ft-printf` — 가변 인자와 포맷 dispatch를 다루는 출력 라이브러리

## 2. 42 Systems
- `42-pipex` — `pipe`, `fork`, `dup2`, `execve` 기반 파이프라인 복제
- `42-push-swap` — 제한된 연산 집합으로 정렬을 수행하는 스택 알고리즘
- `42-philosopher` — 스레드, mutex, 모니터링, 교착상태 회피
- `42-minishell` — 파서 / 실행기 / 시그널 / env를 분리한 셸 구조 스캐폴드

## 3. 42 Graphics
- `42-fdf` — height map을 isometric wireframe으로 그리는 MiniLibX 프로젝트
- `42-cub3d` — `.cub` 파싱, 텍스처, 레이캐스팅, 플레이어 제어

## 4. 42 Infra
- `42-born2beroot` — VM, SSH, UFW, sudo, LVM, monitoring 중심 시스템 관리 과제
- `42-inception` — Docker Compose 기반 Nginx / WordPress / MariaDB 인프라
- `42-webserv` — 현재 로컬 checkout 기준으로는 README만 있는 placeholder 상태

## 5. 42 C++
- `42-cpp-modules-00-04` — 클래스 기초, 메모리 관리, canonical form, 상속, 다형성
- `42-cpp-module-05` — Bureaucrat / Form / AForm / Intern과 예외 기반 제어 흐름

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

## 시리즈 운용 원칙
- 42 글은 `/blog`가 아니라 `/42` 아래에서만 읽는다.
- 각 글은 **subject / repo 구조 / 실제 코드 단서 / 설계 tradeoff / 배운 점**을 우선한다.
- 구현이 비어 있는 repo는 비어 있다고 명시한다. 추측으로 포장하지 않는다.
- 앞으로 새 42 글을 추가할 때도 이 시리즈 키를 유지한다.
