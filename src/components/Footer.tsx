export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-[#2B5797] mb-4">Connect</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <a href="mailto:caleb.nz.li@gmail.com" className="hover:text-[#2B5797]">
                  Email
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/caleb-li-0b3084272/" target="_blank" rel="noopener noreferrer" className="hover:text-[#2B5797]">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-[#2B5797] mb-4">Explore</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <a href="/" className="hover:text-[#2B5797]">
                  Home
                </a>
              </li>
              <li>
                <a href="/projects" className="hover:text-[#2B5797]">
                  Projects
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-[#2B5797]">
                  About
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-[#2B5797] mb-4">Tech Stack</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Built with Next.js, React, Tailwind CSS, and deployed on Vercel.
            </p>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex justify-between items-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} Caleb Li. All rights reserved.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Ngā mihi nui
          </p>
        </div>
      </div>
    </footer>
  )
}
