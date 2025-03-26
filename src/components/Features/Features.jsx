export default function Features() {
    const features = [
      {
        icon: 'whatsapp',
        title: 'WhatsApp AI-enabled',
        description: 'With MedBeat HealthConnect, you get an AI-enabled WhatsApp number which asks questions, book appointments & keep records.'
      },
      {
        icon: 'doctor',
        title: 'Junior Doctor AI-enabled',
        description: 'With MedBeat HealthConnect, digital Avatar of Junior Doctor will ask accurate questions with zero deviation.'
      },
      {
        icon: 'medical',
        title: 'Recommends Test AI-enabled',
        description: 'After the summary generation, MedBeat HealthConnect guides for tests required after summary generation.'
      },
      {
        icon: 'calendar',
        title: 'Appointment Booking',
        description: 'With MedBeat HealthConnect, your patients can book appointment on WhatsApp without any human intervention.'
      },
      {
        icon: 'money',
        title: 'Payment Handling',
        description: 'With MedBeat HealthConnect, your patients can seamlessly pay for your appointment using either cash or online.'
      },
      {
        icon: 'notes',
        title: 'Medical History',
        description: 'Our Chatbot has ability to let patient upload past medical history which makes it easier for you to access medical records.'
      }
    ];
  
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm mb-2">At Just</p>
            <p className="text-2xl font-bold text-primary mb-2">₹10 Per Patient</p>
            <p className="text-sm">You Get:</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="flex items-start mb-4">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-full mr-4">
                    <IconComponent name={feature.icon} className="text-primary text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-blue-800">
                      {feature.title}
                      {feature.title.includes('AI-enabled') && (
                        <span className="ml-2 bg-primary text-white text-xs px-2 py-1 rounded">
                          AI-enabled
                        </span>
                      )}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  // Simple icon component (you can replace with actual icons)
  function IconComponent({ name, className }) {
    const icons = {
      whatsapp: '💬',
      doctor: '👨‍⚕️',
      medical: '🏥',
      calendar: '📅',
      money: '💰',
      notes: '📝'
    };
    
    return <span className={className}>{icons[name] || '✨'}</span>;
  }