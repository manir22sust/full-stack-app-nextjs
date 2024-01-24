import { Post } from "./models/post";
import { User } from "./models/user";
import { connectToDb } from "./utils";

/* // TEMPORARY DATA
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
]; */

export const getPosts = async () => {
  try {
    connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch posts!");
  }
};

export const getPost = async (slug) => {
  try {
    connectToDb();
    const post = await Post.findOne({ slug });
    return post;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch post!");
  }
};
export const getUser = async (id) => {
  try {
    connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch User!");
  }
};

export const getUsers = async () => {
  try {
    connectToDb();
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch Users!");
  }
};
