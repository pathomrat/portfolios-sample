import axios from "axios";
import { NextPage } from "next";
import Link from "next/link";
import BasePage from "../../components/BasePage";
import BaseLayout from "../../components/layout/BaseLayout";

interface PortfoliosProps {
  posts?: any[];
}

const Portfolios: NextPage<PortfoliosProps> = ({ posts }) => {
  const renderPosts = () => {
    return posts?.map((post) => (
      <li key={post.id}>
        <Link href={`/portfolios/${post.id}`}>{post.title}</Link>
      </li>
    ));
  };

  return (
    <BaseLayout>
      <BasePage>
        <h1>Porifolios page</h1>
        <ul>{renderPosts()}</ul>
      </BasePage>
    </BaseLayout>
  );
};

Portfolios.getInitialProps = async () => {
  let posts = [];
  try {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
    posts = res.data;
  } catch (err) {
    console.error(err);
  }

  return { posts: posts.slice(0, 10) };
};

export default Portfolios;
