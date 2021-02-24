import Link from "next/Link";
const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>Poems About Life</h1>
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/poems">
        <a>Poems List</a>
      </Link>
    </nav>
  );
};

export default NavBar;
