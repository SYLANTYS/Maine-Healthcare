import Link from "next/link";

export default function LeftSidebar() {
  return (
    <aside className="w-[15%] bg-black p-6 ml-5 mt-5">
      <Link href="/">
        <h2 className="text-2xl text-white font-bold my-20">
          Maine <br></br> Healthcare
        </h2>
      </Link>
      <nav className="flex flex-col gap-4 gap-y-5">
        <Link href="/" className="text-white text-sm">
          Home
        </Link>
        <Link href="/info" className="text-white text-sm">
          Healthcare Infographic
        </Link>
        <Link href="/team" className="text-white text-sm">
          Meet The Team
        </Link>
        <Link href="/slide" className="text-white text-sm">
          Slide Deck
        </Link>
        <Link href="/cited" className="text-white text-sm">
          Work Cited
        </Link>
      </nav>
    </aside>
  );
}
