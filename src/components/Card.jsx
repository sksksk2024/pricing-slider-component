import { useState } from 'react'
import Yes from './../images/icon-check.svg'

function Card() {
  const [isYearly, setIsYearly] = useState(false)
  const [sliderValue, setSliderValue] = useState(2);

  const pricingData = [
    { views: "20K", monthly: "$8.00", yearly: "$72.00"},
    { views: "100K", monthly: "$16.00", yearly: "$144.00"},
    { views: "300K", monthly: "$32.00", yearly: "$288.00"},
  ]

  const togglePlan = () => {
    setIsYearly(!isYearly);
  }

  const handleSliderChange = (e) => {
    setSliderValue(e.target.value);
  }

  const currentPlan = pricingData[sliderValue - 1];

  return (
    <div className="max-w-600MW text-center flex-col bg-white rounded-10BR p-32P shadow-2xl z-10 relative">
      <p className="tracking-widest mb-16M text-grayish-blue font-bold">{currentPlan.views} Pageviews</p>
      
      <input 
        type="range" 
        min="1" 
        max="3" 
        step="1" 
        className="w-full appearance-none h-2 bg-light-grayish-blue rounded-lg outline-none cursor-pointer relative"
        style={{
          background: `linear-gradient(to right, #a3ffac ${(sliderValue - 1) * 50}%, #ececec ${(sliderValue - 1) * 50}%)`
        }}
        onChange={handleSliderChange} 
        value={sliderValue} 
      />

      <h1 className="flex justify-center items-center gap-2 text-dark-desaturated-blue font-bold text-2xl">{isYearly ? currentPlan.yearly : currentPlan.monthly } <span className="text-grayish-blue font-semibold text-sm">/ {isYearly ? 'yearly' : 'monthly'}</span> </h1>
      
      <div className="flex lg:justify-end gap-4 text-sm font-semibold">
        <p>Monthly Billing</p>
        <input
            type="checkbox"
            className="toggle toggle-primary hover:opacity-30"
            checked={isYearly}
            onChange={togglePlan}
          />
        <p className='flex'>Yearly Billing
          <span className="ml-10M px-3 py-0.5 rounded-full text-xs text-light-red text-center my-auto font-bold bg-light-grayish-red flex justify-center items-center gap-1">-25% <span className='hidden lg:block'>discount</span> </span>
        </p>
      </div>

      <hr className="my-32M" />

      <div className="flex gap-2 flex-col items-center justify-center text-grayish-blue text-sm font-semibold">

        <div className="flex flex-row gap-4 items-center justify-center">
          <img src={Yes} alt="checked" />
          Unlimited websites
        </div>

        <div className="flex flex-row gap-4 items-center justify-center">
          <img src={Yes} alt="checked" />
          100% data ownership
        </div>

        <div className="flex flex-row gap-4 items-center justify-center">
          <img src={Yes} alt="checked" />
          Email reports
        </div>

      </div>

      <button className="mt-32M mb-16M p-16P text-pale-blue cursor-pointed bg-dark-desaturated-blue rounded-full w-4/5">
        Start my trial
      </button>

    </div>
  )
}

export default Card
