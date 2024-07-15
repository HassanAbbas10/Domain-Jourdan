import ResIcon from '../../Logos/RES.svg'

const Gallery = () => {
  return (
    <>  
    <div className="py-8 px-4 mx-auto max-w-screen-[1360px] text-center lg:py-16 lg:px-12">
    <div className="flex flex-col justify-center items-center">
      <h1 className="mb-4 text-2xl font-quicksand leading-4 tracking-wide">
        PHOTO DU<span className="text-custom-brown">DOMAIN</span>
      </h1>
      <img
        className="flex items-center justify-center"
        src={ResIcon}
        alt="ResIcon"
        width={200}
      />
    </div>
    </div>
    </>
  )
};

export default Gallery