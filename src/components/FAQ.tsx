import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "I'm not tech-savvy. Can I still use your services?",
      answer: "Absolutely. Our solutions are built to be simple, intuitive, and designed for non-technical teams like HR, operations, marketing, and finance. We guide you through every step. No jargon, no overwhelm."
    },
    {
      question: "Do I need to already use AI tools or software?",
      answer: "Not at all! We work with businesses at every stage of their digital journey. Whether you're just starting to explore AI or looking to optimize existing tools, we'll meet you where you are and help you move forward at your own pace."
    },
    {
      question: "How long does it take to implement a solution?",
      answer: "Implementation timelines vary based on your specific needs and complexity. Simple solutions can be deployed within 1-2 weeks, while more comprehensive systems typically take 4-8 weeks. We'll provide a clear timeline during our initial consultation."
    },
    {
      question: "What industries do you work with?",
      answer: "We work across various industries including healthcare, finance, retail, manufacturing, education, and professional services. Our solutions are adaptable and can be customized to meet the unique requirements of your specific industry."
    },
    {
      question: "Is this secure? Will my data be safe?",
      answer: "Security is our top priority. We implement enterprise-grade security measures including data encryption, secure access controls, and compliance with industry standards like GDPR and SOC 2. Your data remains yours and is never shared with third parties."
    },
    {
      question: "What's the pricing like?",
      answer: "Our pricing is transparent and scalable based on your needs. We offer flexible packages starting from basic implementations to comprehensive enterprise solutions. Contact us for a personalized quote that fits your budget and requirements."
    },
    {
      question: "Can you build something custom for my business?",
      answer: "Yes! We specialize in creating custom solutions tailored to your unique business processes and goals. Our team will work closely with you to understand your requirements and develop a solution that fits perfectly with your workflow."
    },
    {
      question: "What's the first step if I want to get started?",
      answer: "Simply reach out for a free consultation! We'll discuss your current challenges, goals, and explore how our solutions can help. No commitment required – just an honest conversation about how we can support your business growth."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#121212] py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-medium text-white mb-4">
FAQ          </h2>
        
        </div>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="border-b border-gray-800">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left py-6 px-4 flex justify-between items-center hover:bg-black-800/50 transition-colors duration-200 rounded-lg"
              >
                <span className="text-lg font-medium pr-4 text-white">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-4 pb-6 text-neutral-400 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};