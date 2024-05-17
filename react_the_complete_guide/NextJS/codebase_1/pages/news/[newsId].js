import React from "react";
import { useRouter } from "next/router";

const NewsID = () => {
  const router = useRouter();

  router.query.newsId;

  return <h1>The NewsID Page</h1>;
};

export default NewsID;
