import { useState } from "react";
import styles from "../styles/Add2.module.css";
import axios from "axios";
import { useRouter } from "next/router";

const Add2 = ({ setClose }) => {
  
  const [customer, setCustomer] = useState(null);
  const [title, setTitle] = useState(null);
  const [manufacturer, setManufacturer] = useState(null);
  const [address, setAddress] = useState(null);
  const [phonenumber, setPhonenumber] = useState([]);
  const [total, setTotal] = useState([]);
  const [orderId, setOrderid] = useState(null);




  const handleCreate = async () => {
    
    try {
       
      

      const { url } = uploadRes.data;
      const newOrder = {
        customer,
        title,
        manufacturer,
        address,
        phonenumber,
        total,
      };

      await axios.post("http://localhost:3000/api/orders", newOrder);
      setClose(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <span onClick={() => setClose(true)} className={styles.close}>
          X
        </span>
        <h1>Add a new order</h1>
        <div className={styles.item}>
          <label className={styles.label}>Customer</label>
          <input
            className={styles.input}
            type="text"
            onChange={(e) => setCustomer(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Title</label>
          <input
            className={styles.input}
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Manufacturer</label>
          <input
            className={styles.input}
            type="text"
            onChange={(e) => setManufacturer(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Address</label>
          <textarea
            rows={4}
            type="text"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Phone Number</label>
          <input
            className={styles.input}
            type="text"
            onChange={(e) => setPhonenumber(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Total</label>
          <input
          className={styles.label}
          type="text"
          onChange={(e) => setTotal(e.target.value)}
          />
          </div>
        <button className={styles.addButton2} onClick={handleCreate}>
          Create
        </button>
      </div>
    </div>
  );
};

export default Add2;
