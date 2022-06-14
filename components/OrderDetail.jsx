import { useState } from "react";
import axios from "axios";
import styles from "../styles/OrderDetail.module.css";

const OrderDetail = ({ total, createOrder}) => {
  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");
  const [title, setTitle] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [phonenumber, setPhonenumber] = useState("");

  const handleClick = ({}) => {
    createOrder({ title, customer, manufacturer, phonenumber, address, total, method: 0 });
  };
  
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Cena na dostavka - 5 leva</h1>
        <div className={styles.item}>
          <label className={styles.label}>Product</label>
          <input
            placeholder="Slushalki"
            type="text"
            className={styles.input}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Name</label>
          <input
            placeholder="John Doe"
            type="text"
            className={styles.input}
            onChange={(e) => setCustomer(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Manufacturer</label>
          <input
            placeholder="Ivan"
            type="text"
            className={styles.input}
            onChange={(e) => setManufacturer(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Phone Number</label>
          <input
            type="text"
            placeholder="+359 876 666 666"
            className={styles.input}
            onChange={(e) => setPhonenumber(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Address</label>
          <textarea
            rows={5}
            placeholder="Ruse, Studentska 7"
            type="text"
            className={styles.textarea}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <button className={styles.button} onClick={handleClick}>
          Order
        </button>
      </div>
    </div>
  );
};

export default OrderDetail;
