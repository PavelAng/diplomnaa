import styles from "../styles/Add2.module.css";

const AddButton2 = ({ setClose }) => {
  return (
    <div onClick={() => setClose(false)} className={styles.mainAddButton2}>
      Add New Order
    </div>
    
  );
};

export default AddButton2;
