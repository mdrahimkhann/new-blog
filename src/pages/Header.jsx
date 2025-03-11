

import { Link, Outlet } from "react-router-dom";

const Header = () => {
    return (
       <>
        <header className='navber'>


<div className='navber-brand'>
   <Link to='SignIn'><Link to='SignIn'>  <img className="rounded-sm" src="https://media.licdn.com/dms/image/v2/D4E03AQECsodJ_cBUzw/profile-displayphoto-shrink_200_200/B4EZV.3Qw7HMAY-/0/1741590171290?e=1747267200&v=beta&t=Wj7P_IJxXPURyTxlyDyqmal1DIaN62FPB1QZWlj-Amw" alt="Placeholder" className="imag-logo shadow-lg"/></Link></Link>
 </div>



        

<nav className='navber_links'>
        <ul>

            <li><Link to=""></Link></li>
            <li><Link to="Products">Prodecut</Link></li>
            <li><Link to="Contact">Contact</Link></li>
            <li><Link to="About">About</Link></li>
            <li><Link to="Profile">Profile</Link></li>
            <li><Link to="Result">Result</Link></li>
            <li><Link to="SignIn">SignIn</Link></li>
        </ul>
      
</nav>



</header>
       
       
       
       
<Outlet/>
       


       </>
        
        
        
        
        
            );
        
};

export default Header;