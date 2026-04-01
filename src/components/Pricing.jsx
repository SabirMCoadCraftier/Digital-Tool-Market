import { toast } from 'react-toastify';

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '0',
      desc: 'Perfect for getting started',
      features: ['Access to 10 free tools', 'Basic templates', 'Community support', '1 project per month'],
      isPopular: false
    },
    {
      name: 'Pro',
      price: '29',
      desc: 'Best for professionals',
      features: ['Access to all premium tools', 'Unlimited templates', 'Priority support', 'Unlimited projects', 'Cloud sync', 'Advanced analytics'],
      isPopular: true
    },
    {
      name: 'Enterprise',
      price: '99',
      desc: 'For teams and businesses',
      features: ['Everything in Pro', 'Team collaboration', 'Custom integrations', 'Dedicated support', 'SLA guarantee', 'Custom branding'],
      isPopular: false
    }
  ];

  const handlePlanSelection = (planName) => {
    if (planName === 'Enterprise') {
      toast.info("Redirecting to support for Enterprise plan...", { position: "top-center" });
    } else {
      toast.success(`You have selected the ${planName} plan!`, { position: "top-center" });
    }
  };

  return (
    <div className="py-24" style={{ background: '#F9FAFC' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4 tracking-tight" style={{ color: '#101727' }}>
            Simple, Transparent Pricing
          </h2>
          <p className="text-base max-w-xl mx-auto leading-relaxed" style={{ color: '#627382' }}>
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="relative rounded-[2.5rem] p-10 flex flex-col transition-all duration-300 w-full h-full hover:-translate-y-1 cursor-pointer"
              style={{
                maxWidth: '380px',
                background: plan.isPopular ? 'linear-gradient(135deg, #8B2CFF 0%, #7C3AED 100%)' : '#EEEEF5',
                border: plan.isPopular ? '2px solid #8B2CFF' : '2px solid #E2E3EC',
                boxShadow: plan.isPopular
                  ? '0 20px 60px rgba(139, 44, 255, 0.3)'
                  : '0 2px 16px rgba(0,0,0,0.05)',
                color: plan.isPopular ? '#FFFFFF' : '#101727',
                zIndex: plan.isPopular ? 10 : 1,
              }}
            >
              {plan.isPopular && (
                <span
                  className="absolute -top-4 left-1/2 -translate-x-1/2 text-[10px] font-bold px-5 py-1.5 rounded-full uppercase tracking-wider whitespace-nowrap"
                  style={{ background: '#FFEFD2', 
                           color: '#B45309', 
                           border: '1px solid #FDE68A' 
                          }}
                 >
                  Most Popular
                </span>
              )}

              <h3 className="text-2xl font-bold mb-1" style={{ color: plan.isPopular ? '#FFFFFF' : '#101727' }}>
                {plan.name}
              </h3>

              <p className="text-sm mb-8" style={{ color: plan.isPopular ? 'rgba(255,255,255,0.65)' : '#627382' }}>
                {plan.desc}
              </p>

              <div className="mb-8 flex items-baseline">
                <span className="text-5xl font-extrabold" style={{ color: plan.isPopular ? '#FFFFFF' : '#101727' }}>
                  ${plan.price}
                </span>
                <span className="text-xl font-medium" style={{ color: plan.isPopular ? 'rgba(255,255,255,0.5)' : '#627382' }}>
                  /Month
                </span>
              </div>

              <div className="space-y-4 mb-10 flex-1">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm">
                    <svg
                      className="w-5 h-5 shrink-0"
                      style={{ 
                         color: plan.isPopular ? '#FFFFFF' : '#30B868' 
                        }}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                    <span style={{ 
                        color: plan.isPopular ? '#FFFFFF' : '#627382', 
                        fontWeight: plan.isPopular ? 500 : 400 
                        }}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => handlePlanSelection(plan.name)}
                className="mt-auto w-full py-4 rounded-full font-bold text-sm transition-all duration-300"
                style={
                  plan.isPopular
                    ? { background: '#FFFFFF', color: '#8B2CFF', boxShadow: '0 4px 14px rgba(0,0,0,0.1)', cursor: 'pointer' }
                    : { background: 'linear-gradient(135deg, #7C3AED, #6D28D9)', color: '#FFFFFF', boxShadow: '0 8px 24px rgba(124,58,237,0.25)', cursor: 'pointer' }
                }
              >
                {plan.name === 'Enterprise' ? 'Contact Sales' : plan.isPopular ? 'Start Pro Trial' : 'Get Started Free'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}