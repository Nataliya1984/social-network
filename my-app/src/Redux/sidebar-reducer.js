let initialState = {
  friends: [
    {
      name: "Andrew",
      avatar:
        "https://s3.nat-geo.ru/images/2019/4/10/d538d99ad231423dad42f0d17499f9e0.max-2000x1000.jpg",
      id: 1,
    },
    {
      name: "Sweta",
      avatar:
        "https://s3.nat-geo.ru/images/2019/4/10/d538d99ad231423dad42f0d17499f9e0.max-2000x1000.jpg",
      id: 2,
    },
    {
      name: "Sasha",
      avatar:
        "https://s3.nat-geo.ru/images/2019/4/10/d538d99ad231423dad42f0d17499f9e0.max-2000x1000.jpg",
      id: 3,
    },
  ],
};

const sidebarReducer = (state = initialState, action) => {
  return state;
};

export default sidebarReducer;
