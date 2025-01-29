import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white-0 py-2">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="font-dohyeon text-3xl">
          Julian Sanchez
        </Link>
        &nbsp;&nbsp;
        <div className="flex">
          <Link
            href="/blog"
            className="font-dohyeon text-gray-500 hover:text-black"
          >
            Blog
          </Link>
          &nbsp;&nbsp;
          <Link
            href="/pics"
            className="font-dohyeon text-gray-500 hover:text-black"
          >
            Pics
          </Link>
          &nbsp;&nbsp;
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
