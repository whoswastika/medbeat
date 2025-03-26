import logo1 from '../../assets/howItWorks1.webp'
import logo2 from '../../assets/howItWorks2.webp'
export default function HowItWorks() {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img 
                src={logo1} 
                alt="How MedBeat Works" 
                className="w-full h-auto rounded"
              />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img 
                src={logo2}
                alt="Doctor using MedBeat" 
                className="w-full h-auto rounded"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }