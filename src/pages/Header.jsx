import { Outlet } from "react-router-dom";


const Header = () => {
    return (
        <div>
                 <nav className="bg-gray-600 shadow-xl sticky top-0 z-10 w-screen">
           <div className="container mx-auto">

              <div className="sm:flex  justify-between  text-center py-5">

                  <div className="mt-2 md-10">
                   <a href="#" className="text-white mt-5 md-5"><span className="text-[#f65023] font-bold m-1 text-3xl">G</span>OYAL KHA <span className="text-[#f65023] font-bold text-2xl">LA</span></a>
                  </div>

                  <ul className="sm:flex text-2xl text-white border-t sm:border-none">
                    <li className="border border-fuchsia-300 lg:border-none m-3 rounded-md hover:border-fuchsia-600"><a href="Products" className="p-3 text-[#f65023]">Products</a></li>
                    <li className="border border-fuchsia-300 lg:border-none m-3 rounded-md hover:border-fuchsia-600"><a href="Contact" className="p-3  hover:text-[#f65023]">Contact</a></li>
                    <li className="border border-fuchsia-300 lg:border-none m-3 rounded-md hover:border-fuchsia-600"><a href="About" className=" p-3 hover:text-[#f65023]">About</a></li>
                    <li className="border border-fuchsia-300 lg:border-none m-3 rounded-md hover:border-fuchsia-600"><a href="Profile" className="p-3 hover:text-[#f65023]">Protfloio</a></li>
                    <li className="border border-fuchsia-300 lg:border-none m-3 rounded-md hover:border-fuchsia-600"><a href="Result" className=" p-3 hover:text-[#f65023]">Contact</a></li>
                    <li className="border border-fuchsia-300 lg:border-none m-3 rounded-md hover:border-fuchsia-600"><a href="SignIn" className=" p-3 hover:text-[#f65023]">SignIn</a></li>
              



               

                  </ul>

              </div>

           </div>
            
           </nav>

           <Outlet></Outlet>
        </div>
    );
};

export default Header;













// import { Link, Outlet } from "react-router-dom";

// const Header = () => {
//     return (
//        <>
//         <header className='navber'>


// <div className='navber-brand'>
//    <Link to='SignIn'><Link to='SignIn'>  <img className="rounded-sm" src="https://media.licdn.com/dms/image/v2/D4E03AQECsodJ_cBUzw/profile-displayphoto-shrink_200_200/B4EZV.3Qw7HMAY-/0/1741590171290?e=1747267200&v=beta&t=Wj7P_IJxXPURyTxlyDyqmal1DIaN62FPB1QZWlj-Amw" alt="Placeholder"/></Link></Link>
//  </div>



        

// <nav className='navber_links'>
//         <ul>

//             <li><Link to=""></Link></li>
//             <li><Link to="Products">Prodecut</Link></li>
//             <li><Link to="Contact">Contact</Link></li>
//             <li><Link to="About">About</Link></li>
//             <li><Link to="Profile">Profile</Link></li>
//             <li><Link to="Result">Result</Link></li>
//             <li><Link to="SignIn">SignIn</Link></li>
//         </ul>
      
// </nav>



// </header>
       
       
       
       
// <Outlet/>
       


//        </>
        
        
        
        
        
//             );
        
// };

// export default Header;