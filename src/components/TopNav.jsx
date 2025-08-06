import LOGO from '../assets/logo.jpg'
import {Link} from 'react-router-dom'

const TopNav = () => {
   return (
    <div className = 'flex flex-row justify-around my-8 items-center'>
      <div className = 'flex items-center gap-2'>
         <img src = {LOGO} alt = 'inventhub logo' className = 'h-16 w-16 rounded' id='logo'/>
         <label htmlFor='logo' className = 'text-2xl font-medium  font-sans font-bold'> Inventhub </label>
      </div>

      <div className = 'flex flex-row gap-8'>
         <Link to = '/' className = 'text-lg font-medium hover:text-blue-600 transition-colors'>Home </Link>
         <Link to = '/create' className = 'text-lg font-medium hover:text-blue-600 transition-colors'>Invent</Link>
      </div>
    </div>
   )
}

export default TopNav;