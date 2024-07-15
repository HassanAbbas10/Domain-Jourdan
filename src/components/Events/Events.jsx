import { Fragment } from "react"
import ResIcon from '../../Logos/RES.svg'
import rightArrow from '../../Logos/rightArrow.svg'
const Events = () => {
  return (
    <Fragment>  
    <div className="py-8 px-4 mx-auto max-w-screen-[1360px] text-center lg:py-16 lg:px-12">
    <div className="flex flex-col justify-center items-center">
      <h1 className="uppercase mb-4 text-2xl font-quicksand leading-4 tracking-wide">
      Événements
      </h1>
      <img
        className="flex items-center justify-center"
        src={ResIcon}
        alt="ResIcon"
        width={200}
      />
    </div>
    <div className=''>
     
    BLOG
CONTACT
CONTENT
CTA
ECOMMERCE
FEATURE
FOOTER
GALLERY
HEADER
HERO
PRICING
STATISTIC
STEP
TEAM
TESTIMONIAL
Copied!

<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col">
      <div className="h-1 bg-gray-200 rounded overflow-hidden">
        <div className="w-24 h-full bg-indigo-500"></div>
      </div>
     
    </div>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
      <h1 className="uppercase font-quicksand text-lg py-12">Séminaires</h1>
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1203x503" />
        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Shooting Stars</h2>
        <p className="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
        <a className="text-indigo-500 inline-flex items-center mt-3">Learn More
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      
    </div>
  </div>
</section>



        </div> 

        <div>
        <button className="flex mx-auto font-semibold pt-10 text-custom-brown  border-0 x-5">
                    <span className="text font-quicksand">VOIR TOUTES LES PHOTOS</span>
                    <img
                      className="ml-2"
                      width={30}
                      src={rightArrow}
                      alt="arrow"
                    />
                  </button>
        </div>
    </div>
    </Fragment>
  )
}

export default Events