import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/components/postUser/PostUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";

/* // FETCH DATA WITH AN API
const getData = async (slug) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${slug}`,
    {
      cache: "no-store",
      // next: { revalidate: 3600 },
    }
  );
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
}; */

const SinglePostPage = async ({ params }) => {
  const { slug } = params;

  /*  // FETCH DATA WITH AN API
  const post = await getData(slug); */

  // FETCH DATA WITHOUT AN API
  const post = await getPost(slug);
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          className={styles.img}
          src="https://images.unsplash.com/photo-1593376853899-fbb47a057fa0?q=80&w=1315&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          fill
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post?.title} </h1>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            src="https://images.unsplash.com/photo-1533228876829-65c94e7b5025?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            width={50}
            height={50}
          />
          {post && (
            <Suspense fallback={<div> Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Publish</span>
            <span className={styles.detailValue}> 2024</span>
          </div>
        </div>
        <div className={styles.content}>{post?.body}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
