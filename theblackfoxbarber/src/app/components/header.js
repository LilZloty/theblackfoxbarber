import Link from 'next/link';
import Image from 'next/image'

const Header = () => {
  return (
    <header className="bg-transparent text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo text-2xl font-bold"> <Image
            src="/images/theblackfoxbarberlogo.png"
            alt="The black fox barber logo"
            width={180}
            height={180}
          /></div>
        <nav className="space-x-4">
          <Link href="/">
            Home
          </Link>
          <Link href="/pages">
            About
          </Link>
          <Link href="/services">
            Services
          </Link>
          <Link href="/contact">
            Contact
          </Link>
        </nav>
        <div className="contact-info">Contact Info</div>
      </div>
    </header>
  );
};

export default Header;
