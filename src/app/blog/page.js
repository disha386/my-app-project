import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="px-10">

      <div className="text-gray-500 text-sm mb-6 flex gap-2">

        <Link href="/" className="hover:text-blue-900">
          Home
        </Link>

        <span>&gt;</span>

        <span className="text-black">
          Blog
        </span>

      </div>

      <h1 className="text-5xl font-bold">
        Blog
      </h1>

    </div>
  );
}