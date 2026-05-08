export default function Navbar() {
  return (
    <div className="w-full fixed top-0 left-0 bg-white z-50">

      {/* NAVBAR ROW */}
      <div className="flex justify-center py-6 px-10 relative z-50">

        {/* CENTER MENU */}
        <div className="flex gap-4 text-[17px] text-black items-center relative z-50">

          {/* ABOUT */}
          <div className="relative group cursor-pointer flex items-center gap-1 z-50">
            <span className="hover:text-blue-900">About</span>

            <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 12 15 18 9" />
            </svg>

            <div className="absolute top-8 left-0 hidden group-hover:flex flex-col bg-gray-100 shadow-lg rounded-lg p-4 w-48 z-50">
              <span className="text-black py-1 hover:text-blue-900">Company</span>
              <span className="text-black py-1 hover:text-blue-900">Team</span>
              <span className="text-black py-1 hover:text-blue-900">Mission</span>
              <span className="text-black py-1 hover:text-blue-900">Vision</span>
              <span className="text-black py-1 hover:text-blue-900">Careers</span>
            </div>
          </div>

          {/* OUR EXPERTISE (FULL WIDTH + INCREASED HEIGHT) */}
<div className="relative group cursor-pointer flex items-center gap-1">

  <span className="hover:text-blue-900">Our Expertise</span>

  <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2">
    <polyline points="6 9 12 15 18 9" />
  </svg>

  {/* FULL WIDTH DROPDOWN */}
  <div className="fixed left-0 top-[72px] w-full hidden group-hover:block z-40">

    <div className="bg-gray-100 shadow-lg w-full">

      {/*  HEIGHT INCREASED HERE */}
      <div className="max-w-6xl mx-auto py-32 px-10 text-black">

        <h2 className="text-lg font-semibold">Our Expertise</h2>

        <p className="mt-8 hover:text-blue-900 cursor-pointer">Service 1</p>
        <p className="hover:text-blue-900 cursor-pointer">Service 2</p>
        <p className="hover:text-blue-900 cursor-pointer">Service 3</p>

      </div>

    </div>
  </div>
</div>
          {/* PORTFOLIO */}
          <div className="relative group cursor-pointer flex items-center gap-1">
            <span className="hover:text-blue-900">Portfolio</span>

            <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 12 15 18 9" />
            </svg>

            <div className="absolute top-8 left-0 hidden group-hover:flex flex-col bg-gray-100 shadow-lg rounded-lg p-4 w-48 z-50">
              <span className="text-black py-1 hover:text-blue-900">Projects</span>
              <span className="text-black py-1 hover:text-blue-900">Case Studies</span>
              <span className="text-black py-1 hover:text-blue-900">Clients</span>
            </div>
          </div>

          {/* RESOURCES */}
          <div className="relative group cursor-pointer flex items-center gap-1">
            <span className="hover:text-blue-900">Resources</span>

            <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 12 15 18 9" />
            </svg>

            <div className="absolute top-8 left-0 hidden group-hover:flex flex-col bg-gray-100 shadow-lg rounded-lg p-4 w-48 z-50">
              <span className="text-black py-1 hover:text-blue-900">Blogs</span>
              <span className="text-black py-1 hover:text-blue-900">Guides</span>
              <span className="text-black py-1 hover:text-blue-900">Downloads</span>
            </div>
          </div>

          {/* EVENTS */}
          <div className="cursor-pointer hover:text-blue-900">
            <span>Events</span>
          </div>

          {/* CAREER */}
          <div className="relative group cursor-pointer flex items-center gap-1">
            <span className="hover:text-blue-900">Career</span>

            <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 12 15 18 9" />
            </svg>

            <div className="absolute top-8 left-0 hidden group-hover:flex flex-col bg-gray-100 shadow-lg rounded-lg p-4 w-48 z-50">
              <span className="text-black py-1 hover:text-blue-900">Open Positions</span>
              <span className="text-black py-1 hover:text-blue-900">Life at Company</span>
              <span className="text-black py-1 hover:text-blue-900">Internships</span>
              <span className="text-black py-1 hover:text-blue-900">Hiring Process</span>
              <span className="text-black py-1 hover:text-blue-900">Apply Now</span>
            </div>
          </div>

          {/* BLOG */}
          <div className="cursor-pointer hover:text-blue-900">
            <span>Blog</span>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="absolute right-10 flex items-center gap-4 z-50">

          <i className="bi bi-search text-[20px] cursor-pointer hover:text-blue-900"></i>

          <span className="font-semibold cursor-pointer hover:text-blue-900">
            Login
          </span>

          <button className="bg-orange-500 text-black px-6 py-2 rounded-lg hover:bg-orange-600 transition">
            Get in Touch
          </button>

        </div>

      </div>
    </div>
  );
}