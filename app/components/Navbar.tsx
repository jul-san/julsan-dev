import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="border-b border-[#e9e9e7]">
      <div className="max-w-4xl mx-auto px-8 md:px-16 py-4 flex justify-between items-center">
        <Link href="/" className="font-semibold text-[#37352f] hover:opacity-60 transition-opacity">
          Julian Sanchez
        </Link>
        <div className="flex gap-5 text-sm text-[#37352f]">
          <Link href="/projects" className="hover:underline">Projects</Link>
          <Link href="/moments" className="hover:underline">Moments</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
