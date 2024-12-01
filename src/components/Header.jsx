import Circle from './../images/pattern-circles.svg'
import bg from './../images/bg-pattern.svg'

function Header() {
  return (
    <header>
      <img className='absolute left-0 top-0 w-screen h-1/2 z-1' src={bg} alt="" />
      <div className='relative text-center mx-auto flex flex-col justify-center items-center'>
        <h1 className='text-dark-desaturated-blue font-bold text-lg sm:text-xl lg:text-2xl mb-16M z-10'>Simple, traffic-based pricing</h1>
        <p className='text-xs sm:text-sm lg:text-md z-10'>
          Sign-up for our 30-day trial. No credit card required.
        </p>
        <img className='relative bottom-96I z-1' src={Circle} alt="circle design" />
      </div>

    </header>
  )
}

export default Header
