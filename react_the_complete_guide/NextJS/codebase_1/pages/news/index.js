import Link from "next/link";
import React, { Fragment } from "react";

const NewsPage = () => {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/latest">Why NextJS is a Great Framework</Link>
        </li>
        <li>
          <Link href="/news/typescript">About TypeScipt Essetials</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default NewsPage;
