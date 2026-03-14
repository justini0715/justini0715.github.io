---
title: "42 - inception"
description: "Docker Compose 기반으로 Nginx, WordPress, MariaDB와 bonus 서비스를 묶어 운영 흐름까지 정리한 42 인프라 과제."
pubDate: 2026-03-11
category: "42"
tags: ["42", "docker", "nginx", "wordpress", "inception"]
series: "42-infra"
seriesTitle: "42 Infra"
seriesOrder: 2
difficulty: "컨테이너 오케스트레이션과 서비스 경계"
featured: true
draft: false
---

# 42 - inception

## 이 과제가 무엇인지

`inception`은 42에서 인프라 감각을 가장 강하게 요구하는 과제 중 하나다. 단순히 컨테이너 몇 개 띄우는 게 아니라, **서비스 경계 / TLS / volume / bootstrap / compose orchestration**을 같이 맞춰야 한다.

## 로컬 repo에서 확인한 구조

로컬 경로: `/home/iostream/Desktop/42-repo-workspace/inception`

README와 실제 파일 구조를 보면 아래 요소가 명확하다.
- `srcs/docker-compose.yml`가 여러 requirements compose를 include한다.
- `srcs/requirements/nginx` / `wordpress` / `mariadb`가 분리돼 있다.
- `nginx_entrypoint.sh`, `wordpress_entrypoint.sh`, `efficient_entrypoint_latest.sh` 같은 entrypoint 스크립트가 존재한다.
- `hosts`, `secrets`, `DEV_DOC.md`, `USER_DOC.md`, `README42.md`까지 같이 있다.

즉 이 repo는 단순 subject 충족을 넘어서, **실제 운영/디버깅 문서까지 포함된 인프라 저장소**에 가깝다.

## 코드/스크립트에서 보이는 설계 포인트

### 1. compose를 수동 include 구조로 관리한다
루트 `docker-compose.yml` 상단 주석에 서비스 수가 많아져도 일단 수동 관리로 구축한다고 적혀 있다. 즉 이 repo는 자동화보다 **명시적 구조 관리**를 택했다.

### 2. bootstrap 스크립트가 꽤 공격적으로 들어가 있다
MariaDB 쪽은 임시 서버 bootstrap / install-db / socket auth 초기화 흐름이 보이고, WordPress 쪽은 `wp-config.php` 생성과 초기 설정 자동화가 들어가 있다.

### 3. Nginx는 envsubst + self-signed TLS 흐름을 갖는다
Nginx entrypoint는 config template 처리와 인증서 생성까지 담당한다. 즉 reverse proxy도 단순 정적 conf가 아니라 startup script에 일부 책임이 있다.

## 어려웠을 지점

### 1. 서비스가 늘수록 구성 추적이 어렵다
README에도 bonus services가 포함돼 있고, compose include가 많아질수록 수정 포인트가 여러 파일로 퍼진다.

### 2. 부팅 순서와 health check가 중요하다
`wp-cron` 관련 메모처럼, 상위 서비스가 먼저 요청을 보내면 초기화 타이밍 문제로 실패가 날 수 있다.

### 3. 로컬 개발 환경 의존성이 크다
Docker, sudo, volume path, host mapping까지 맞아야 하므로 코드보다 환경 재현이 더 어렵다.

## 지금 다시 보면

`inception`은 infra 과제지만, 결국 **운영 문서화 프로젝트**이기도 하다. 이미지/컨테이너를 띄우는 것만큼, 어떤 순서로 확인하고 복구하는지가 중요하다.

## 링크
- repository: [justini0715/inception](https://github.com/justini0715/inception)
