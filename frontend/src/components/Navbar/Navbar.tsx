import './Navbar.scss';

const navLinks = [
  {
    title: 'about',
    href: '#about',
  },
  {
    title: 'projects',
    href: '#projects',
  },
  {
    title: 'contact',
    href: '#contact',
  },
  {
    title: 'blog',
    href: '',
  },
];

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        {navLinks.map((link) => (
          <li key={link.title}>
            <a href={link.href}>{link.title}</a>
          </li>
        ))}
      </ul>
      <a className="btn" href="">
        resume
      </a>
    </nav>
  );
};

export default Navbar;
