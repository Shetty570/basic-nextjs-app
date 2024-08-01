import Image from "next/image";
import styles from "./page.module.css";
import prisma from "../../utils/prisma";
import Post from "./components/Post";
import Link from "next/link";

async function getPosts() {
  const posts = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return posts;
}

export default async function Home() {
  const posts = await getPosts();
  console.log(posts);
  return (
    <main className={styles.main}>
      <Link href={"/add-post"}>Add post </Link>
      <h1> Feed</h1>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          content={post.content}
          authorName={post.author.name}
        />
      ))}
    </main>
  );
}
