import Link from 'next/link';
import Image from 'next/image'

const Header = () => {
  return (
    <header className="bg-transparent absolute text-white p-4 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className=""> <Image
            src="/images/theblackfoxbarberlogo.png"
            alt="The black fox barber logo"
            width={180}
            height={180}
            style={{ width: '80%', height: 'auto' }}
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
