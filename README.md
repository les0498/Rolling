# 'Rolling' 프로젝트 
> 개발 기간: 25.07.10 ~ 25.07.25

> 친구, 동료에게 직접 전하지 못한 말을 글로 남기고 공유할 수 있는 감성 웹 서비스입니다. <br>
단순 메시지 작성 그 이상의 경험을 제공하며, 사용자 친화적인 UI와 직관적인 흐름으로 구성되어 있습니다.
<br>

## [👉 `<Rolling>` 배포 링크 바로가기](https://rolling-vert.vercel.app/)


 <a href="https://rolling-g4r9ru4gx-suhyungs-projects.vercel.app/">
  <img width="1253" height="736" alt="image" src="https://github.com/user-attachments/assets/c64d529e-df9d-4654-9e26-f37f23c7381f" />
</a>


# 🚀 프로젝트 목표
- React 기반의 SPA 아키텍처 구조 이해 및 실습 <br>
→ 라우팅 구성, 컴포넌트 설계, 상태 전이 흐름 등 전체 흐름을 설계하고 구현함

- 사용자 중심 UX 흐름 설계 <br>
→ 단순한 CRUD를 넘어서 실제 유저 사용 시나리오에 맞는 페이지 흐름 구현

- SCSS 기반 스타일 구성 및 생산성 향상 시도 <br>
→ CSS Module + classnames + SCSS 함수를 조합하여 스타일 재사용성과 유지보수성 고려

- 협업 중심 프로젝트 관리 경험 <br>
→ Git 브랜치 전략, 코드 스타일 규칙, 커밋 컨벤션, PR 리뷰 등을 통해 협업 경험 체득
<br>

# 🙋🏻 팀원 소개
<div align="center">
<table><tr>
  <td>
    <img src="https://github.com/Ospac.png?size=150" width="150px" />
  </td>
  <td>
    <img src="https://github.com/les0498.png?size=150" width="150px" />
  </td>
  <td>
    <img src="https://github.com/josubeen.png?size=150" width="150px" />
  </td>
  <td>
    <img src="https://github.com/Jiii-Eun.png?size=150" width="150px" />
  </td>
</tr>
<tr>
  <td align="center">
    <b>팀장</b><br />
    <a href="https://github.com/Ospac">권수형</a>
  </td>
  <td align="center">
    <a href="https://github.com/les0498">이은서</a>
  </td>
  <td align="center">
    <a href="https://github.com/josubeen">조수빈</a>
  </td>
  <td align="center">
    <a href="https://github.com/Jiii-Eun">최지은</a>
  </td>
</tr>
</table>
<sub><b>※ 참고</b> : 본 프로젝트는 초기 5인 팀으로 구성되었으나, 한 명은 메인 페이지 UI 개발 이후 이탈하여 최종적으로는 4인이 진행했습니다. </sub>

</div>
</div>
<br>

# 📦 기술 스택
<div align="center">
🧩 <b>Frontend & Code Quality</b><br/><br/>
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" /> <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" /> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" /> <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white" /> <br> <img src="https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white" /> <img src="https://img.shields.io/badge/CSS--Modules-000000?style=for-the-badge&logo=css3&logoColor=white" /> <img src="https://img.shields.io/badge/classnames-222222?style=for-the-badge&logo=javascript&logoColor=white" /> <br> <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white" /> <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black" />
<br><br>

🔌 <b>API & Util</b><br/><br/>
<img src="https://img.shields.io/badge/Intersection_Observer-000000?style=for-the-badge&logo=webcomponents.org&logoColor=white" /> <img src="https://img.shields.io/badge/Framer_Motion-EF008F?style=for-the-badge&logo=framer&logoColor=white" /> <br> <img src="https://img.shields.io/badge/Emoji_Picker_React-FFCC00?style=for-the-badge&logo=twemoji&logoColor=black" /> <img src="https://img.shields.io/badge/tiptap-8E44AD?style=for-the-badge&logo=tiptap&logoColor=white" /> <img src="https://img.shields.io/badge/cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white" />
<br><br>

☁️ <b>Version Control & Deployment</b><br/><br/>
<img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" /> <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" /> <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" /> </div>
<br>

# 🧭 주요 기능 

#### 🏠 메인 페이지 (`/`)

* `구경해보기` 버튼 클릭 → **롤링페이퍼 리스트 페이지**(`/list`)로 이동
* `롤링페이퍼 만들기` 버튼 클릭 → **롤링페이퍼 생성 페이지**(`/post`)로 이동



#### 📄 롤링페이퍼 리스트 (`/list`)

* **인기 롤링페이퍼 / 최신 롤링페이퍼** 리스트 조회 (`GET`)
* `나도 만들어보기` 버튼 클릭 → **롤링페이퍼 생성 페이지**(`/post`)로 이동
* 페이퍼 카드 클릭 → 해당 **상세 페이지**(`/post/{id}`)로 이동



#### 📝 롤링페이퍼 만들기 (`/post`)

* 선택 가능한 **배경 컬러 / 이미지 목록** 조회 (`GET`)
* **수신자 이름(To.) + 배경 선택** 후 `생성하기` 버튼 클릭
  → **롤링페이퍼 상세 페이지**(`/post/{id}`)로 이동 (`POST`)



#### 🎁 롤링페이퍼 상세 (`/post/{id}`)

* 해당 대상에게 남긴 **메시지 리스트 조회** (`GET`)
* `+` 버튼 클릭 → **메시지 작성 페이지**(`/post/{id}/message`)로 이동
* 메시지 카드 클릭 → **모달로 메시지 내용 상세 확인**
* 🙂 이모지 추가 버튼 클릭 → **이모지 선택 후 추가** (`POST`)
* 공유 기능

  * `카카오톡 공유` → 카카오 로그인 새 탭 오픈
  * `URL 공유` → 현재 페이지 주소 복사
* 수정 모드 진입 (`수정하기` 버튼 클릭)

  * 메시지 카드 내 `삭제 버튼 클릭` → 메시지 삭제 (`DELETE`)
  * 메시지 카드 클릭 → **수정 모달** 표시 → 수정 후 저장 (`PATCH`)



#### 💌 메시지 보내기 (`/post/{id}/message`)

* 작성자 이름, 이미지, 메시지 등 입력 → `등록` 클릭
  → **롤링페이퍼 상세 페이지**로 이동 및 메시지 전달 (`POST`)

<br>

## ⚠️ 예외 처리

| 예외 상황 | 처리 방식 |
|-----------|-----------|
| 존재하지 않는 URL 접근 | 404 페이지 또는 토스트 출력 |
| 메시지 작성 미완성 | 전송 버튼 비활성화 (유효성 검사) |

<br>
 

## 🗂 프로젝트 폴더 구조 (Colocation 기반 설계)

## 💡 설계 포인트

- 📌 **Colocation 방식 적용**  
  각 페이지에서 사용하는 컴포넌트, 스타일, 상수를 해당 폴더에 함께 배치  
- 📌 **SCSS Module + classnames 조합**  
  컴포넌트 단위 캡슐화된 스타일 관리

```
📦 src
├── 📁 apis
│   └─ API 통신 모듈 
│
├── 📁 assets
│   └─ 이미지, 폰트 등 정적 자원
│
├── 📁 components
│   ├── 📁 layout         # Header 등 공통 레이아웃 컴포넌트
│   ├── 📁 PostNav        # Post 페이지 전용 내비게이션 컴포넌트
│   └── 📁 ui             # 버튼, 카드, 모달 등 공용 UI 요소
│
├── 📁 hooks
│   └─ 커스텀 훅 모음 (예: useAsync 등)
│
├── 📁 layouts
│   └─ 전체 페이지 공통 레이아웃 
│
├── 📁 pages              # 라우팅 기준 페이지, Colocation 방식 구성
│   ├── 📁 Home           # 메인 페이지
│   ├── 📁 List           # 롤링페이퍼 리스트 
│   ├── 📁 Message        # 메시지 작성 페이지
│   ├── 📁 PostCreate     # 롤링페이퍼 생성
│   ├── 📁 PostDetail     # 생성된 롤링페이퍼 상세 (무한스크롤 적용)
│   ├── 📁 PostEdit       # 메시지 수정/삭제
│   └── 📁 NotFound       # 404 페이지
│    └── *.module.scss  # 컴포넌트별 스타일 파일
├── 📁 styles
│   └─ 전역 스타일 변수, reset, SCSS mixins 등
│
├── Main.jsx                 # React 앱 진입점 및 라우팅 정의
└── index.html               # 정적 HTML 템플릿
```
