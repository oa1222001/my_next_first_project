import { Fragment } from "react";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import { getFeaturedPosts } from "../lib/posts-util";
import Head from "next/head";

function HomePage({posts}) {
  return <Fragment>
    <Head>
      <title> Welcome to my blog</title>
      <meta name="description" content="I post about anything i like"/>
    </Head>
    <Hero/>
    <FeaturedPosts posts={posts}/>
  </Fragment>;
}

export default HomePage;

export async function getStaticProps(ctx){
  const featuredPosts = getFeaturedPosts();
  return {
    props:{
      posts: featuredPosts,
    },
    revalidate:60
  }
}