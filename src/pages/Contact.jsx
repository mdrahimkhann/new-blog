import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const Contact = () => {

  const Navigate = useNavigate();

  const handleGotoHome = () =>{
      Navigate('/Signin')
  }

  return (
 <>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <button className="bg-green-100 border w-10/12 my-4 lg:w-80 rounded-md p-2 hover:bg-green-300" onClick={handleGotoHome}>Go to Home </button>
      <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Contact Us</h2>
        
        {/* Contact Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input type="text" placeholder="Full Name" className="p-3 border border-gray-300 rounded-md" required />
          <input type="email" placeholder="Email Address" className="p-3 border border-gray-300 rounded-md" required />
          <input type="text" placeholder="Subject" className="p-3 border border-gray-300 rounded-md col-span-2" required />
          <textarea placeholder="Your Message" rows="4" className="p-3 border border-gray-300 rounded-md col-span-2" required></textarea>
          <button type="submit" className="col-span-2 bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition">Send Message</button>
        </form>
        
        {/* Contact Information */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="flex flex-col items-center">
            <FaPhoneAlt className="text-blue-500 text-2xl mb-2" />
            <p className="text-gray-700">+123 456 7890</p>
          </div>
          <div className="flex flex-col items-center">
            <FaEnvelope className="text-blue-500 text-2xl mb-2" />
            <p className="text-gray-700">contact@example.com</p>
          </div>
          <div className="flex flex-col items-center">
            <FaMapMarkerAlt className="text-blue-500 text-2xl mb-2" />
            <p className="text-gray-700">New York, USA</p>
          </div>
        </div>
      </div>
    </div>
   <Footer/>
 
 
 </>
  );
};

export default Contact;

