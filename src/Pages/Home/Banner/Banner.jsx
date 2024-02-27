import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/5.jpg'
import img6 from '../../../assets/images/banner/6.jpg'

const Banner = () => {
    const topContent = <div className="absolute h-full pl-3 md:pl-10 flex items-center w-4/5 sm:w-3/5 lg:w-2/5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)]">
        <div className='text-white space-y-3 sm:space-y-7'>
            <h1 className='text-2xl sm:text-4xl md:text-6xl font-bold'>Affordable Price For Car Servicing</h1>
            <p className='w-4/5 text-xs sm:text-lg'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div>
                <button className="btn bg-[#FF3811] text-white font-bold text-xl mr-4 border-none mb-2 sm:mb-0">Discover More</button>
                <button className="btn btn-outline text-white font-bold text-xl">Latest Project</button>
            </div>
        </div>
    </div>

    return (
        <div className='my-10'>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img1} className="w-full" />
                    {topContent}
                    <div className="absolute flex justify-end transform -translate-y-1/2 right-10 lg:right-32 bottom-0 lg:bottom-20">
                        <a href="#slide6" className="btn btn-circle mr-5 hover:bg-[#FF3811] hover:text-white border-none">❮</a>
                        <a href="#slide2" className="btn btn-circle hover:bg-[#FF3811] hover:text-white border-none">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img2} className="w-full" />
                    {topContent}
                    <div className="absolute flex justify-end transform -translate-y-1/2 right-10 lg:right-32 bottom-0 lg:bottom-20">
                        <a href="#slide1" className="btn btn-circle hover:bg-[#FF3811] hover:text-white border-none mr-5">❮</a>
                        <a href="#slide3" className="btn btn-circle hover:bg-[#FF3811] hover:text-white border-none">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img3} className="w-full" />
                    {topContent}
                    <div className="absolute flex justify-end transform -translate-y-1/2 right-10 lg:right-32 bottom-0 lg:bottom-20">
                        <a href="#slide2" className="btn btn-circle hover:bg-[#FF3811] hover:text-white border-none mr-5">❮</a>
                        <a href="#slide4" className="btn btn-circle hover:bg-[#FF3811] hover:text-white border-none">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={img4} className="w-full" />
                    {topContent}
                    <div className="absolute flex justify-end transform -translate-y-1/2 right-10 lg:right-32 bottom-0 lg:bottom-20">
                        <a href="#slide3" className="btn btn-circle hover:bg-[#FF3811] hover:text-white border-none mr-5">❮</a>
                        <a href="#slide5" className="btn btn-circle hover:bg-[#FF3811] hover:text-white border-none">❯</a>
                    </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full">
                    <img src={img5} className="w-full" />
                    {topContent}
                    <div className="absolute flex justify-end transform -translate-y-1/2 right-10 lg:right-32 bottom-0 lg:bottom-20">
                        <a href="#slide4" className="btn btn-circle hover:bg-[#FF3811] hover:text-white border-none mr-5">❮</a>
                        <a href="#slide6" className="btn btn-circle hover:bg-[#FF3811] hover:text-white border-none">❯</a>
                    </div>
                </div>
                <div id="slide6" className="carousel-item relative w-full">
                    <img src={img6} className="w-full" />
                    {topContent}
                    <div className="absolute flex justify-end transform -translate-y-1/2 right-10 lg:right-32 bottom-0 lg:bottom-20">
                        <a href="#slide5" className="btn btn-circle hover:bg-[#FF3811] hover:text-white border-none mr-5">❮</a>
                        <a href="#slide1" className="btn btn-circle hover:bg-[#FF3811] hover:text-white border-none">❯</a>
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#slide1" className="btn btn-xs">1</a>
                <a href="#slide2" className="btn btn-xs">2</a>
                <a href="#slide3" className="btn btn-xs">3</a>
                <a href="#slide4" className="btn btn-xs">4</a>
                <a href="#slide5" className="btn btn-xs">5</a>
                <a href="#slide6" className="btn btn-xs">6</a>
            </div>
        </div>
    );
};

export default Banner;