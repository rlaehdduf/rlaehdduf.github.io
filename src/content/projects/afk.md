---
title: AFK Idle RPG
type: unity
description: Unity 6 방치형 RPG. 자동 전투, 스테이지 진행, 장비 합성, 환생, 오프라인 보상 시스템. DI 컨테이너 및 SOLID 원칙 적용.
image: /images/afk.png
technologies:
  - Unity 6
  - C#
  - DI Container
  - SOLID Principles
  - Event-driven Architecture
  - CSV Data Pipeline
github: https://github.com/kongnamul-muchim/AFK
featured: true
devPeriod: "2026-03-27 ~ 2026-05-07"
---

## 게임 개요

Unity 6 엔진으로 개발한 2D 방치형 RPG 게임입니다. 캐릭터가 자동으로 탑을 오르며 몬스터와 전투하고, 장비를 수집/합성하여 성장하는 Idle 장르의 핵심 경험을 구현했습니다. 웹 버전과 Unity 버전을 동시에 개발하여 크로스 플랫폼 아키텍처를 검증했습니다.

### 주요 시스템

| 시스템 | 설명 |
|--------|------|
| **자동 전투** | 페이즈 기반 전투 시스템 (이동 → 조우 → 전투 → 처치 → 이동) |
| **스테이지 진행** | 점진적 난이도 상승, 보스 클리어 시 보석 보상 |
| **장비 시스템** | 4종 장비 (무기/갑옷/신발/장신구), 5단계 희귀도, 합성 시스템 |
| **환생 (Rebirth)** | 스탯/레벨 초기화 + 영구 보너스, 반복 플레이 동기 부여 |
| **오프라인 보상** | 오프라인 시간 비례 자원 획득 |
| **미션 시스템** | 일일/주간 미션 자동 진행 및 보상 |
| **도감 시스템** | 획득한 아이템 영구 기록, 컬렉션 요소 |
| **튜토리얼** | 단계별 게임 가이드 |

### 아키텍처

```
Assets/Scripts/
├── Core/           # GameState, EventBus, SaveManager, GameConfig
├── DI/             # DI 컨테이너 (IDIContainer, DIContainer)
├── Systems/        # CombatSystem, StageSystem, InventorySystem, MissionSystem
├── UI/             # UIManager, Views, Controllers
├── Audio/          # 사운드 관리 시스템
├── DataModels/     # PlayerData, StageData, InventoryData
├── Interfaces/     # 추상화 인터페이스 (IEventBus, IGameState, ILogger)
├── Effects/        # 아이템 드롭 이펙트
└── Rendering/      # UI 게임 렌더러
```

### 기술 특징

- **DI 컨테이너 직접 구현**: `ServiceLocator` → `DIContainer` 마이그레이션 (Singleton/Transient/Scoped 지원)
- **SOLID 원칙 준수**: 단일 책임, 개방-폐쇄, 의존 역전 원칙 적용
- **이벤트 기반 아키텍처**: EventBus로 시스템 간 결합도 최소화
- **CSV 데이터 파이프라인**: Excel → CSV → 게임 데이터 (아이템 45종, 몬스터, 스테이지)
- **Web/Unity 동시 개발**: 게임 로직 순수 C# + Unity View 레이어 분리
- **JSON 직렬화**: 게임 상태 저장/로드 (자동 저장 5초 간격)

### 구현된 기능

- 자동 공격 루프 → 페이즈 기반 전투 시스템
- 3프레임 공격 애니메이션 (attackSpeed 비례)
- 스테이지별 몬스터 스탯 증가 (10%/stage)
- 장비 합성 (5개 → 다음 등급 1개)
- 드롭 테이블 (희귀도별 확률)
- 보석 업그레이드 (오프라인 보상/크리티컬/자동 전투)
- 통계 트래커 (플레이 시간, 킬 수, 골드 획득량 등)
- 오디오/사운드 시스템
- 게임 오브젝트 풀링
