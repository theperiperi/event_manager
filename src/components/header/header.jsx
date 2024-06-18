import Link from 'next/link';
import Image from 'next/image';

export const Header = () => (
    <header>
      <div className="topNav">
        <Image src={'/images/TripAdvisor-Logo.png'} alt="logo" width={50} height={50} />
        <nav>
          <ul>
            <li>
              <Link legacyBehavior href="/"><a>Home</a></Link>
            </li>
            <li>
              <Link legacyBehavior href="/events"><a>Events</a></Link>
            </li>
            <li>
              <Link legacyBehavior href="/about"><a>About</a></Link>
            </li>  
          </ul>
          <img src=""  />
        </nav>
      </div>
      <h1>Event Tracker</h1>
    </header>
);