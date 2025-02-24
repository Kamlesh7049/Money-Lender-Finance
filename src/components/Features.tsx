import React from 'react';
import { Clock, IndianRupee, Percent, ShieldCheck } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: "Quick Processing",
      description: "Get your loan approved within 24 hours* with minimal documentation"
    },
    {
      icon: <IndianRupee className="h-8 w-8 text-blue-600" />,
      title: "Flexible Loan Amount",
      description: "Borrow anywhere between ₹50,000 to ₹25 Lakhs"
    },
    {
      icon: <Percent className="h-8 w-8 text-blue-600" />,
      title: "Competitive Interest Rates",
      description: "Enjoy interest rates starting from 10.49%* p.a."
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-blue-600" />,
      title: "100% Secure",
      description: "Your data is protected with bank-grade security"
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Personal Loan?</h2>
          <p className="text-gray-600">Experience hassle-free borrowing with our unique benefits</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;