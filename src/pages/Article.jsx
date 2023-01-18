import React from "react";
import Detailarticle from "../components/Detailarticle";
import Heroarticle from "../components/Heroarticle";
import HOC from "../components/HOC";

const Article = () => {
  return (
    <HOC headerTitle="Article">
      <Heroarticle />
      <Detailarticle />
    </HOC>
  );
};

export default Article;
