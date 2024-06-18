import Link from 'next/link';

export const Header = () => (
    <header>
        <nav>
          <img src=""  />
          <Link legacyBehavior href="/">
          <a href="/">Home</a>
          </Link>
          <Link legacyBehavior href="/events">
          <a href="/events">Events</a>
          </Link>
          <Link legacyBehavior href="/about">
          <a href="/about">About</a>
          </Link>
        </nav>
      </header>
);