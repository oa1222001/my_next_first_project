import Head from "next/head";
import { Fragment } from "react";
import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";

function AllPostsPage({posts}) {
    return (
    <Fragment>
      <Head>
        <meta name="description" content="All Posts"/>
        <title>All Posts</title>
      </Head>
    <AllPosts posts={posts} />
    </Fragment>)
    ;
  }
  export async function getStaticProps(ctx){

    const allPosts = getAllPosts();
    return {
      props:{
        posts:allPosts
      }
      ,
      revalidate:60
    }
  }
  export default AllPostsPage;
  