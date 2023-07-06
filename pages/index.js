import Head from "next/head";
import styles from "../styles/Layout.module.css";
import ArticleList from "./components/ArticleList";

export default function Home({ articles }) {
  console.log(articles);
  return (
    <>
      <Head>
        <title>WebDev Newz</title>
        <meta name="keywords" content="web development, programming" />
      </Head>
      {/* <h2 className={styles.title}>Home</h2> */}
      <ArticleList articles={articles} />
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  );
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
}
