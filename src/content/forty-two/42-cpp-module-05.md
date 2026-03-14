---
title: "42 - cpp module 05"
description: "Bureaucrat, Form, AForm, Intern 구조로 예외, 추상화, 실행 권한 모델을 묶어내는 C++ Module 05 정리."
pubDate: 2026-03-14
category: "42"
tags: ["42", "cpp", "exceptions", "bureaucrat"]
series: "42-circle-5"
seriesTitle: "Circle 5"
seriesOrder: 1
difficulty: "예외 처리와 추상화 설계"
featured: true
draft: false
---

# 42 - cpp module 05

## 이 과제가 무엇인지

로컬 경로: `/home/iostream/Desktop/42-repo-workspace/cpp-module-05`

`cpp module 05`는 C++ 쪽에서도 꽤 구조적인 과제다. 단순 클래스 작성이 아니라,
- 권한 등급 모델(`Bureaucrat`)
- sign/execute 가능한 문서 모델(`Form` / `AForm`)
- 구체 폼 구현체
- `Intern` factory
를 통해 **예외 기반 제어 흐름과 추상화**를 같이 다룬다.

## 로컬 repo에서 확인한 구성

README 기준 구조:
- `ex00` — Bureaucrat basics
- `ex01` — Forms and signing
- `ex02` — Concrete forms
- `ex03` — Intern-based form factory

실제 코드에서도 이 progression이 보인다.
- `Bureaucrat.hpp`에 중첩 exception class
- `Form.hpp` / `AForm.hpp`에 sign / exec grade와 예외
- `ShrubberyCreationForm`, `RobotomyRequestForm`, `PresidentialPardonForm`
- `Intern.cpp`에서 이름 기반 form 생성

## 코드에서 드러난 설계 포인트

### 1. 예외가 API의 일부다
`GradeTooHighException`, `GradeTooLowException`, `NotSignedException`, `FormNotFoundException`처럼 예외 타입이 클래스 모델 안에 들어와 있다. 즉 잘못된 흐름을 에러 코드가 아니라 **타입화된 예외**로 처리한다.

### 2. ex01 → ex03으로 갈수록 책임이 분화된다
처음엔 Bureaucrat 혼자였다가, Form/AForm과 concrete form, 마지막엔 Intern factory까지 생긴다. 객체들 사이 협력이 설계의 핵심이다.

### 3. `Intern`은 작은 factory 실험이다
`ex03/main.cpp`를 보면 문자열로 form 이름을 받아 적절한 form을 만든다. 이건 단순 if/else가 아니라, 이후 더 큰 객체 생성 문제를 연습하는 축소판처럼 보인다.

## 어려웠을 지점

### 1. sign과 execute 권한을 분리해야 한다
단순히 “권한이 있다/없다”보다, 서명 가능 등급과 실행 가능 등급이 다르다.

### 2. 예외가 퍼지는 경로를 신경 써야 한다
생성자, sign, execute, factory 생성 실패 등 여러 지점에서 예외가 나올 수 있어서 main/test 코드도 같이 정리돼야 한다.

### 3. 추상 클래스와 구체 구현체가 늘어난다
`AForm` 아래 concrete forms가 늘어나면서, 코드 중복과 인터페이스 일관성을 동시에 챙겨야 한다.

## 정리

`cpp module 05`는 C++ 문법 연습을 넘어, **권한 모델 / 추상 클래스 / 예외 / factory 패턴의 아주 작은 실습장**처럼 보인다. 이후 더 큰 객체지향 설계로 넘어가기 전 감각을 익히기에 좋은 단계다.

## 링크
- repository: [justini0715/cpp-module-05](https://github.com/justini0715/cpp-module-05)
