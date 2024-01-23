import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h4 className={styles.title}> About Agency</h4>
        <h1 className={styles.subtitle}>
          {" "}
          We create digital ideas that are bigger, bolder,braver and better.{" "}
        </h1>
        <p className={styles.desc}>
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum,
          numquam modi sequi placeat facere doloremque error ea magnam quasi
          maiores animi! Eveniet, esse! Debitis adipisci aut, dolores quia non
          nihil?
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p> Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p> Year of experience</p>
          </div>{" "}
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p> Year of experience</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="" fill className={styles.Img} />
      </div>
    </div>
  );
};

export default AboutPage;
