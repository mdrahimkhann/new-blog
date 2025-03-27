import { useEffect } from 'react';

import AOS from "aos";
import "aos/dist/aos.css";
import Footer from './Footer';
const Home = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
    return (
<>

      
    <div className="min-h-screen bg-gray-100 text-gray-800"> 
      {/* Hero Section */}
      {/* <div className="bg-blue-600 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="mt-2 text-lg">Learn more about our mission and team</p>
      </div> */}

      {/* About Section */}
      <div className="w-screen mx-auto px-6 py-12 bg-slate-300 ">
        <h2 className="text-2xl font-semibold text-center mb-4">Who We Are</h2>
        <p className="text-gray-700 text-center">
          We are a team of passionate developers dedicated to creating amazing web applications. Our goal is to build seamless and efficient digital solutions for our clients.
        </p>
      </div>

      {/* Team Section */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold text-center mb-4">Meet Our Team</h2>
         <div className="grid md:grid-cols-3 gap-6">
         
          <div className="bg-white p-4 rounded-lg shadow-lg text-center  border-fuchsia-600 hover:border-black border-4" data-aos="fade-right">
            <img src="https://th.bing.com/th/id/OIP.9nbEolRpiacxP-esWU-yDwHaHa?w=186&h=186&c=7&r=0&o=5&pid=1.7" alt="Team Member" className="mx-auto rounded-full" />
            <h3 className="mt-2 text-lg font-semibold">John Doe</h3>
            <p className="text-gray-600">CEO & Founder</p>
          </div>




          <div data-aos="zoom-in"  className="bg-white p-4 rounded-lg shadow-lg text-center border-fuchsia-600 hover:border-black border-4">
            <img src="https://th.bing.com/th/id/OIP.9nbEolRpiacxP-esWU-yDwHaHa?w=186&h=186&c=7&r=0&o=5&pid=1.7" alt="Team Member"  className="mx-auto rounded-full"/>
            <h3 className="mt-2 text-lg font-semibold">Jane Smith</h3>
            <p className="text-gray-600">Lead Developer</p>
          </div>


          <div className="bg-white p-4 rounded-lg shadow-lg text-center  border-fuchsia-600 hover:border-black border-4"  data-aos="fade-left">
            <img src="https://th.bing.com/th/id/OIP.9nbEolRpiacxP-esWU-yDwHaHa?w=186&h=186&c=7&r=0&o=5&pid=1.7" alt="Team Member" className="mx-auto rounded-full" />
            <h3 className="mt-2 text-lg font-semibold">Alice Johnson</h3>
            <p className="text-gray-600">Designer</p>
          </div>


        </div>
      </div>



 
    </div>
    
      
      
      
                   <main className="container text-black">
      
                       <section className="text-black w-screen mt-2 bg-slate-400">
                          <h1 className="text-black text-center  mt-11 justify-between p-10 text-3xl w-screen">Our Services</h1>
                          <div className="w-screen grid sm:grid-cols-2 lg:grid-cols-3">
                        
                        
                        
                          <div className="text-center shadow-2xl bg-fuchsia-00 border border-fuchsia-600 m-5 p-5 rounded-md hover:border-white text-black" data-aos="fade-right">
                              <img className="w-50 border rounded-md border-gray-500 mx-auto " src="https://th.bing.com/th/id/OIP.COOYF04dMjRiyBXXJD1kDgHaDt?w=336&h=175&c=7&r=0&o=5&pid=1.7" alt="" />
                              <h4 className="text-white text-3xl underline underline-offset-8 my-5">Front End Development</h4>
                              <p className="text-white ">Lorem ipsum dolor sit amet consectetursapiente quas itaque vero deserunt possimus nam dignissimos nemo!</p>
                            </div>
      
      
      
                            <div className="text-center shadow-2xl border border-fuchsia-600 m-5 p-5 rounded-md hover:border-white" data-aos="zoom-in">
                              <img className="w-50 border rounded-md border-gray-500 mx-auto " src="https://th.bing.com/th/id/OIP.rDbrm_zyL6cp4IlhpcRpNwHaDt?w=324&h=180&c=7&r=0&o=5&pid=1.7" alt="" />
                              <h4 className="text-white text-3xl underline underline-offset-8 my-5">Back End Development</h4>
                              <p className="text-white ">Lorem ipsum dolor sit amet consectetursapiente quas itaque vero deserunt possimus nam dignissimos nemo!</p>
                            </div>
      
      
      
      
      
      
                            <div className="text-center shadow-2xl border border-fuchsia-600 m-5 p-5 rounded-md hover:border-white"  data-aos="fade-left">
                              <img className="w-50 border rounded-md border-gray-500 mx-auto " src="https://th.bing.com/th?id=OIF.2tQKw%2f75hyHogtySNeOMcg&w=299&h=180&c=7&r=0&o=5&pid=1.7" alt="" />
                              <h4 className="text-white text-3xl underline underline-offset-8 my-5">javascript Complete Couras</h4>
                              <p className="text-white ">Lorem ipsum dolor sit amet consectetursapiente quas itaque vero deserunt possimus nam dignissimos nemo!</p>
                            </div>
      
      
      
      
                            <div className="text-center shadow-2xl border border-fuchsia-600 m-5 p-5 rounded-md hover:border-white" data-aos="fade-right">
                              <img className="w-50 border rounded-md border-gray-500 mx-auto " src="https://th.bing.com/th?id=OIF.N4EUg81epu7z%2bUpMslI5qw&w=326&h=182&c=7&r=0&o=5&pid=1.7" alt="" />
                              <h4 className="text-white text-3xl underline underline-offset-8 my-5">Reactjs Complete Course</h4>
                              <p className="text-white ">Lorem ipsum dolor sit amet consectetursapiente quas itaque vero deserunt possimus nam dignissimos nemo!</p>
                            </div>
      
      
      
                            <div className="text-center shadow-2xl border border-fuchsia-600 m-5 p-5 rounded-md hover:border-white" data-aos="zoom-in">
                              <img className="w-50 border rounded-md border-gray-500 mx-auto " src="https://th.bing.com/th/id/OIP.htQ__m0E2P0XuxSSQelBcQHaDZ?w=315&h=160&c=7&r=0&o=5&pid=1.7" alt="" />
                              <h4 className="text-white text-3xl underline underline-offset-8 my-5">Next.js Complete Course</h4>
                              <p className="text-white ">Lorem ipsum dolor sit amet consectetursapiente quas itaque vero deserunt possimus nam dignissimos nemo!</p>
                            </div>
      
      
      
                            <div className="text-center shadow-2xl border border-fuchsia-600 m-5 p-5 rounded-md hover:border-white"  data-aos="fade-left">
                              <img className="w-50 border rounded-md border-gray-500  mx-auto " src="https://th.bing.com/th/id/OIP.iWsHU_6Lw7Ss3zTt95gQZgHaD8?w=307&h=180&c=7&r=0&o=5&pid=1.7" alt="" />
                              <h4 className="text-white text-3xl underline underline-offset-8 my-5">MongoDB for Your Database</h4>
                              <p className="text-white ">Lorem ipsum dolor sit amet consectetursapiente quas itaque vero deserunt possimus nam dignissimos nemo!</p>
                            </div>
      
      
      
      
                          </div>
                       </section>
      
                   </main>
      
      
      
      
              
      
      
      
      <Footer></Footer>
           
      </>
      
        
        

        
    );
};

export default Home;