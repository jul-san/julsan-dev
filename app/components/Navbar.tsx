import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white-0 py-2">
      <div className="container mx-auto flex items-center">
        <div className="flex space-x-2 font-dohyeon text-gray-500">
          <Link href="/" className="hover:text-black">
            01 : Home
          </Link>
          <span>|</span>
          <Link href="/resume" className="hover:text-black">
            02 : Resume
          </Link>
          <span>|</span>
          <Link href="/pics" className="hover:text-black">
            03 : Moments
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;