---
title: "42 - cpp modules 00-04"
description: "클래스 기초부터 canonical form, 상속, 다형성까지 이어지는 C++ Modules 00-04 아카이브 정리."
pubDate: 2026-03-13
category: "42"
tags: ["42", "cpp", "oop", "cpp-modules"]
series: "42-circle-4"
seriesTitle: "Circle 4"
seriesOrder: 2
difficulty: "객체지향 기초부터 다형성까지"
featured: false
draft: false
---

# 42 - cpp modules 00-04

## 이 문서를 왜 묶어서 쓰나

로컬 경로: `/home/iostream/Desktop/42-repo-workspace/cpp_module`

이 repo는 `cpp-00`부터 `cpp-04`까지를 한 저장소에 모아둔다. 각 exercise는 독립적이지만, 실제로는 **객체지향 기초에서 다형성까지 단계적으로 올라가는 흐름**이라 묶어서 보는 편이 더 자연스럽다.

## 로컬 repo에서 확인한 구조

- `cpp-00/ex00~ex02`
- `cpp-01/ex00~ex06`
- `cpp-02/ex00~ex03`
- `cpp-03/ex00~ex02`
- `cpp-04/ex00~ex02`
- `docs/subject/cpp-module-00.pdf` ~ `cpp-module-04.pdf`

README도 각 exercise가 **원래 Makefile을 유지한 self-contained 단위**라고 설명한다.

## 코드와 주석에서 보이는 progression

### cpp-00: 클래스와 간단한 상태 모델링
`PhoneBook`, `Contact`, `Account` 같은 파일 구성이 보인다. 즉 C 스타일 절차형 과제에서 객체 중심 구조로 넘어가는 첫 단계다.

### cpp-01: 메모리와 참조 개념
`Zombie`, `Weapon`, `HumanA/HumanB`, `Harl` 같은 예제로 heap/stack, reference/pointer 차이를 계속 훈련한다.

### cpp-02: canonical form과 고정소수점
`Fixed.hpp` 계열 클래스들이 보이고, 연산자/복사/정밀도 감각을 직접 다뤄야 한다.

### cpp-03: 상속 구조
`ClapTrap`, `ScavTrap`, `FragTrap` 주석에서 virtual 소멸자와 재정의 의도가 드러난다. 단순 클래스 작성에서 inheritance model로 넘어간다.

### cpp-04: 다형성과 abstract class
`Animal`, `Dog`, `Cat`, `WrongAnimal`, `WrongCat`, `Brain` 구조가 있고, 주석에 virtual 키워드 유무가 동적 바인딩에 어떤 차이를 만드는지 직접 적혀 있다.

## 이 묶음의 핵심 tradeoff

### 1. exercise가 분리돼 있어 반복이 많다
각 폴더가 독립 Makefile을 유지하기 때문에 학습엔 좋지만, repo 단위에선 중복이 많다.

### 2. 언어 개념이 단계적으로 쌓인다
각 exercise를 따로 보면 조각나 보이지만, 전체를 보면 C 스타일 사고에서 C++ 스타일 사고로 천천히 이동하는 흐름이 보인다.

### 3. 주석이 개념 학습 흔적을 남긴다
특히 cpp-03, cpp-04 쪽은 virtual, destructor, dynamic binding에 대한 주석이 남아 있어서 단순 제출본보다 학습 흔적이 더 잘 보인다.

## 정리

이 repo는 하나의 프로젝트라기보다, **C++ 개념 학습 로그를 exercise 단위로 쌓은 아카이브**에 가깝다. 그래서 분석할 때도 exercise별 정답보다, 어떤 개념이 어디서 처음 등장하는지를 보는 편이 더 중요하다.

## 링크
- repository: [justini0715/cpp_module](https://github.com/justini0715/cpp_module)
