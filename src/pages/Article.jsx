import React from 'react'
import Detailarticle from '../components/Detailarticle';
import Heroarticle from '../components/Heroarticle';
import HOC from "../components/HOC";
import Articlebloghome from "../components/Articlebloghome";
import Footer from "../components/Footer";

const Article = () => {
  return (
    <HOC headerTitle='Article'>
        <Heroarticle />
        <Detailarticle />
        <Articlebloghome />
        <Footer />

    </HOC>
  )
}

export default Article
