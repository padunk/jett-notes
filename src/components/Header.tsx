import { Link } from "@tanstack/react-router"

export default function Header() {
  return (
    <nav className='border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-6 py-4 flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <div className='w-10 h-10 bg-linear-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center font-bold text-white text-xl shadow-lg'>
            T
          </div>
          <span className='text-xl font-bold text-white'>TextFlow</span>
        </div>

        <div className='flex items-center gap-4'>
          <a
            href='#how-it-works'
            className='text-gray-300 hover:text-white text-sm'
          >
            How it Works
          </a>
          <a href='#pricing' className='text-gray-300 hover:text-white text-sm'>
            Pricing
          </a>
          <Link
            to='/notes'
            className='text-gray-300 hover:text-white text-sm'
            activeProps={{ className: "text-orange-500" }}
          >
            Notes
          </Link>
          <button
            type='button'
            className='px-4 py-2 text-gray-300 hover:text-white text-sm'
          >
            Sign In
          </button>
          <button
            type='button'
            className='px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium shadow-lg shadow-blue-500/20'
          >
            Start Free
          </button>
        </div>
      </div>
    </nav>
  )
}
