
const About = () => {
    return (
        <div className="bg-gray-600 w-screen h-screen ">
           <nav className="bg-gray-600 shadow-xl sticky top-0 z-10">
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
              <button className="bg-indigo-600 mt-10 px-7 py-30 rounded-full text-xl shadow-xl hover:bg-indigo-700 transition" >Progmming Leaned <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 inline-block text-red-500 ml-2 animate-ping">
               <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg></button>
            </div>

            <div className=" text-center">
                <img className="animate-pulse " src="https://th.bing.com/th/id/OIP.twwWP_emayn8n8HPrgBD8AHaHa?w=189&h=189&c=7&r=0&o=5&pid=1.7" alt="" />
            </div>

           </div>
             {/* this is my our Services start here */}
             


             <main className="container text-black">

                 <section className="text-black w-screen mt-2 bg-slate-400">
                    <h1 className="text-black text-center border mt-11 justify-between p-10 text-3xl w-screen">Our Services</h1>
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
                        <img className="w-50 border rounded-md border-gray-500 mx-auto " src="data:image/jpeg;base64,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" alt="" />
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






           </div>

            
        </div>
    );
};

export default About;