import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-start pt-24 bg-zinc-50 font-sans dark:bg-black w-full">
      <Header />
      <main className="grow">
        <h1 className="sm:text-5xl font-bold">Welcome to my blog</h1>
      </main>
      <Footer />
    </div>
  );
}
