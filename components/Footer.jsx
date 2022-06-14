import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            DIPLOMNA RABOTA
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>NAMERI NI NA ADRES</h1>
          <p className={styles.text}>
            Primeren adres
            <br /> Ruse 7004
            <br /> +359 876 666 666
          </p>
          <p className={styles.text}>
            Drug primeren adres
            <br /> Varna
            <br /> +359 876 777 777
          </p>
          <p className={styles.text}>
            Ohste edin primeren adres
            <br /> Plovdiv
            <br /> 089655433
          </p>
          <p className={styles.text}>
            posleden primeren adres 
            <br /> Sofiq
            <br /> +3598743432
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>Rabotno vreme</h1>
          <p className={styles.text}>
            Ponedelnik do Petuk
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.text}>
            Subota и Nedelq
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
