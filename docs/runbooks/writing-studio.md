# Writing Studio Runbook

## 목적
`/studio`는 이 사이트의 블로그 글을 더 쉽게 쓰기 위한 개인용 UI입니다.

핵심 원칙:
- 백엔드 없음
- 인증 없음
- GitHub Pages 유지
- 실제 소스는 계속 `src/content/blog/*.md`

즉, CMS로 구조를 바꾸는 게 아니라 **Markdown 글쓰기 경험만 단순화**하는 도구입니다.

## 공개 배포에서의 동작
- `justini0715.github.io/studio`에서는 실제 편집 UI를 노출하지 않습니다.
- 배포본에서는 **로컬 전용 도구 안내 화면**만 보입니다.
- 실제 editor는 `npm run dev`의 `localhost`에서만 활성화됩니다.
- 즉, `npm run build` + `npm run preview` 결과물과 실제 배포본에는 editor bundle이 포함되지 않습니다.
- 또한 `/studio`는 sitemap에서 제외되고 `noindex` 처리됩니다.

## 가장 잘 동작하는 환경
- Chrome / Edge / Brave 데스크톱
- 로컬 레포 폴더 접근 권한 허용 가능

## 약한 환경
- Safari
- Firefox
- 모바일 브라우저

이 환경에서는 폴더 직접 저장이 제한될 수 있으므로 Markdown 다운로드 위주로 사용합니다.

## 사용 순서
1. 사이트 로컬 실행
   ```bash
   npm run dev
   ```
2. 터미널에 출력된 localhost 주소 뒤에 `/studio` 접속
3. 필요할 때만 `글 목록`, `미리보기`, `공개 설정` 패널 열기
4. `justini0715.github.io` 레포 루트 또는 `src/content/blog` 폴더 선택
5. 글 목록은 필요할 때만 열고, 제목/설명/본문부터 작성
6. 공개 설정에서 `공개` 또는 `비공개` 선택
7. `저장` 클릭 (저장 전 상태는 상단에 `임시저장`으로 표시)
8. 마지막으로 git 작업
   ```bash
   git add .
   git commit -m "add blog post"
   git push
   ```

## 지원 기능
- 새 기술 글 생성
- 새 42 글 생성
- 기존 글 불러오기
- 수정 후 저장
- Markdown 다운로드
- 현재 글 복제
- soft delete (비공개 전환)
- hard delete (실제 파일 삭제)
- 태그 추천 / 재사용
- 시리즈 프리셋 적용
- velog 스타일에 가까운 글쓰기 중심 레이아웃
- 제목/설명/본문 우선 편집 + 설정 분리
- `공개 / 비공개 / 임시저장` 중심 상태 표현
- Markdown 퀵 삽입 버튼(H2, 리스트, 코드블록 등)
- 집중 모드
- 글 목록 / 미리보기 / 공개 설정 패널을 필요할 때만 열기

## 태그 관리 범위
현재 버전에서 가능한 것:
- 기존 글들에서 쓰는 태그 자동 수집
- 현재 카테고리에서 자주 쓰는 태그 추천
- 현재 글에 태그 추가 / 제거
- 기존 태그 재사용
- 중복 태그 방지

현재 버전에서 아직 없는 것:
- 모든 글에 대해 태그 일괄 rename
- 모든 글에 대해 태그 일괄 삭제

## 주의점
- `/studio`는 검색 노출용 페이지가 아닙니다.
- 이 UI는 GitHub 원격 저장소에 직접 commit/push하지 않습니다.
- 저장 후에도 최종 반영은 git commit / push가 필요합니다.
- 배포된 사이트에서도 열 수는 있지만, 실제 용도는 개인 로컬 작성 환경입니다.
