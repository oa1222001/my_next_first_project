import Head from "next/head";
import { Fragment } from "react";
import PostContent from "../../../components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "../../../lib/posts-util";
function PostDetailPage({ post }) {
  return (
    <Fragment>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <PostContent post={post} />
    </Fragment>
  );
}

export async function getStaticProps(ctx) {
  const { params } = ctx;
  const { slug } = params;
  const post = getPostData(slug);
  return {
    props: {
      post,
    },
    revalidate: 60,
  };
}

export async function getStaticPaths(ctx) {
  const posts = getPostsFiles();
  const slugs = posts.map((p) => p.replace(/\.md$/, ""));
  return {
    paths: slugs.map((s) => ({ params: { slug: s } })),
    fallback: false,
  };
}

export default PostDetailPage;
