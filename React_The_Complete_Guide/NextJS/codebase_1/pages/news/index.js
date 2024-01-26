import React, { Fragment } from "react";

const NewsPage = () => {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <a href="/news/latest">Why NextJS is a Great Framework</a>
        </li>
        <li>Core TypeScipt Essetials</li>
      </ul>
    </Fragment>
  );
};

export default NewsPage;
