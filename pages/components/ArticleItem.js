import Link from "next/link";
import articleStyle from "../../styles/Article.module.css";

const ArticleItem = ({ article }) => {
  return (
    <Link href="/article/[id]" as={`/article/${article.id}`}>
      <div className={articleStyle.card}>
        <h3>{article.title} &rarr;</h3>
        <p>{article.excerpt}</p>
      </div>
    </Link>
  );
};

export default ArticleItem;
