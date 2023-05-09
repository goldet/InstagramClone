import { DummyDataUsers } from "./DummyDataUsers";

export const Posts = [
  {
    imageUrl: "https://images.unsplash.com/photo-1599729711447-cae910750525?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    user: DummyDataUsers[0],
    likes: 496,
    caption: "Great weekend away 🌞",
    comments: [
      { user: "dogmom_4857", comment: "Wow, looks beautiful!" },
      { user: "kyra_98", comment: "What a great trip!" },
    ],
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1614442316719-1e38c661c29c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    user: DummyDataUsers[1],
    likes: 973,
    caption: "Making some homemade pizza tonight😋",
    comments: [
      { user: "samson01", comment: "Looks soo good!" },
      { user: "plantl0v3r", comment: "I'm coming over next time😆" },
    ],
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1573152958734-1922c188fba3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
    user: DummyDataUsers[2],
    likes: 878,
    caption: "Beautiful night",
    comments: [
      { user: "kyra_98", comment: "💕" },
      { user: "jessyspark24", comment: "So glad we went!" },
    ],
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1464221094918-aa79b0ad5a6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    user: DummyDataUsers[3],
    likes: 300,
    caption: "Beach day 🏖️",
    comments: [
      { user: "plantl0v3r", comment: "So jealousss" },
      { user: "samson01", comment: "Which beach did you go to?" },
    ],
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1681617819530-0e0cff99d2b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    user: DummyDataUsers[4],
    likes: 475,
    caption: "30km today 😎",
    comments: [
      { user: "dogmom_4857", comment: "Niceeee" },
      { user: "jessyspark24", comment: "Impressive" },
    ],
  },
];
