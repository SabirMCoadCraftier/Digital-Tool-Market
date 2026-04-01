export default function HowItWorks() {
  const steps = [
    {
      id: '01',
      title: 'Create Account',
      description: 'Sign up for free in seconds. No credit card is required.',
      image: '/src/assets/user.png'
    },
    {
      id: '02',
      title: 'Choose Products',
      description: 'Browse our catalog and select the tools that fit your needs.',
      image: '/src/assets/package.png'
    },
    {
      id: '03',
      title: 'Start Creating',
      description: 'Download and start using your premium tools immediately.',
      image: '/src/assets/rocket.png'
    }
  ];

  return (
    <div className="py-24 bg-[#F0F4FF]">
      <div className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-[#1D1D1F] mb-4 tracking-tight">
            Get Started In 3 Steps
          </h2>
          <p className="text-gray-400 text-sm max-w-md mx-auto leading-relaxed">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.id}
              className="relative bg-white border border-gray-100 rounded-3xl p-10 flex flex-col items-center text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className="absolute top-5 right-5 w-8 h-8 bg-[#6D28D9] text-white rounded-full flex items-center justify-center font-bold text-xs">
                {step.id}
              </div>
              <div className="w-24 h-24 bg-[#F5F3FF] rounded-full flex items-center justify-center mb-8">
                <img src={step.image} alt={step.title} className="w-12 h-12 object-contain" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#1D1D1F]">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}