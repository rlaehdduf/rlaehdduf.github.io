---
title: ShotFire
type: unity
description: Top-Down 2D Stealth-Action Shooter. 시야/소음 기반 잠입 시스템, Behavior Tree AI, 4종 무기, 절차적 맵 생성.
image: /images/shotfire.png
technologies:
  - Unity 6
  - C#
  - DI Container
  - Behavior Tree
  - Procedural Generation
  - URP 2D
github: https://github.com/kongnamul-muchim/ShotFire
demo: https://kongnamul-muchim.github.io/ShotFire
featured: true
devPeriod: "2026-05-08 ~ 2026-05-12"
---

## 게임 개요

Unity 6 엔진으로 개발한 탑다운 2D 스텔스 액션 슈터입니다. 순수 C# 코어 로직과 Unity View 레이어를 분리한 클린 아키텍처가 특징입니다.

### 주요 시스템

| 시스템 | 설명 |
|--------|------|
| **잠입 시스템** | 시야 콘 기반 탐지, 소음 시스템, 앉기/서기 자세별 시인성 |
| **Behavior Tree AI** | Guard(순찰/추격/사격), Heavy(고정 방어), 팀 협동 경보 시스템 |
| **4종 무기** | Pistol, SMG, Shotgun, Rifle (현장 습득, 탄약 소진 시 자동 드랍) |
| **절차적 맵 생성** | 방-복도 기반 랜덤 맵 생성, ShadowCaster 2D 동적 할당 |
| **Fog of War** | 글로벌 라이트 0, 플레이어 중심 포인트 라이트, Occclusion Culling |

### 아키텍처

```
Assets/
├── Core/                    # 순수 C# (UnityEngine 참조 금지)
│   ├── Interfaces/          # 모든 서비스 인터페이스
│   ├── Managers/            # DI Container, GameStateMachine
│   ├── Entities/            # Player, Enemy, Entity 베이스
│   ├── Player/              # PlayerController, WeaponInventory
│   ├── Stealth/             # VisionSystem, NoiseSystem, DetectionLevel
│   ├── Combat/              # CombatSystem, WeaponBase, 4종 무기
│   ├── AI/                  # TeamCoordinator
│   └── Level/               # MapDataProvider, MapGenerator, GridPathfinder
├── Unity/                   # Unity 종속 어댑터
│   ├── Adapters/            # Input, Physics, Renderer, Audio
│   └── UI/                  # HUD, MissionCompleteScreen
```

### 기술 특징

- **DI 컨테이너 직접 구현**: Singleton/Scoped/Transient 지원, 생성자 주입
- **SOLID 원칙 준수**: Core 레이어와 Unity 레이어 완전 분리
- **Behavior Tree 직접 구현**: Sequence/Selector/Parallel/Priority, Decorator, Condition/Action 노드
- **A* Pathfinding**: Grid 기반 8방향 A* 경로 탐색
- **WebGL 빌드**: 브라우저에서 플레이 가능

### 적 AI 행동 트리

```
Guard BT:
Selector
├── Combat (HasTarget → Shoot/Chase/Search)
├── BodyInvestigate (시체 발견 → 경보)
├── NoiseInvestigate (소음 감지 → 조사)
└── Patrol (기본 순찰)
```

### 조작법

- **WASD**: 이동
- **마우스**: 조준
- **좌클릭**: 사격
- **C / Left Ctrl**: 앉기
- **E**: 상호작용 (무기 줍기)
- **1~4**: 무기 전환
