---
title: "42 - webserv"
description: "현재 로컬 checkout 기준으로는 구현 소스가 비어 있고 README만 남아 있는 상태라, 진행 상태 자체를 기록하는 placeholder 문서."
pubDate: 2026-03-12
category: "42"
tags: ["42", "cpp", "http", "webserv"]
series: "42-infra"
seriesTitle: "42 Infra"
seriesOrder: 3
difficulty: "HTTP 서버 구현(현재 repo는 placeholder 상태)"
featured: false
draft: false
---

# 42 - webserv

## 현재 로컬 상태부터 기록

로컬 경로: `/home/iostream/Desktop/42-repo-workspace/Webserv`

이번 조사 기준으로 이 repo에서는 아래만 확인됐다.
- `README.md`
- `LICENSE`
- git repository 자체

즉, **현재 checkout에는 구현 소스나 문서가 사실상 없다.** 이 글은 webserv 구현 분석이라기보다, 현재 저장소 상태를 정직하게 기록하는 문서다.

## 왜 이 상태를 굳이 문서로 남기나

42 과제를 정리할 때 중요한 건 잘 된 것만 남기는 게 아니라, **무엇이 아직 비어 있는지도 명확히 남기는 것**이다. webserv 같은 큰 과제는 특히 “아직 로컬 근거가 부족하다”는 사실 자체가 중요한 정보다.

## 지금 기준으로 말할 수 있는 것

- repo remote는 존재한다: `justini0715/Webserv`
- 하지만 현재 로컬 조사 범위에서는 실제 구현 구조를 읽을 수 있는 파일이 없다
- 따라서 parser, event loop, socket handling, HTTP response flow에 대해 구체적으로 적는 것은 지금 근거 부족 상태다

## 다음에 보강할 때 필요한 것

webserv 문서를 제대로 채우려면 적어도 아래가 필요하다.
- server config parser 구조
- socket accept/read/write loop
- request/response object 구조
- CGI 처리 유무
- poll/epoll/kqueue 같은 multiplexing 전략

## 지금 단계의 결론

이 글은 “webserv를 아직 못 썼다”가 아니라,
**로컬 repo snapshot 기준으로는 아직 분석 가능한 코드 근거가 없다**는 상태 기록이다.
이런 상태를 빼지 않고 남겨두는 편이, 나중에 다시 채울 때도 더 정확하다.

## 링크
- repository: [justini0715/Webserv](https://github.com/justini0715/Webserv)
