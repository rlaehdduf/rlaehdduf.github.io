---
title: Cookie Clicker
type: web
description: Next.js + Prisma + Neon 쿠키클리커. Vercel 배포, PostgreSQL 세션 저장, 자동 생산 업그레이드.
image: /images/cookie-clicker.png
technologies:
  - Next.js 16
  - TypeScript
  - Prisma
  - Neon (PostgreSQL)
  - Vercel
github: https://github.com/kongnamul-muchim/CookieClicker
demo: https://cookie-clicker-rosy-xi.vercel.app
featured: false
devPeriod: "2026-03-30 ~ 2026-03-31"
---

## 게임 개요

Next.js + Prisma + Neon 기반으로 재구축된 쿠키클리커 인크리멘털 게임입니다.

### 주요 기능

| 기능 | 설명 |
|------|------|
| **쿠키 클릭** | 클릭당 쿠키 획득 |
| **업그레이드** | 자동 생산 건물 구매 |
| **스킬 트리** | 능력 강화 시스템 |
| **세션 저장** | PostgreSQL 기반 영구 저장 |
| **프레스티지** | 초기화 후 영구 보너스 획득 |

### 아키텍처

```
src/
├── app/api/         # Next.js API Routes
├── config/          # 게임 설정 (업그레이드, 스킬)
├── lib/             # Prisma, 서비스 계층
└── public/          # 프론트엔드 정적 파일
```

### 기술 스택

- **Next.js 16**: App Router, API Routes
- **TypeScript**: 타입 안전성
- **Prisma ORM**: 타입세이프 DB 접근
- **Neon (PostgreSQL)**: 서버리스 DB
- **Vercel**: 자동 배포

### 실행 방법

```bash
npm install
npx prisma generate
npm run dev  # http://localhost:3000
```