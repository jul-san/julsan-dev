import Link from 'next/link';

// Define a type for any props if necessary (optional)
type NavbarProps = {
    backgroundColor?: string;
    textColor?: string;
};

const Navbar: React.FC<NavbarProps> = ({ backgroundColor = '#333', textColor = 'white' }) => {
  return (
    <nav style={{ background: backgroundColor, color: textColor, padding: '10px' }}>
      <Link href="/">
        <a style={{ marginRight: '20px', color: textColor, textDecoration: 'none' }}>Home</a>
      </Link>
      <Link href="/about">
        <a style={{ marginRight: '20px', color: textColor, textDecoration: 'none' }}>About</a>
      </Link>
      <Link href="/contact">
        <a style={{ color: textColor, textDecoration: 'none' }}>Contact</a>
      </Link>
    </nav>
  );
};

export default Navbar;
