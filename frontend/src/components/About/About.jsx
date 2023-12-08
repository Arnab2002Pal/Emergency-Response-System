import aboutImg from '../../assets/images/about.png'
import aboutCardImg from '../../assets/images/about-card.png'
import {Link} from 'react-router-dom'

const About = () => {
  return (
    <section>
        <div className="container">
            <div className='flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row'>
                {/* About Img */}
                <div className='relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1'>
                    <img src={aboutImg} />
                    <div className='absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]'>
                      <img src={aboutCardImg} alt="" />
                    </div>
                </div>

                {/* About content */}
                <div className='w-full mt-7 text-center lg:w-1/2 xl:w-[670px] order-1 lg:order-2'>
                  <h2 className='heading'>
                    Nations Best Super Doc
                  </h2>
                  <p className='text__para'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, laborum nemo aperiam nobis voluptate odit unde neque blanditiis fugiat laboriosam veritatis quo delectus fugit voluptas accusantium tempora quam iusto quasi?
                  </p>
                  <p className="text__para mt-[30px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sunt sed laborum assumenda exercitationem blanditiis voluptas sequi sapiente dolorem numquam, quis possimus quae ad necessitatibus amet mollitia pariatur unde laboriosam!</p>

                  <Link to='/'><button className="btn">Learn More</button></Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
