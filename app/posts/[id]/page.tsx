import Header from "../../components/Header";
import Footer from "../../components/Footer";

const PostPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  );
  const post = await response.json();

  return (
    <div className="flex flex-col flex-1 items-center justify-start pt-24 bg-zinc-50 font-sans dark:bg-black">
      <Header />
      <main className="grow w-full max-w-4xl mt-8 mb-32">
        <h1 className="sm:text-5xl font-bold">{post.title}</h1>
        <p className="sm:text-2xl mt-8">{post.body}</p>
      </main>
      <Footer />
    </div>
  );
};

export default PostPage;
