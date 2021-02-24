import Link from "next/Link";
import Image from "next/image";
const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        <Image width={128} height={50} src="/logo.png" />
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/poets">
        <a>Poets</a>
      </Link>
    </nav>
  );
};

export default NavBar;
