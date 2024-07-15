import { Fragment } from "react"
import ResIcon from '../../Logos/RES.svg'
import rightArrow from '../../Logos/rightArrow.svg'
const Events = () => {
  return (
    <Fragment>  
    <div className="py-8 px-4 mx-auto max-w-screen-[1360px] text-center lg:py-16 lg:px-12">
    <div className="flex flex-col justify-center items-center">
      <h1 className="mb-4 text-2xl font-quicksand leading-4 tracking-wide">
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