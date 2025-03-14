import Footer from "./Footer";

const  products = () => {

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="mt-2 text-lg">Learn more about our mission and team</p>
      </div>

      {/* About Section */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold text-center mb-4">Who We Are</h2>
        <p className="text-gray-700 text-center">
          We are a team of passionate developers dedicated to creating amazing web applications. Our goal is to build seamless and efficient digital solutions for our clients.
        </p>
      </div>

      {/* Team Section */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold text-center mb-4">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-lg text-center border-2 border-fuchsia-600 hover:border-fuchsia-900">
            <img src="https://th.bing.com/th/id/OIP.9nbEolRpiacxP-esWU-yDwHaHa?w=186&h=186&c=7&r=0&o=5&pid=1.7" alt="Team Member" className="mx-auto rounded-full" />
            <h3 className="mt-2 text-lg font-semibold">John Doe</h3>
            <p className="text-gray-600">CEO & Founder</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg text-center border-2 border-fuchsia-600 hover:border-fuchsia-900">
            <img src="https://th.bing.com/th/id/OIP.LGe3lljGzgayf2MXXKsn9AHaE8?w=279&h=186&c=7&r=0&o=5&pid=1.7" alt="Team Member"  className="mx-auto rounded-full"/>
            <h3 className="mt-2 text-lg font-semibold">Jane Smith</h3>
            <p className="text-gray-600">Lead Developer</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg text-center border-2 border-fuchsia-600 hover:border-fuchsia-900">
            <img src="https://th.bing.com/th/id/OIP.9nbEolRpiacxP-esWU-yDwHaHa?w=186&h=186&c=7&r=0&o=5&pid=1.7" alt="Team Member" className="mx-auto rounded-full" />
            <h3 className="mt-2 text-lg font-semibold">Alice Johnson</h3>
            <p className="text-gray-600">Designer</p>
          </div>
        </div>
      </div>



      <Footer/>
    </div>
    
    
  );
};

export default products;
