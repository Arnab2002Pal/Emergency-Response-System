import { formateDate } from '../../utils/formatData'

const DoctorAbout = () => {
  return (
    <div>
      <div>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2'>About Of
        <span className='text-irisBlueColor font-bold text-[24px] leading-9'>NameLess Guy</span>
        </h3>
        <p className="text__para">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus voluptas expedita sed numquam ratione nostrum consectetur minus eos nesciunt atque.</p>
        <p className="text__para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quae, eius, quia temporibus voluptates voluptas ipsum odio enim modi rem sapiente voluptatum ducimus. Minima porro corrupti est magnam quasi atque ipsa sequi, id dignissimos praesentium aliquam distinctio iste provident. Necessitatibus.</p>
      </div>

        <div className='mt-12'>
            <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>Qualification</h3>

            <ul className='pt-4 md:p-5'>
                <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                    <div>
                        <span className='text-irisBlueColor text-[15px] leading-6 font--semiBold'>{formateDate("2-13-2006")} - {formateDate("12-01-2010")}</span>
                        <p className='text-[16px] leading-6 font-medium text-textColor'>Phd in Surgeon</p>
                    </div>
                    <p className='text-[14px] leading-5 font-medium text-textColor'>Some Hospital, India</p>
                </li>
                <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                    <div>
                        <span className='text-irisBlueColor text-[15px] leading-6 font--semiBold'>{formateDate("12-04-2010")} - {formateDate("11-04-2014")}</span>
                        <p className='text-[16px] leading-6 font-medium text-textColor'>Phd in Surgeon</p>
                    </div>
                    <p className='text-[14px] leading-5 font-medium text-textColor'>Good Hospital, India</p>
                </li>
            </ul>
        </div>

        <div className='mt-12'>
            <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>Experience</h3>

            <ul className='grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5'>
                <li className='p-4 rounded bg-[#fff9ea]'>
                      <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
                        {formateDate("2-13-2006")} - {formateDate("12-01-2010")}
                      </span>
                      <p className='text-[16px] leading-6 font-medium text-textColor'>Sr. Surgeon</p>
                      <p className='text-[14px] leading-5 font-medium text-textColor'>Good Hospital, India</p>
                </li>
                <li className='p-4 rounded bg-[#fff9ea]'>
                      <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
                        {formateDate("2-13-2006")} - {formateDate("12-01-2010")}
                      </span>
                      <p className='text-[16px] leading-6 font-medium text-textColor'>Sr. Surgeon</p>
                      <p className='text-[14px] leading-5 font-medium text-textColor'>Good Hospital, India</p>
                </li>
                <li className='p-4 rounded bg-[#fff9ea]'>
                      <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
                        {formateDate("2-13-2006")} - {formateDate("12-01-2010")}
                      </span>
                      <p className='text-[16px] leading-6 font-medium text-textColor'>Sr. Surgeon</p>
                      <p className='text-[14px] leading-5 font-medium text-textColor'>Good Hospital, India</p>
                </li>
            </ul>
        </div>

    </div>
  )
}

export default DoctorAbout
