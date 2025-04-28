import Link from "next/link";

export default function LeftSidebar() {
  return (
    <aside className="w-64 bg-black p-6">
      <h2 className="text-xl text-white font-bold mb-6">Maine Healthcare</h2>
      <nav className="flex flex-col gap-4">
        <Link href="#home" className="text-white hover:underline">
          Home
        </Link>
        <Link href="#healthcare" className="text-white hover:underline">
          Healthcare Infographic
        </Link>
        <Link href="#team" className="text-white hover:underline">
          Meet The Team
        </Link>
        <Link href="#slides" className="text-white hover:underline">
          Slide Deck
        </Link>
        <Link href="#workcited" className="text-white hover:underline">
          Work Cited
        </Link>
      </nav>
    </aside>
  );
}
