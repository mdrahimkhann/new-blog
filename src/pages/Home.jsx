import Footer from "./Footer";

const Home = () => {
    return (
        <div className="bg-gray-600 w-screen h-screen ">
           {/* <nav className="bg-gray-600 shadow-xl sticky top-0 z-10">
           <div className="container mx-auto">

              <div className="sm:flex  justify-between  text-center py-5">

                  <div className="mt-2 md-10">
                   <a href="#" className="text-white mt-5 md-5"><span className="text-[#f65023] font-bold m-1 text-3xl">G</span>OYAL KHA <span className="text-[#f65023] font-bold text-2xl">LA</span></a>
                  </div>

                  <ul className="sm:flex text-2xl text-white border-t sm:border-none">
                    <li className="border border-fuchsia-300 lg:border-none m-3 rounded-md hover:border-fuchsia-600"><a href="#" className="p-3 text-[#f65023]">Home</a></li>
                    <li className="border border-fuchsia-300 lg:border-none m-3 rounded-md hover:border-fuchsia-600"><a href="#" className="p-3 sm:order-1 hover:text-[#f65023]">Products</a></li>
                    <li className="border border-fuchsia-300 lg:border-none m-3 rounded-md hover:border-fuchsia-600"><a href="#" className=" p-3 hover:text-[#f65023]">Blogs</a></li>
                    <li className="border border-fuchsia-300 lg:border-none m-3 rounded-md hover:border-fuchsia-600"><a href="#" className="p-3 hover:text-[#f65023]">Protfloio</a></li>
                    <li className="border border-fuchsia-300 lg:border-none m-3 rounded-md hover:border-fuchsia-600"><a href="#" className=" p-3 hover:text-[#f65023]">Contact</a></li>
              

                  </ul>

              </div>

           </div>
            
           </nav> */}

   {/* THIS IS MY HERO SECTION START HERE */}
       <div >
       <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <header className="bg-blue-600 text-white text-center py-16">
        <h1 className="text-4xl font-bold">Welcome to Our Website</h1>
        <p className="mt-4 text-lg">Build beautiful web apps with ease</p>
        <button className="mt-6 px-6 py-2 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-200 transition">
          Get Started
        </button>
      </header>

      {/* Features Section */}
      <section className="py-12 px-6 grid md:grid-cols-3 gap-6 text-center items-center">

        <div className="p-6 bg-white shadow rounded-lg  text-center">
          <h2 className="text-xl font-semibold"> Fast Performance</h2>
          <p className="text-gray-600 mt-2">Optimized for speed and efficiency.</p>
        </div>

        <div className="p-6 bg-white shadow rounded-lg text-center">
          <h2 className="text-xl font-semibold text-center">Design</h2>
          <p className="text-gray-600 mt-2">Sleek and intuitive user experience.</p>
        </div>
        <div className="p-6 bg-white shadow rounded-lg">
          <h2 className="text-xl font-semibold"> Secure & Reliable</h2>
          <p className="text-gray-600 mt-2">Built with best security practices.</p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-200 py-12 px-6 text-center">
        <h2 className="text-2xl font-bold">What Our Users Say</h2>
        <p className="text-gray-700 mt-2">This website is amazing! Super easy to use</p>
        <p className="text-gray-700 mt-2">Best experience I ve ever had </p>
      </section>

   
    </div>













{/* 

           <div className="container sm:flex  text-white mx-auto justify-around items-center text-center   h-[80vh] ">
            <div>
              <h1 className="text-2xl sm:text-5xl md-5 sm:md-16">Learn something <br /> new Coding </h1>
              <button className="bg-indigo-600 mt-10 px-7 py-30 rounded-full text-xl shadow-xl hover:bg-indigo-700 transition" >Progmming Leaned <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 inline-block text-red-500 ml-2 animate-ping">
               <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg></button>
            </div>

            <div className=" text-center">
                <img className="animate-pulse " src="https://th.bing.com/th/id/OIP.twwWP_emayn8n8HPrgBD8AHaHa?w=189&h=189&c=7&r=0&o=5&pid=1.7" alt="" />
            </div>

           </div> */}










       {/* <div>


           <div className="container sm:flex  text-white mx-auto justify-around items-center text-center   h-[80vh] ">
            <div>
              <h1 className="text-2xl sm:text-5xl md-5 sm:md-16">Learn something <br /> new Coding </h1>
              <button className="bg-indigo-600 mt-10 px-7 py-30 rounded-full text-xl shadow-xl hover:bg-indigo-700 transition" >Progmming Leaned <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 inline-block text-red-500 ml-2 animate-ping">
               <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg></button>
            </div>

            <div className=" text-center">
                <img className="animate-pulse " src="https://th.bing.com/th/id/OIP.twwWP_emayn8n8HPrgBD8AHaHa?w=189&h=189&c=7&r=0&o=5&pid=1.7" alt="" />
            </div>

           </div> */}
             {/* this is my our Services start here */}
             


             <main className="container text-black">

                 <section className="text-black w-screen mt-2 bg-slate-400">
                    <h1 className="text-black text-center  mt-11 justify-between p-10 text-3xl w-screen">Our Services</h1>
                    <div className="w-screen grid sm:grid-cols-2 lg:grid-cols-3">
                  
                  
                  
                    <div className="text-center shadow-2xl bg-fuchsia-00 border border-fuchsia-600 m-5 p-5 rounded-md hover:border-white text-black">
                        <img className="w-50 border rounded-md border-gray-500 mx-auto " src="https://th.bing.com/th/id/OIP.COOYF04dMjRiyBXXJD1kDgHaDt?w=336&h=175&c=7&r=0&o=5&pid=1.7" alt="" />
                        <h4 className="text-white text-3xl underline underline-offset-8 my-5">Front End Development</h4>
                        <p className="text-white ">Lorem ipsum dolor sit amet consectetursapiente quas itaque vero deserunt possimus nam dignissimos nemo!</p>
                      </div>



                      <div className="text-center shadow-2xl border border-fuchsia-600 m-5 p-5 rounded-md hover:border-white">
                        <img className="w-50 border rounded-md border-gray-500 mx-auto " src="https://th.bing.com/th/id/OIP.rDbrm_zyL6cp4IlhpcRpNwHaDt?w=324&h=180&c=7&r=0&o=5&pid=1.7" alt="" />
                        <h4 className="text-white text-3xl underline underline-offset-8 my-5">Back End Development</h4>
                        <p className="text-white ">Lorem ipsum dolor sit amet consectetursapiente quas itaque vero deserunt possimus nam dignissimos nemo!</p>
                      </div>






                      <div className="text-center shadow-2xl border border-fuchsia-600 m-5 p-5 rounded-md hover:border-white">
                        <img className="w-50 border rounded-md border-gray-500 mx-auto " src="https://th.bing.com/th?id=OIF.2tQKw%2f75hyHogtySNeOMcg&w=299&h=180&c=7&r=0&o=5&pid=1.7" alt="" />
                        <h4 className="text-white text-3xl underline underline-offset-8 my-5">javascript Complete Couras</h4>
                        <p className="text-white ">Lorem ipsum dolor sit amet consectetursapiente quas itaque vero deserunt possimus nam dignissimos nemo!</p>
                      </div>




                      <div className="text-center shadow-2xl border border-fuchsia-600 m-5 p-5 rounded-md hover:border-white">
                        <img className="w-50 border rounded-md border-gray-500 mx-auto " src="https://th.bing.com/th?id=OIF.N4EUg81epu7z%2bUpMslI5qw&w=326&h=182&c=7&r=0&o=5&pid=1.7" alt="" />
                        <h4 className="text-white text-3xl underline underline-offset-8 my-5">Reactjs Complete Course</h4>
                        <p className="text-white ">Lorem ipsum dolor sit amet consectetursapiente quas itaque vero deserunt possimus nam dignissimos nemo!</p>
                      </div>



                      <div className="text-center shadow-2xl border border-fuchsia-600 m-5 p-5 rounded-md hover:border-white">
                        <img className="w-50 border rounded-md border-gray-500 mx-auto " src="https://th.bing.com/th/id/OIP.htQ__m0E2P0XuxSSQelBcQHaDZ?w=315&h=160&c=7&r=0&o=5&pid=1.7" alt="" />
                        <h4 className="text-white text-3xl underline underline-offset-8 my-5">Next.js Complete Course</h4>
                        <p className="text-white ">Lorem ipsum dolor sit amet consectetursapiente quas itaque vero deserunt possimus nam dignissimos nemo!</p>
                      </div>



                      <div className="text-center shadow-2xl border border-fuchsia-600 m-5 p-5 rounded-md hover:border-white">
                        <img className="w-50 border rounded-md border-gray-500  mx-auto " src="https://th.bing.com/th/id/OIP.iWsHU_6Lw7Ss3zTt95gQZgHaD8?w=307&h=180&c=7&r=0&o=5&pid=1.7" alt="" />
                        <h4 className="text-white text-3xl underline underline-offset-8 my-5">MongoDB for Your Database</h4>
                        <p className="text-white ">Lorem ipsum dolor sit amet consectetursapiente quas itaque vero deserunt possimus nam dignissimos nemo!</p>
                      </div>




                    </div>
                 </section>

             </main>





           {/* this is my footer start here  */}
        




           </div>

          <Footer/>


            
        </div>

        
    );
};

export default Home;