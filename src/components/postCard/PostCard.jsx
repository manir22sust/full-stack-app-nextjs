import Link from "next/link";
import Image from "next/image";
// import { format } from "date-fns";
import styles from "./postCard.module.css";

const PostCard = () => {
  //   const myDate = new Date();
  //   const formattedDate = format(myDate, "yyyy-MM-dd HH:mm:ss");

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.unsplash.com/photo-1593376853899-fbb47a057fa0?q=80&w=1315&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Post Image"
            fill
            className={styles.img}
          />
        </div>
        <span className={styles.date}> 2024</span>
        {/* <span className={styles.date}>{formattedDate}</span> */}
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>
          {" "}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi nemo
          quaerat totam sit aliquid distinctio, beatae explicabo repellat id
          amet vitae neque placeat, porro, doloremque culpa odio. In,
          repellendus officia?
        </p>
        <Link className={styles.link} href="/blog/post">
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
