import Head from "next/head";
import styles from "../styles/Layout.module.css";
import ArticleList from "./components/ArticleList";
import { server } from "../config";

export default function Home({ articles }) {
  console.log(articles);
  return (
    <>
      {/* <h2 className={styles.title}>Home</h2> */}
      <ArticleList articles={articles} />
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
}

// export async function getStaticProps() {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts?_limit=6`
//   );
//   const articles = await res.json();

//   return {
//     props: {
//       articles,
//     },
//   };
// }
