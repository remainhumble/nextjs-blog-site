import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";

const PostsPage = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  return (
    <div className="flex flex-col flex-1 items-center justify-start pt-24 bg-zinc-50 font-sans dark:bg-black">
      <Header />
      <h1 className="sm:text-5xl font-bold">Posts</h1>
      <p className="sm:text-2xl">This is the posts page</p>
      <div className="w-full max-w-4xl mt-8 mb-32">
        <ul>
          {posts.map((post: any) => (
            <li key={post.id} className="border-b py-4">
              <Link href={`/posts/${post.id}`} className=" hover:text-blue-700">
                <h2 className="text-xl font-semibold">{post.title}</h2>
                <p className="text-gray-600">{post.body}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default PostsPage;
