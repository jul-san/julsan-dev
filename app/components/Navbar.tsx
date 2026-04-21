import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-xl font-bold">Julian Sanchez</span>
        <div>
          <Link href="/" className="mx-2 hover:underline">Home</Link>
          <Link href="/resume" className="mx-2 hover:underline">Resume</Link>
          <Link href="/moments" className="mx-2 hover:underline">Moments</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;