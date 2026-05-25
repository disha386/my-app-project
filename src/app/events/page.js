import Link from "next/link";

export default function EventsPage() {
  return (
    <div className="mt-[70px]">

      {/* BREADCRUMB */}
      <div className="px-10 py-6 text-gray-500 text-sm flex gap-2">

        <Link href="/" className="hover:text-blue-900 transition">
          Home
        </Link>

        <span>&gt;</span>

        <span className="text-black">
          Events
        </span>

      </div>

      {/* BLUE HERO BAR */}
      <div className="px-6">

        <section className="w-full bg-[#0A2A66] text-white px-10 py-64 rounded-[40px] relative overflow-hidden">

          <div className="max-w-[1400px] mx-auto flex items-center justify-between">

            {/* LEFT TEXT */}
            <div>

              <h1 className="text-4xl font-black font-serif tracking-tight text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]">
                Events & TradeShows
              </h1>

            </div>

            {/* RIGHT IMAGE */}
            <div className="absolute right-[-10px] bottom-[-10px]">

              <img
                src="https://res.cloudinary.com/dnodncslz/image/upload/v1779687517/event__tradeshow_header_e27a3z.webp"
                alt="Events"
                className="w-[850px] object-contain opacity-90"
              />

            </div>

          </div>

        </section>

      </div>

    </div>
  );
}