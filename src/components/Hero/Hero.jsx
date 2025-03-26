import logo from '../../assets/medbeat_1.gif'
export default function Hero() {
    return (
      <section className="bg-gray-100 py-16 md:py-24">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="text-green-600 font-bold mb-4 animate-fadeInLeft">
              <a href="/contact-us" className="hover:underline">At Just ₹10 Per Patient</a>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-800">
              3X faster your consultation with<br />
              MedBeat HealthConnect
            </h1>
            <ul className="flex flex-wrap gap-4 mb-6">
              <li className="text-gray-700">Appointment Booking |</li>
              <li className="text-gray-700">Differential Diagnosis |</li>
              <li className="text-gray-700">AI-Generated Medical Summary</li>
            </ul>
            <p className="text-gray-700 mb-8">
              With limited time and large number of patients, the medical institutions are hard pressed for time. 
              MedBeat HealthConnect streamlines Appointment, consultations by acting as a Digital Avatar of a Junior Doctor 
              and uses AI to revolutionize patient assessment.
            </p>
            <a 
              href="/book-demo" 
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full inline-flex items-center transition-colors"
            >
              Book Demo
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src={logo} 
              alt="MedBeat HealthConnect" 
              width={600} 
              height={506}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    );
  }