import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col flex-1 items-center justify-start pt-24 bg-zinc-50 font-sans dark:bg-black">
      <Header />
      <main className="grow flex flex-col items-center justify-center w-full max-w-4xl mt-8 mb-32">
        <h1 className="sm:text-5xl font-bold">Post Not Found</h1>
        <Link href="/posts" className="mt-4 text-black hover:text-blue-700">
          Back to Posts
        </Link>
      </main>
      <Footer />
    </div>
  );
}
