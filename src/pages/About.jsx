
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
   {/* THIS IS MY HERO SECTION START HERE */}
       <div>


           <div className="container sm:flex  text-white mx-auto justify-around items-center text-center border border-indigo-600 border-t-0 h-[80vh] ">
            <div>
              <h1 className="text-2xl sm:text-5xl md-5 sm:md-16">Learn something <br /> new Coding </h1>
              <button className="bg-indigo-600 mt-10 px-7 py-30 rounded-full text-xl shadow-xl hover:bg-indigo-700" >Progmming Leaned <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 inline-block text-red-500 ml-2 animate-ping">
               <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg></button>
            </div>

            <div className=" text-center">
                <img className="animate-pulse " src="https://th.bing.com/th/id/OIP.twwWP_emayn8n8HPrgBD8AHaHa?w=189&h=189&c=7&r=0&o=5&pid=1.7" alt="" />
            </div>


           </div>







           </div>

            
        </div>
    );
};

export default About;