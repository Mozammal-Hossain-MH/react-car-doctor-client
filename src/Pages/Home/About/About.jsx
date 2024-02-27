import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div id='about-us' className="hero min-h-screen bg-white my-10">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src={person} className="rounded-lg shadow-2xl w-3/4" />
                    <img src={parts} className="rounded-lg shadow-2xl w-1/2 absolute left-1/3 top-1/2 border-8 border-white" />
                </div>
                <div className='lg:w-1/2 space-y-6'>
                    <p className='text-xl font-bold text-[#FF3811]'>About Us</p>
                    <h1 className="text-4xl font-bold md:w-2/3">We are qualified & of experience in this field</h1>
                    <p className='text-[#737373]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which {"don't"} look even slightly believable. </p>
                    <p className='text-[#737373]'>the majority have suffered alteration in some form, by injected humour, or randomised words which {"don't"} look even slightly believable. </p>
                    <button className="btn bg-[#FF3811] text-white border-none">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;