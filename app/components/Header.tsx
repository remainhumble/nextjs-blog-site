import Link from "next/dist/client/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex h-14 bg-zinc-50 items-center justify-between border-b fixed w-full top-0 px-9">
      <Link href="/">
        <Image
          src="/next.svg"
          alt="Logo"
          width={92}
          height={72}
          className="mr-2"
        />
      </Link>
      <nav className="">
        <ul className="flex flex-row gap-6">
          <li>
            <Link href="/" className="text-black hover:text-blue-700">
              Home
            </Link>
          </li>
          <li>
            <Link href="/posts" className="text-black hover:text-blue-700">
              Posts
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
