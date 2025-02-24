const projectData = [
  {
    id: 1,
    recruitmentTitle: "프론트엔드 개발자 모집",
    projectTitle: "멋쟁이 사자🦁 만들기 프로젝트",
    goal: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    description: "We are building a new e-commerce platform with modern web technologies.",
    projectPeriodStart: "2024-03-01T00:00:00Z",
    projectPeriodEnd: "2024-09-01T00:00:00Z",
    recruitmentStart: "2024-02-15T00:00:00Z",
    recruitmentEnd: "2024-03-10T00:00:00Z",
    createdAt: "2024-02-01T12:00:00Z",
    leader: {
      id: 1,
      name: "John Doe",
    },
    notices: [
      {
        id: 1,
        content: "Kickoff meeting on March 5th.",
      },
    ],
    applications: [
      {
        id: 1,
        position: "프론트엔드 희망",
        introduction:
          "안녕하세요. 저는 프론트엔드 개발자입니다. 안녕하세요. 저는 프론트엔드 개발자입니다. 안녕하세요. 저는 프론트엔드 개발자입니다. 안녕하세요. 저는 프론트엔드 개발자입니다. 안녕하세요. 저는 프론트엔드 개발자입니다. 안녕하세요. 저는 프론트엔드 개발자입니다. 안녕하세요. 저는 프론트엔드 개발자입니다.",
        portfolioUrl: "https://example.com",
        status: "accept",
        user: {
          id: 1,
          name: "Monica",
          gender: "Female",
          brithDate: "1996-09-01T00:00:00Z",
          position: "프론트엔드",
          address: "부산광역시 동래구",
          career: 3,
        },
      },
      {
        id: 2,
        position: "백엔드 희망",
        introduction: "안녕하세요. 저는 백엔드 개발자입니다.",
        portfolioUrl: "https://example.com",
        status: "waiting",
        user: {
          id: 4,
          name: "Chandler",
          gender: "Male",
          brithDate: "1996-09-01T00:00:00Z",
          position: "백엔드",
          address: "캘리포니아주",
          career: 3,
        },
      },
      {
        id: 3,
        position: "디자이너 희망",
        introduction: "안녕하세요. 저는 디자이너입니다.",
        portfolioUrl: "https://example.com",
        status: "reject",
        user: {
          id: 4,
          name: "Pheobe",
          gender: "Female",
          brithDate: "1996-09-01T00:00:00Z",
          position: "디자이너",
          address: "서울특별시 동대문구",
          career: 0,
        },
      },
      {
        id: 4,
        position: "머신러닝 희망",
        introduction: "안녕하세요. 저는 머신러닝 개발자입니다.",
        portfolioUrl: "https://example.com",
        status: "accept",
        user: {
          id: 4,
          name: "Joey",
          gender: "Female",
          brithDate: "1996-09-01T00:00:00Z",
          position: "머신러닝",
          address: "서울특별시 중구",
          career: 3,
        },
      },
    ],
    member: [
      {
        id: 1,
        user: {
          id: 1,
          name: "Monica",
          position: "프론트엔드",
        },
      },
      {
        id: 2,
        user: {
          id: 4,
          name: "Joey",
          position: "머신러닝",
        },
      },
    ],
  },
];

export default projectData;
