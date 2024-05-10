import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white-0 py-2">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex">

          <Link href="/" className="text-gray-500 hover:text-black">julian sanchez</Link>&nbsp;&nbsp;
          <Link href="/resume" className="text-gray-500 hover:text-black">resume</Link>&nbsp;&nbsp;
          <Link href="/blog" className="text-gray-500 hover:text-black">blog</Link>&nbsp;&nbsp;
          <Link href="/pics" className="text-gray-500 hover:text-black">pics</Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;