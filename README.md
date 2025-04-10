# 202130118 송태경

# 2025-04-01 강의
## state 끌어 올리기<p>
### 가장 좋은 방법은 게임의 state를 각 Square가 아닌 부모 컴포넌트인 Board에 저장하는것.<p>
### Board 컴포넌트는 각 Square에 숫자를 전달했을 때와 같이 prop를 전달하여 각 Square에 표시할 내용을 정할 수 있다.<p>
### 여러 자식 컴포넌트에서 데이터를 수집하거나 두 자식 컴포넌트가 서로 통신하도록 하려면, 부모 컴포넌트에서 공유 state를 선언해야 한다. <p>
### 부모 컴포넌트는 props를 통해 해당 state를 자식 컴포넌트에 전달할 수 있다.<p>
### 이 방법을 사용하면 자식 컴포넌트가 서로 동기화되고, 부모 컴포넌트와도 동기화되도록 할 수 있다.<p>
## 사용자와 상호작용 하는 컴포넌트 만들기<p>
### 컴포넌트는 무언가 "기억"하기 위해 state를 사용한다.<p>
### React는 상태 기억을 위해 useState라는 Hook을 제공한다.<p>

## props를 통해 데이터 전달하기 <p>
### React의 component architectrue를 사용해서 재사용 할 수 있는 component를 만들어서 지저분하고 중복된 코드를 삭제한다.<p>
### Board component를 만들고 ,Square component의 내용을 복사한다.<p>
### Square component의 button을 하나만 남기고 모두 삭제한다.<p>
### Board component의 button을 Square component로 교체한다.<p>
### App에서 호출하는 component를 Square에서 Board로 바꿔준다.<p>
### 정상적으로 출력이 되는지 확인한다.<p>
## 여기까지 하면 component는 깔끔하게 정리 됐지만, 숫자 출력이 1만 나오게 된다.<p>
### 이 문제를 해결하기 위해 props를 사용하여 각 사각형이 가져야 할 값을 부모 component (Board)에서 자식 component(Square)로 전달<p>
### component를 호출하는 쪽이 부모 component 

# 2025-04-03 강의

<h2>function형 컴포넌트에서만 Hook을 사용하는 이유
<h3>Class형 component는 lifecycle 함수를 통해서 상태 관리
<h2>function형 component를 주로 사용하는 이유<p><h3>
Class형 component를 많이 볼 수 있기 때문에
<h2>component 간 데이터 공유
<h3>

# 2025-03-20 강의
<h2>의존성 관리와 package.json
<p><h3>package.json의 주요 역할<p>
<h4>package.json 파일은 프로젝트의 루트 디렉터리에 위치하며, 다음과 같은 중요한 정보를 포함

<p>프로젝트의 이름과 버전.<p>
의존성 (dependencies): 프로젝트에서 사용하는 외부 라이브러리 및 패키지 목록.
<p>스크립트: npm 명령어를 쉽게 실행할 수 있도록 하는 커맨드 정의.
<p>설정: 프로젝트에 관련된 추가적인 설정 정보.
<p><h3>의존성 관리
<p><h4>의존성은 프로젝트가 외부 라이브러리나 패키지에 의존하는 것을 의미 package.json은 이를 관리하는 중심 역할 <p>의존성에는 크게 두 가지가 나뉨

일반 의존성 (dependencies): 프로덕션 환경에서 필요로 하는 패키지.<p>
개발 의존성 (devDependencies): 개발 과정에서만 필요로 하는 패키지 (예: 테스트 도구, 빌드 도구 등).
<p><h3>의존성 관리의 중요성
<p><h4>버전 관리: 의존성 버전 관리를 통해 프로젝트의 안정성을 유지
<p>협업: package.json과 package-lock.json 파일을 Git에 저장하면 팀원들 간에 동일한 의존성 <p>환경을 유지
<p>보안: 보안 패치가 적용된 최신 버전으로 의존성을 관리하는 것이 중요