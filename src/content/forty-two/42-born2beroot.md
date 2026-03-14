---
title: "42 - born2beroot"
description: "코드보다 VM 상태와 운영 정책이 핵심인 42 시스템 관리 과제로, 저장소는 문서와 검증 메모가 중심이다."
pubDate: 2026-03-04
category: "42"
tags: ["42", "linux", "vm", "security", "born2beroot"]
series: "42-circle-1"
seriesTitle: "Circle 1"
seriesOrder: 3
difficulty: "시스템 설정과 운영 정책 검증"
featured: false
draft: false
---

# 42 - born2beroot

## 이 과제가 무엇인지

`born2beroot`는 C 코드를 많이 쓰는 과제가 아니라, **VM 안에서 보안/운영 정책을 실제로 맞추는 시스템 관리 과제**에 가깝다. 이 repo도 그 특성을 그대로 반영해서, 코드보다 문서와 점검 메모가 중심이다.

## 로컬 repo에서 확인한 상태

로컬 경로: `/home/iostream/Desktop/42-repo-workspace/born2beroot`

이 repo는 README와 `docs/notes/Borntoberoot.md`, `docs/subject/born2beroot.pdf`를 중심으로 구성돼 있다.
README에 적힌 주요 범위는 다음과 같다.
- Debian 또는 Rocky Linux VM 구성
- encrypted partitioning + LVM
- SSH on `4242`
- UFW / hostname / user / password / sudo policy
- `monitoring.sh` 동작 확인

즉 이 저장소의 source of truth는 **VM 상태 자체**이고, repo는 그 상태를 검증/설명하는 보조 문서 역할을 한다.

## 문서에서 실제로 확인한 포인트

`docs/notes/Borntoberoot.md`에는 꽤 실전적인 체크 리스트가 들어 있다.
- UFW 상태 확인 명령
- evaluate 그룹 / 사용자 추가 / 패스워드 설정 예시
- hostname 설정
- LVM 설명
- sudo 설치와 로그 확인
- SSH 설정 개요
- cron 개요

특히 이 문서는 단순 subject 요약이 아니라, **평가 때 직접 확인해야 하는 운영 명령** 위주로 정리돼 있다.

## 이 과제의 어려움

### 1. 코드보다 시스템 상태가 정답이다
repo만 예쁘게 정리돼 있어도 VM 설정이 틀리면 바로 실패한다.

### 2. 보안 정책은 개별 설정이 아니라 조합이다
SSH, sudo, password policy, firewall, LVM, monitoring이 각각 따로 있는 게 아니라 서로 연결돼 있다.

### 3. 재현성과 평가 대응이 중요하다
born2beroot는 구현보다도 **“이 VM이 정말 요구사항을 만족하는가”**를 설명하고 검증하는 능력이 중요하다.

## 지금 다시 보면

이 과제는 나중의 infra 작업과 이어진다. `inception`처럼 컨테이너 인프라로 가기 전에, **운영체제 레벨의 정책과 서비스 설정을 어떻게 다뤄야 하는지**를 먼저 묻는 과제다.

## 링크
- repository: [justini0715/born2beroot](https://github.com/justini0715/born2beroot)
