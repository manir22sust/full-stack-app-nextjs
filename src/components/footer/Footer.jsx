import styles from "./footer.module.css";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>creative dev</div>
      <div className={styles.text}>
        creative thoughts agency &#169; All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
