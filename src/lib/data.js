// TEMPORARY DATA
const users = [
  {
    id: 1,
    username: "John",
  },
  {
    id: 2,
    username: "Jane",
  },
];

const posts = [
  {
    id: 1,
    title: "post 1",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis ducimus possimus quae fugiat consequuntur expedita sed quidem veritatis itaque maiores saepe voluptatem reprehenderit, dolorem atque voluptas sequi, maxime ratione soluta?",
    userId: 1,
  },
  {
    id: 2,
    title: "post 2",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis ducimus possimus quae fugiat consequuntur expedita sed quidem veritatis itaque maiores saepe voluptatem reprehenderit, dolorem atque voluptas sequi, maxime ratione soluta?",
    userId: 1,
  },
  {
    id: 3,
    title: "post 3",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis ducimus possimus quae fugiat consequuntur expedita sed quidem veritatis itaque maiores saepe voluptatem reprehenderit, dolorem atque voluptas sequi, maxime ratione soluta?",
    userId: 2,
  },
  {
    id: 3,
    title: "post 4",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis ducimus possimus quae fugiat consequuntur expedita sed quidem veritatis itaque maiores saepe voluptatem reprehenderit, dolorem atque voluptas sequi, maxime ratione soluta?",
    userId: 2,
  },
];

export const getPosts = async () => {
  return posts;
};

export const getPost = async (id) => {
  const post = posts.find((post) => post.id === parseInt(id));
  return post;
};
export const getUser = async (id) => {
  return users.find((user) => user.id === parseInt(id));
};
