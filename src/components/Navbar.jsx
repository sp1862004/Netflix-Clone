import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
     <header className='max-w-6xl mx-auto flex flex-wrap items-center justify-between p-4 h-20'>
			<div className='flex items-center gap-10 z-50'>
				<Link to='/'>
					<img src='/netflix-logo.png' alt='Netflix Logo' className='w-32 sm:w-40' />
				</Link>

				{/* desktop navbar items */}
				<div className='hidden sm:flex gap-2 items-center'>
					<Link to='/movies' className='hover:underline' >
						Movies
					</Link>
					<Link to='/TV' className='hover:underline'>
						Tv Shows
					</Link>
					<Link to='/history' className='hover:underline'>
						Search History
					</Link>
				</div>
			</div>

			

			
		</header>
    </div>
  )
}

export default Navbar

