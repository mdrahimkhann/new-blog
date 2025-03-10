

import { Link, Outlet } from "react-router-dom";

const Header = () => {
    return (
       <>
        <header className='navber'>


<div className='navber-brand'>
   <Link to='/'><Link to='/'>  <img  src="https://kms.zaatarwzeit.net/content/uploads/corporatepage/160405103436989~logoWhite.png" alt="Placeholder" className="imag-logo shadow-lg"/></Link></Link>
 </div>



        

<nav className='navber_links'>
        <ul>

            <li><Link to=""></Link></li>
            <li><Link to="Products">Prodecut</Link></li>
            <li><Link to="Contact">Contact</Link></li>
            <li><Link to="About">About</Link></li>
            <li><Link to="Profile">Profile</Link></li>
            <li><Link to="SignIn">SignIn</Link></li>
        </ul>
      
</nav>



</header>
       
       
       
       
<Outlet/>
       


       </>
        
        
        
        
        
            );
        
};

export default Header;