import Link from "next/link";

export default function EventsPage() {
  return (
    <div className="px-10">

      <div className="text-gray-500 text-sm mb-6 flex gap-2">

        <Link href="/" className="hover:text-blue-900">
          Home
        </Link>

        <span>&gt;</span>

        <span className="text-black">
         Events 
        </span>

      </div>

      <h1 className="text-5xl font-bold">
        Events 
      </h1>

    </div>
  );
}