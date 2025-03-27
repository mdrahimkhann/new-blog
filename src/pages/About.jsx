

const About = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-4 h-screen w-screen text-center items-center  sm:p-5">
     
    <div>
    <div className='border min-h-96  bg-slate-400 '>
      <div className=" items-center justify-center text-center m-20 text-white rounded-md">
      <h1 className="">ACHINEVEMENT</h1>
        <p>Lecturer of SEO Department 10/11/2017-06/04/2018
         Matton dikoni College
         Matton, Dikony Road, (Lebanon)</p>

         <p>Lecturer information & Communication Technogy 01/07/2010-11/11/2018
            Matton Dora suhardaf School
           Matton 1234 Matten(Lebanon)
          </p>



         <p>Youtuber, Lecturer of SEO & ICT 28/01/2010-Running
1,94,000 oline student
1500 videoson 17 different computer JUbject</p>
        
      </div>
        
    
      </div>
    </div>



      <div className='bg-green-300 min-h-96 grid grid-cols-1 lg:grid-cols-1 rounded-md'> 
        <h1>CONTACT ME</h1>
        <form action="">
          <input type="text" className="border-2 w-52 m-2 rounded-md border-fuchsia-700 text-center hover:shadow-lg" placeholder="Enter Your Email"/><br />
          <input type="text" className="border-2 w-52 m-2 rounded-md border-fuchsia-700 text-center hover:border-black" placeholder="Enter Your Password"/><br />
          <textarea name="" id="" className="w-52 m-2 border-2 border-fuchsia-700 rounded-md hover:border-black"></textarea><br />
          
         <div className=" sm:grid-cols-2 text-center lg:flex-row justify-around">
         <button className="border m-4 border-black w-20 rounded-md bg-success hover:bg-gray-400">Submit</button>
         <button className="border  border-black w-20 rounded-md bg-success hover:bg-gray-400">Reset</button>
         </div>


        </form>

      </div>
      <div className="bg-green-300 min-h-96 w-30  hover:shadow-yellow-950 rounded-md">
        <h1>MORE TO WAYA CONTACT</h1>
        <button>Click for Location</button>
        

      </div>
      
    </div>
  );
};

export default About;