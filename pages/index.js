import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Add from "../components/Add";
import Add2 from "../components/Add2";
import AddButton from "../components/AddButton";
import AddButton2 from "../components/AddButton2";
import Featured from "../components/Featured";
import ProductList from "../components/ProductList";
import styles from "../styles/Home.module.css";


export default function Home({ productList, orderList, admin }) {
  const [close, setClose] = useState(true);
  return (
    <div className={styles.container}>
      <Head>
        <title>Firma za obslujvane na poruchki</title>
        <meta name="description" content="Obslujvane na poruchki" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <div className={styles.container}>
      {<AddButton setClose={setClose} />}
      {<AddButton2 setClose={setClose} />}
      
      </div>
      <ProductList productList={productList} />
      {!close && <Add setClose={setClose} />}
      
      <orderList orderList={orderList} />
      {!close && <Add2 setClose={setClose} />}

      
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;

  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }
  
  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      productList: res.data,
      admin,
    },
  };
};

