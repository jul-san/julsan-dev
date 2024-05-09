import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white-0 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex">
          <Link href="/" className="underline">
            julian sanchez
          </Link>&nbsp;&nbsp;
          <Link href="/resume" className="underline">
            resume
          </Link>&nbsp;&nbsp;
          <Link href="/blog" className="underline">
            blog
          </Link>&nbsp;&nbsp;
          <Link href="/pics" className="underline">
            pics
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
