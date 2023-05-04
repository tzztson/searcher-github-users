import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function Navbar({ title }) {
  return (
    <nav className='navbar mb-12 shadow-lg bg-gray-800 text-neutral-content'>
      <div className='container mx-auto'>
        <div className='flex items-center gap-4 px-2 mx-2'>
          <FaGithub className='inline  text-3xl w-10 h-10' />
          <Link to='/' className='text-lg font-bold align-middle max-sm:hidden'>
            {title}
          </Link>
        </div>

        <div className='flex-1 px-2 mx-2'>
          <div className='flex justify-end text-white'>
            <Link to='/' className='btn btn-ghost btn-sm rounded-btn text-base font-black'>
              Home
            </Link>
            <Link to='/about' className='btn btn-ghost btn-sm rounded-btn text-base font-black'>
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.defaultProps = {
  title: 'GitHub User Search',
}

Navbar.propTypes = {
  title: PropTypes.string,
}

export default Navbar
