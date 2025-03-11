
const About = () => {
    return (
        <div className="bg-gray-600 w-screen h-screen">
           <nav className="bg-gray-600 shadow-xl">
           <div className="container mx-auto">

              <div className="sm:flex  justify-between  text-center py-5">

                  <div className="mt-4">
                   <a href="#" className="text-white"><span className="text-[#f65023] font-bold m-1 text-2xl">G</span>OYAL KHA <span className="text-[#f65023] font-bold text-2xl">LA</span></a>
                  </div>

                  <ul className="sm:flex text-2xl text-white border-t sm:border-none">
                    <li className="mt-4 sm:mt-0"><a href="#" className="p-3 text-[#f65023]">Home</a></li>
                    <li><a href="#" className="p-3 hover:text-[#f65023]">Products</a></li>
                    <li><a href="#" className=" p-3 hover:text-[#f65023]">Blogs</a></li>
                    <li><a href="#" className="p-3 hover:text-[#f65023]">Protfloio</a></li>
                    <li><a href="#" className=" p-3 hover:text-[#f65023]">Contact</a></li>
              

                  </ul>

              </div>

           </div>
            
           </nav>
            
        </div>
    );
};

export default About;