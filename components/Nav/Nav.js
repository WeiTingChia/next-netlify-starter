import Link from "@components/Nav/Link"
export default function Nav() {
  return (
    <>
      <nav>
        <ul className="flex-row">
          <li >
            <Link link="/" content="Home">
              Home
            </Link>
          </li>
          <li>
            <Link link="/about" content="About">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}