import Link from 'next/link';

export default function Header() {
  return (

    // HEADER 
    <header className="header">
      <nav className="navbar">
        <p className="logo">
          <Link href="/">
              W E A T H E R
          </Link>
        </p>
      </nav>
    </header>

  );
}
