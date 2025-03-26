import logo from '../../assets/white-1-foot.png';

export default function Footer() {
  const footerLinks = [
    { title: 'Terms of Use', url: '/terms-of-use' },
    { title: 'FAQs', url: '/faqs' },
    { title: 'Jobs', url: '/job-openings' },
    { title: 'Privacy Policy', url: '/privacy-policy' },
    { title: 'Support', url: 'mailto:Doctor@ai4rx.co.in' }
  ];

  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="mb-8 md:mb-0">
            <img 
              src={logo}
              alt="MedBeat HealthConnect" 
              className="w-48 mb-4"
            />
            <p className="text-gray-300">
              MedBeat HealthConnect is a healthcare platform that uses the transformative benefits 
              of artificial intelligence in clinical decision support.
            </p>
          </div>
          
          <div>
            <h5 className="text-lg font-bold mb-4">Contact</h5>
            <ul className="space-y-2">
              <li>
                <a href="mailto:hello@Medbeat.ai" className="flex items-center text-gray-300 hover:text-white">
                  <span className="mr-2">✉️</span> Hello@Medbeat.ai
                </a>
              </li>
              <li>
                <a href="https://api.whatsapp.com/send/?phone=919311617234&text=Hi" className="flex items-center text-gray-300 hover:text-white">
                  <span className="mr-2">📱</span> +91 9311617234
                </a>
              </li>
              <li className="flex items-center text-gray-300">
                <span className="mr-2">📍</span> Delhi, India
              </li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-lg font-bold mb-4">Links</h5>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.url} className="text-gray-300 hover:text-white">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-300">
          <p>Copyright 2024 AI4Rx. All Rights Reserved by Ai4RX Healthcare</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {footerLinks.map((link, index) => (
              <a key={index} href={link.url} className="text-gray-300 hover:text-white">
                {link.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}