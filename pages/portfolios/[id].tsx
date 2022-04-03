import axios from "axios";
import { NextPage } from "next";
import BasePage from "../../components/BasePage";
import BaseLayout from "../../components/layout/BaseLayout";

interface PortfolioDetailProp {
  portfolio: any;
}

const PortfolioDetail: NextPage<PortfolioDetailProp> = ({ portfolio }) => {
  return (
    <BaseLayout>
      <BasePage>
        <h1>{portfolio.title}</h1>
        <p>BODY : {portfolio.body}</p>
        <p>ID : {portfolio.id}</p>
      </BasePage>
    </BaseLayout>
  );
};

PortfolioDetail.getInitialProps = async ({ query }) => {
  let post = {};
  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${query.id}`
    );
    post = res.data;
  } catch (err) {
    console.error(err);
  }

  return { portfolio: post };
};

export default PortfolioDetail;
