import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white-0 py-2">
      <div className="container mx-auto flex items-center justify-between">
      <Link href="/" className="text-gray-500 hover:text-black">julian sanchez</Link>&nbsp;&nbsp;
        <div className="flex">
          <Link href="/resume" className="text-gray-500 hover:text-black">work</Link>&nbsp;&nbsp;
          <Link href="/blog" className="text-gray-500 hover:text-black">blog</Link>&nbsp;&nbsp;
          <Link href="/reading" className="text-gray-500 hover:text-black">reading</Link>&nbsp;&nbsp;
          <Link href="/pics" className="text-gray-500 hover:text-black">pics</Link>&nbsp;&nbsp;
        </div>
      </div>
    </nav>
  );
};

export default Navbar;