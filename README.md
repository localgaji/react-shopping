<details>

배포 URL : https://user-app.krampoline.com/k81b1046ae592a

<summary>Step-2.-Week-1</summary>
<div>
  
## 카카오 테크 캠퍼스 2단계 - FE - 1주차 클론 과제

</br>

## **과제명**

```
1. 쇼핑몰 웹사이트 탐색을 통한 페이지 구성
2. UI 컴포넌트의 명칭과 사용법 익히기
```

</br>

## **과제 설명**

✅**과제 1.**

```
쇼핑몰 웹사이트를 탐색해 어떠한 페이지 구성을 가지고 있는지 체크합니다.
대부분의 쇼핑몰은 다음의 페이지 구성을 가지고 있습니다.

- 메인 페이지
- 상품 검색 결과 페이지
- 개별 상품 상세 페이지
- 주문 목록 페이지
- 결제 페이지
- 결제 완료 페이지
- 장바구니 페이지
- ...

이와 같이 위의 서비스가 동작하는데 필수적인 페이지가 무엇이 있고, 해당 페이지에서 어떠한 기능이 구현되어야 하는지 작성하세요.
그리고 어떠한 디렉터리 구조로 프로젝트를 진행할지 작성해주세요. (README.md 파일에 작성)
```

```
README.md의 예시 형식입니다. 아래를 참고해 작성해주세요.
각 페이지마다 핵심 기능, 기능 상세 설명, 인터페이스 요구사항이 어떤 것이 있을지 고민해서 작성해주세요.

###예시

#페이지별 구성
1. 로그인 페이지
- 핵심 기능: 로그인 요청 및 사용자 로그인 정보 저장
- 기능 상세 설명: 이메일과 비밀번호를 이용해 로그인을 진행하고, 이에 대한 상태 처리를 합니다.
- 인터페이스 요구사항: 이메일 또는 비밀번호에 들어온 값이 적합하지 않은 경우 적절한 알림을 보냅니다.
-- ...

#디렉터리 구조
- public
- src
- components
- hooks
- routes
- styles
- dto
- ...
```

</br>

✅**과제 2.**

```
프론트 개발자가 다른 프론트 개발자와 소통 및 UI 디자이너와 소통하는데 필수적인 UI 컴포넌트의 명칭과 사용법을 익힙니다.
수업시간에 배운 컴포넌트의 명칭과 사용법 이외에 대표적인 UI 라이브러리 홈페이지를 조사해보면 수많은 컴포넌트가 어떤식으로 동작하는지 확인할 수 있습니다.
리액트 프로젝트를 생성하고, 토스트, 브래드크럼, 캐러셀, 라디오버튼, 토글버튼, 체크리스트를 UI 라이브러리가 아닌 자신만의 방식으로 스타일링하고 상태 관리를 적용해 코드를 작성하세요.
작성된 코드는 레퍼지토리에 업로드하여 멘토님에게 전달해주세요.
```

</br>

✅**과제 3.**

```
각 컴포넌트를 시현해 볼 수 있는 페이지를 만드세요.
하나의 페이지에 모든 컴포넌트를 둬도 좋고, 각 페이지별로 분리해도 괜찮습니다.
```

</br>

## **과제 상세 : 수강생들이 과제를 진행할 때, 유념해야할 것**

```
1. README.md 파일은 동료 개발자에게 프로젝트에 쉽게 랜딩하도록 돕는 중요한 소통 수단입니다.
해당 프로젝트에 대해 아무런 지식이 없는 동료들에게 설명하는 것처럼 쉽고, 간결하게 작성해주세요.

2. 좋은 개발자는 디자이너, 기획자, 마케터 등 여러 포지션에 있는 분들과 소통을 잘합니다.
UI 컴포넌트의 명칭과 이를 구현하는 능력은 필수적인 커뮤니케이션 스킬이자 필요사항이니 어떤 상황에서 해당 컴포넌트를 사용하면 좋을지 고민하며 코드를 작성해보세요.
```

</br>

## **코드리뷰 관련: PR시, 아래 내용을 포함하여 코멘트 남겨주세요.**

**1. PR 제목과 내용을 아래와 같이 작성 해주세요.**

> - PR 제목 : 부산대FE\_라이언\_1주차 과제

</br>

</div>
</details>

---

<details>
<summary>🎈 1주차 과제</summary>
<div>
<br/>

### 과제1 : README.md 작성

- **메인 페이지**

  - 핵심 기능
    - 사이트 주요 메뉴 및 프로모션 내용을 모아보기
  - 기능 상세 설명
    - 딜 상품 목록, 이벤트에 관한 데이터를 요청해서 반응형으로 출력
    - 전체 카테고리 목록 출력
  - 인터페이스 요구사항
    - 이벤트 배너 : 특정 기간마다 가로로 자동 스크롤
    - 딜 상품 목록 : 상품 이미지, 가격, 구매자수, 공유버튼, 찜버튼
    - 추천 상품 및 이벤트 안내 : 사이드 영역
    - 전체 카테고리 목록 : 상품목록 하단 영역

<br/>

- **상품 검색 결과 페이지**

  - 핵심 기능
    - 검색 결과를 보여줌
  - 기능 상세 설명
    - 검색 결과 상품 목록 / 연관 검색어 데이터를 요청해서 출력
    - 사용자 입력에 맞게 상품목록 정렬, 필터링
  - 인터페이스 요구사항
    - 검색 결과에 해당하는 상품 목록 : 2행으로 노출
    - 연관 검색어 추천
    - 상품명으로 검색 / 스토어 명으로 검색
    - 필터 : 톡딜상품 / 배송비 유무 / 가격대 / 카테고리 / 상품유형
    - 정렬 : 랭킹순, 신상품순, 낮은 가격순, 높은 가격순

<br/>

- **상품 검색 페이지**
  - 핵심 기능
    - 검색 창, 검색에 필요한 정보 제공
  - 기능 상세 설명
    - 검색 창의 입력내용이 변할 때마다 자동완성 목록을 업데이트하여 출력
  - 인터페이스 요구사항
    - 검색어 입력 전 : 최근 검색 내역, 인기 키워드, 카테고리 출력
    - 검색어 입력 시 : 자동완성 검색어 추천

<br/>

- **개별 상품 상세 페이지**
  - 핵심 기능
    - 상품 정보를 알려줌
    - 옵션 선택 및 구매하기
  - 기능 상세 설명
    - 상품 ID로 데이터 조회해서 출력
    - 상품 옵션 입력받아서 상태 관리
    - 계산된 총 주문금액 값을 받아와서 출력
  - 인터페이스 요구사항
    - 상품 정보
      - 제목, 가격, 상품 상세 사진, 리뷰수
      - 연관 추천 상품
      - 상세정보 이미지
      - 상품 정보 / 고시 정보/ 반품 안내 / 주의사항 고지 (팝업으로 안내)
      - 같은 스토어의 인기상품
      - 해당 카테고리 내 인기상품
    - 옵션 선택
      - 옵션명 및 가격
      - 배송방법 및 배송비 안내
      - 선택한 옵션의 총 주문금액 계산하여 노출
    - 구매
      - 찜버튼, 장바구니, 결제하기 버튼
    - 리뷰
      - 상품 만족도 요약
      - 사진 리뷰 모아보기
      - 개별 리뷰 목록
        - 별점, 프로필, 구매한 옵션, 사진, 리뷰
        - 해당 리뷰에 대한 공유 및 평가 버튼
    - 문의
      - 문의하기 버튼
      - 전체 문의 목록 (비밀글은 비밀처리)

<br/>

- **결제 페이지**
  - 핵심 기능
    - 배송지 지정하고 결제수단 선택하여 결제하기
  - 기능 상세 설명
    - 넘어온 구매목록 출력
    - 회원정보의 기본주소, 연락처 요청하여 출력
    - 배송 / 주문 / 결제 정보 입력받고 상태관리
  - 인터페이스 요구사항
    - 배송지 정보
      - kakao 계정에 저장된 기본 배송지를 출력
      - 배송 요청사항 입력받기
    - 주문 상품 정보 목록
      - 각 상품의 이름, 옵션, 가격
    - 결제금액
      - 상품 금액, 배송비, 할인 금액 안내
      - 포인트 사용 입력받기
      - 총 결제금액 계산하여 안내
    - 결제수단 선택
      - 카카오 페이, 기타 결제 (카드/휴대폰/무통장)
      - 현금영수증 발급신청
      - 약관 동의 및 법적 고지 (체크박스)

<br/>

- **로그인 페이지**
  - 핵심 기능
    - 로그인 요청, 사용자 로그인 정보 저장
  - 기능 상세 설명
    - ID / 비밀번호 입력받아 정보 전송, 로그인 여부 확인
  - 인터페이스 요구사항
    - 로그인 정보에 문제 있을 경우 알림 출력
    - 로그인 성공 시, 로그인 페이지 바로 전 페이지로 이동

<br/>

- **회원가입 페이지**
  - 핵심 기능
    - 회원가입
  - 기능 상세 설명
    - 회원정보 입력받아 정보 저장 : ID, 비밀번호, 이름, 연락처, 주소
    - ID 중복 여부, 비밀번호 유효성 확인
  - 인터페이스 요구사항
    - 입력된 회원 정보에 문제 있을 경우 텍스트 출력
    - 회원가입 성공 시 로그인 페이지로 이동

<br/>

- **장바구니 페이지**
  - 핵심 기능
    - 장바구니에 담긴 상품을 조회, 변경, 구매
  - 기능 상세 설명
    - 장바구니에 담긴 상품 목록 출력, 수량 변경
    - 선택된 상품들의 총 결제금액을 요청하여 출력
  - 인터페이스 요구사항
    - 체크박스로 해당 상품 구매여부 선택
    - `+ -` 버튼으로 수량 조절
    - 구매하기 버튼 클릭 시 결제하기로 이동

#### 디렉토리 구조

```
📂 public
	┗ 📄 index.html
📂 src
	┣ 📂 apis
	┣ 📂 assets
	┣ 📂 components
	┣ 📂 states
	┣ 📂 styles
	┣ 📂 hooks
	┣ 📂 pages
	┣ 📂 utils
	┣ 📄 App.js
	┗ 📄 index.js
```

---

### 과제2 : 컴포넌트 만들기

`useStates` 이용하여 상태 관리

1. 토스트
   - 버튼 스타일, 버튼 내용, 토스트 메세지를 인수로 받아서, 버튼을 클릭하면 토스트 팝업 생성
   - 토스트 클릭 시 사라짐
   - `setTimeout` : 3초 지나면 사라지게
2. 브레드크럼
   - React Router 이용해서 url 생성
3. 캐러셀
   - `useStatus` : 페이지 상태 관리
   - `setTimeout` : 일정 초마다 옆으로 자동 스크롤
   - `useRef` : 페이지 조작 시 자동 스크롤 멈추게 하기
4. 토글
   - on/off 여부를 상태 `on`에 저장
5. 체크리스트
   - 품목별 체크 상태를 객체 `list`로 관리, 체크된 품목만 하단에 출력
   - 클릭 이벤트 발생 시 : 객체 속 해당 품목의 `buy` 값을 toggle
6. 라디오버튼
   - 클릭 이벤트 발생 시 : 선택한 항목 값을 상태 `select`에 저장
   - `select` 값과 일치하지 않는 항목은 체크 해제
     - `<input checked={select===val} / >`

---

### 과제3 : 페이지에 구현

0. 상단 : 브레드크럼
1. 메인 페이지 : 캐러셀, 토스트, 토글
2. 장바구니 페이지 : 체크리스트 (버튼 클릭시 토스트)
3. 결제 페이지 : 라디오 버튼

</div>
</details>

---

<details>
<summary>Step-2.-Week-2</summary>
<div>

## 카카오 테크 캠퍼스 2단계 - FE - 2주차 클론 과제

</br>

## **과제명**

```
1. 코드 디자인 패턴과 상태 관리
```

</br>

## **과제 설명**

✅**과제 1. 아토믹 컴포넌트 디자인 패턴 사용**

```
- 회원가입, 로그인 페이지 개발에 필요한 컴포넌트를 아토믹 디자인 패턴을 사용해 작성하세요.
- 작성한 컴포넌트는 사용의 편의성을 위해 Props에 적절한 주석을 달아주세요.
```

</br>

✅**과제 2. 회원 가입, 로그인 페이지 개발**

```
- 백엔드 API 문서를 참고하여 회원가입, 로그인 페이지를 개발하세요.
- 각 페이지에는 적합한 값이 입력되도록 하고, 적절하지 않은 값이 들어온 경우 API 요청을 보내기 전에 프론트에서 에러 캐칭을 해주세요.
- 회원가입, 로그인 후에는 메인 페이지로 리다이렉트하세요.
- API 응답 과정에서 로그인이 실패하는 경우, 회원가입이 실패한 경우에 대해서 에러 캐칭도 적용해야 합니다.
```

</br>

✅**과제 3. 상태관리 모듈 적용**

```
- 로그인 후에 사용자의 정보를 상태관리 모듈을 하나 선정해 저장하고 불러올 수 있도록 코드를 작성하세요.
- 사용자가 로그인 상태일 때는 GNB 영역에 로그인 버튼이 보이면 안됩니다.
- 로그아웃시 상태를 초기화하세요.
- 새로고침 시에도 상태를 잃지 않고 유지해야 합니다.
- 일정한 시간이 지나면 로그인 유지가 끝나도록 설정하세요.(예: 1일)
```

</br>

## **과제 상세 : 수강생들이 과제를 진행할 때, 유념해야할 것**

```
1. 아토믹 컴포넌트를 작성할 때 Atoms, Molecules에 반드시 특정한 컴포넌트가 들어갈 필요는 없습니다. 개발자의 주관이 들어갈 수 있는 부분이니 적절한 뎁스로 나누어보세요.

2. API 요청을 보내고, 응답 받을 때 성공 케이스만 생각해 코드를 작성하는 경우가 많습니다. 숨은 에러 케이스는 없을지 한 번 더 고민해보세요.

3. 상태 관리 모듈은 자신이 써보고 싶은 어떤 모듈이던 상관 없습니다. 모듈을 사용해보면서 모듈에 들어가는 미들웨어나 툴도 사용해보세요.
```

</br>

## **코드리뷰 관련: PR시, 아래 내용을 포함하여 코멘트 남겨주세요.**

**1. PR 제목과 내용을 아래와 같이 작성 해주세요.**

> - PR 제목 : 부산대FE\_라이언\_2주차 과제

</br>

**2. PR 내용 :**

> - 코드 작성하면서 어려웠던 점
> - 코드 리뷰 시, 멘토님이 중점적으로 리뷰해줬으면 하는 부분

</div>
</details>

---

<details>
<summary>Step-2.-Week-3</summary>
<div>

## 카카오 테크 캠퍼스 2단계 - FE - 3주차 클론 과제

</br>

## **과제명**

```
1. 비동기 통신 활용과 레이아웃
```

</br>

## **과제 설명**

✅**과제 1. 상품 목록 페이지 개발**

```
- 백엔드 API 문서를 참고하여 상품 목록 페이지를 개발하세요.
- 페이지네이션을 이용해 페이지 값을 증가시켜가며 조회될 수 있도록 코드를 작성해주세요.
- 데이터 로딩 과정에 로더를 구현하세요.
- 데이터 불러오기를 할 때 react-query를 사용해보세요.
```

</br>

✅**과제 2. 스켈레톤과 로더**

```
- 컴포넌트에 props를 전달해 데이터 로딩 중 스켈레톤 또는 로더가 적용될 수 있도록 코드를 작성해보세요.
- 상품 목록 카드에 스켈레톤을 적용하세요.
- 페이지 전체에 대한 로딩이 진행될 때는 글로벌 로더를 적용해보세요.(적절한 모듈을 찾아 적용해도 좋습니다.)
```

</br>

✅**과제 3. 백엔드 상태 코드 반응**

```
- API 응답에 대해 전처리 하는 코드를 작성해보세요.
- 200, 300, 400, 500번 대의 상태 코드별 에러 캐칭이 필요한 경우라면 해당 함수에서 먼저 실행되도록 코드를 작성합니다.
- react-query에서 전처리하는 방식이 있다면 해당 방식을 적용하거나 또는 별도의 함수나 클래스를 만들어 관리를 시도해보면 됩니다.
```

</br>

## **과제 상세 : 수강생들이 과제를 진행할 때, 유념해야할 것**

```
1. 스켈레톤과 로더를 바텀부터 만들기보단 Codepen 등을 참고해 구현하고, Props를 통한 실제 적용에 집중해주세요.
2. 과제 3번을 해결할 때 Facade pattern을 참고해보세요.
3. 과제 1번을 해결할 때 react-query를 사용해보되 전체 프로젝트에 react-query를 적용할 필요는 없습니다. 하나 이상의 API 요청에 적용해보세요.
```

</br>

## **코드리뷰 관련: PR시, 아래 내용을 포함하여 코멘트 남겨주세요.**

**1. PR 제목과 내용을 아래와 같이 작성 해주세요.**

> - PR 제목 : 부산대FE\_라이언\_3주차 과제

</br>

**2. PR 내용 :**

> - 코드 작성하면서 어려웠던 점
> - 코드 리뷰 시, 멘토님이 중점적으로 리뷰해줬으면 하는 부분

</div>
</details>

---

<details>
<summary>Step-2.-Week-4</summary>
<div>
  
## 카카오 테크 캠퍼스 2단계 - FE - 4주차 클론 과제
</br>

## **과제명**

```
상세 페이지 개발과 라이브러리
```

</br>

## **과제 설명**

✅**과제 1. 상품 상세 페이지 개발**

```
- 백엔드 API 문서를 참고하여 상품 상세 페이지를 개발하세요.
- 한 개의 UI 라이브러리를 선정해 사용해보세요.
- 적절하지 않은 상품 ID 값이 들어오거나 찾을 수 없는 상품일 때 404 페이지 또는 "상품을 찾을 수 없습니다."라는 메시지가 있는 페이지로 이동될 수 있도록 코드를 작성하세요.
- 데이터 로딩이 완료될 때까지 로더를 적용하세요.
- '장바구니 담기' 버튼과 '구매' 버튼을 나누어 배치하세요.
```

</br>

✅**과제 2. 장바구니 페이지 개발**

```
- 백엔드 API 문서를 참고하여 장바구니 페이지를 개발하세요.
- 담아둔 상품에 대해 조회, 수량 변경, 항목 삭제가 구현되어야 합니다.
- '결제하기' 버튼을 만들고, 클릭시 결제 페이지로 이동될 수 있도록 개발하세요.
- 다른 모든 페이지와 마찬가지로 비동기 데이터 요청이 발생하니 로더 또는 스켈레톤을 통해 장바구니 목록을 불러올 때 로딩 상태를 표시하세요.
```

</br>

## **과제 상세 : 수강생들이 과제를 진행할 때, 유념해야할 것**

```
1. UI 라이브러리를 사용할 때 모든 구성요소에 UI 라이브러리의 규칙을 적용할 필요는 없습니다. UI 라이브러리의 사용법을 익히고, 하나 이상의 컴포넌트에 적용해봅니다.
```

</br>

## **코드리뷰 관련: PR시, 아래 내용을 포함하여 코멘트 남겨주세요.**

**1. PR 제목과 내용을 아래와 같이 작성 해주세요.**

> - PR 제목 : 부산대FE\_라이언\_4주차 과제

</br>

**2. PR 내용 :**

> - 코드 작성하면서 어려웠던 점
> - 코드 리뷰 시, 멘토님이 중점적으로 리뷰해줬으면 하는 부분

</div>
</details>

---

<details>
<summary>Step-2.-Week-5</summary>
<div>

## 카카오 테크 캠퍼스 2단계 - FE - 5주차 클론 과제

</br>

## **과제명**

```
주문 결제 개발
```

</br>

## **과제 설명**

✅**과제 1. 주문 결제 페이지 개발**

```
- 백엔드 API 문서를 참고하여 주문 결제 페이지를 개발하세요.
- 결제 페이지에서는 결제 전 결제 상세 정보에 대한 데이터를 조회하고, 결제를 확정하는 기능 2가지에 중점을 둡니다.
```

</br>

✅**과제 2. 테스트 결제**

```
- 한 개의 PG 서비스 또는 PG 서비스를 돕는 서드파티 앱을 사용해 개발합니다.
- 테스트 환경에서 결제를 성공해야 합니다.
- 결제가 실패하는 경우(잔고 부족, 결제 정보 불일치 등)에 대해 에러 캐칭을 적용하세요.
- 다양한 에러 상황에 대해 주석으로 에러 상황과 대응 방식을 설명해주세요.
```

</br>

## **과제 상세 : 수강생들이 과제를 진행할 때, 유념해야할 것**

```
1. 결제를 구현할 때 새로운 모듈을 학습하는데 있어서 생각보다 시간 소요가 클 것입니다. 또한 몇몇의 PG사에서 제공하는 SDK의 경우 리액트와 호환성이 나쁜 경우도 있습니다.
2. 테스트 결제시에 실제 비용이 나가는 것처럼 보이는 경우도 있습니다. PG사마다 정책이 다르지만 대부분 테스트 금액은 1일 이내로 환급받는 구조입니다.
3. 결제시에는 생각보다 많은 데이터를 하나의 페이로드에 담아 전달해야 합니다. 이 과정에서 데이터가 적절하지 않은 값이 들어갈 가능성이 높고, 코드가 복잡해질 수 있습니다. 기능 단위를 나누어 함수형 프로그래밍을 시도해보는게 도움이 될 수 있습니다.
```

</br>

## **코드리뷰 관련: PR시, 아래 내용을 포함하여 코멘트 남겨주세요.**

**1. PR 제목과 내용을 아래와 같이 작성 해주세요.**

> - PR 제목 : 부산대FE\_라이언\_5주차 과제

</br>

**2. PR 내용 :**

> - 코드 작성하면서 어려웠던 점
> - 코드 리뷰 시, 멘토님이 중점적으로 리뷰해줬으면 하는 부분

</div>
</details>

---

<details>
<summary>Step-2.-Week-6</summary>
<div>

## 카카오 테크 캠퍼스 2단계 - FE - 6주차 클론 과제

</br>

## **과제명**

```
프로젝트 마무리
```

</br>

## **과제 설명**

✅**과제 1. 배포**

```
- Netlify를 통해 배포를 진행합니다.
- 계정을 생성하고 자신의 레포지토리를 연결해 배포합니다.
- 배포 레벨에서 사용될 환경 변수는 인스턴스에 적용되도록 직접 설정해줍니다.
- 배포에 사용될 브랜치는 개발 브랜치와 꼭 분리합니다.
```

</br>

✅**과제 2. 프로젝트 마무리**

```
- 모든 핵심 기능이 정상 작동되도록 숨은 버그와 기능을 점검합니다.
- 특정한 파일이 너무 크다면, 코드 내의 함수를 다른 파일로 옮겨 import / export 하는 등 코드 리펙터링을 진행합니다.
- 개발 환경과 배포 환경 모두 버그가 없는지 체크합니다.
```

</br>

✅**과제 3. README.md 정리**

```
- 배포한 환경에 대해 구체적인 설명을 남겨주세요.
- 포함될 내용은 배포 순서, 배포에 영향 받는 브랜치, 배포시 주의 사항, 배포 환경 등 다른 개발자가 해당 프로젝트를 인수인계 받았을 때 문제가 없도록 꼼꼼히 작성합니다.
```

</br>

## **과제 상세 : 수강생들이 과제를 진행할 때, 유념해야할 것**

```
1. 많은 서비스가 개발 레벨에서는 잘 작동하다가도 배포 단계에서 에러를 만나는 경우가 많습니다. 배포 후에 기능을 하나하나 점검해보고, 여러 환경에서 시도해보세요.

2. 배포된 환경을 하나의 브라우저에서만 테스트하지 말고, 최대한 다양한 디바이스와 브라우저에서 테스트해보세요. 삼성 브라우저, 아이폰 사파리, 데스크탑이라면 크롬, 사파리, 파이어폭스 등으로 테스트해보세요.

3. 코드를 시간이 지나서 보면 어떤 목적으로, 왜 만들었는지 알아보기 힘든 경우가 많습니다. 기본적인 내용이라 생각한 부분도 주석을 달아주세요.
```

</br>

## **코드리뷰 관련: PR시, 아래 내용을 포함하여 코멘트 남겨주세요.**

**1. PR 제목과 내용을 아래와 같이 작성 해주세요.**

> - PR 제목 : 부산대FE\_라이언\_6주차 과제

</br>

**2. PR 내용 :**

> - 코드 작성하면서 어려웠던 점
> - 코드 리뷰 시, 멘토님이 중점적으로 리뷰해줬으면 하는 부분

</div>
</details>
