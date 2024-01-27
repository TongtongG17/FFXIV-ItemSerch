# 파이널판타지14 아이템 게시판 - API Toy Project
![image](https://github.com/TongtongG17/FFXIV-ItemSerch/assets/145681939/475255bb-32f0-412d-9b17-1ad40ba6cdd2)
## 제작기간: 2023.10.15 ~ 2023.11.15
## ⭐️ 프로젝트 설명
프론트엔드 기본 업무는 백엔드의 API를 호출하여 데이터를 받아오거나 백엔드에 데이터를 보내는 통신을 수행을 합니다. 또한 받아온 데이터를 사용자에게 보여주기 위해 디자인 하거나 화면에 동적으로 표시를 해줍니다. 

저는 파이널판타지14 유저이기 때문에 그 게임이 어떤 게임인지 알고 어떠한 아이템들이 구현되어있는지 알고있었습니다. 이러한 이유로 FF14API에 대해 관심을 가지게 되었습니다. 이로인해  파판14에 있는 장터게시판을 참고하여 이 게임에 있는 아이템을 호출하고, 각 직업마다 아이템 필터링을 할 수 있는 아이템 게시판을 구현하는 토이프로젝트를 진행했습니다.
## 💻 개발 환경
+ 개발 환경 : <img src="https://img.shields.io/badge/windows10-0078D6?style=flat-square&logo=windows10&logoColor=white"/>
+ 사용 프로그램 : <img src="https://img.shields.io/badge/Vs code-007ACC?style=flat-square&logo=visualstudiocode&logoColor=white"/> <img src="https://img.shields.io/badge/figma-F24E1E?style=flat-square&logo=figma&logoColor=white"/>
+ 사용된 기술 :
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=white"/> <img src="https://img.shields.io/badge/StyledComponents-DB7093?style=flat-square&logo=styledcomponents&logoColor=white"/> <img src="https://img.shields.io/badge/node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white"/>
## 🛠️ 주요 기능
1. Styled-component

styeld-domponent를 사용하여 스타일링을 하였습니다. 최대한 파이널판타지14의 게임 속 장터게시판 ui와 똑같게 만들도록 노력했습니다.

2. express 서버를 통한 api호출

express js로 api 요청을 처리 하였습니다.XIVAPI에서 받아온 응답 데이터를 가공하여 필요한 정보만 추출하였습니다. 이후 JSON 형식으로 클라이언트에게 응답하였습니다.

3. 아이템 검색 및 각 직업별 아이템 필터링.

api 엔드포인트에 get 요청을 보내 아이템을 검색 할 수 있는 함수를 만들었습니다. 아이템명 입력 이벤트 핸들러 함수를 정의하여 아이템 검색을 호출했습니다. 또한 각 직업군별 아이템을 볼 수 있도록 useCallback 을 이용한 필터링 함수를 정의했습니다.

## 👀 페이지 구성
|파이널판타지14 게임속 장터게시판 ui|Styled-component로 제작한 아이템게시판|
|------|---|
|![image](https://github.com/TongtongG17/FFXIV-ItemSerch/assets/145681939/34089c61-b66f-4883-be44-eb9695e3cad2)|![image](https://github.com/TongtongG17/FFXIV-ItemSerch/assets/145681939/7b275294-71ee-45f0-87d8-8808b3593f19)|

FFXIV-API는 한국어를 지원하지 않기 때문에, 아이템을 영문으로 검색할 수 있도록 기본 언어를 영어로 설정했습니다. 또한 선택한 직업의 아이템만 보이도록 필터링 작업을 했습니다.
![분류](https://github.com/TongtongG17/FFXIV-ItemSerch/assets/145681939/a5fdd9c8-6878-48d8-9d6a-045da71bccd9)
