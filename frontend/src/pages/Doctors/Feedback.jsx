import { useState } from 'react'
import avatarImg from '../../assets/images/avatar-icon.png'
import { formateDate } from '../../utils/formatData'
import {AiFillStar} from 'react-icons/ai'
import FeedBackForm from './FeedBackForm'


const Feedback = () => {

  const [showFeedBackForm, setShowFeedBackForm] = useState(false)

  return (
    <div>
      <div className='mb-[50px]'>
        <h4 className='text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]'>All Reviews (242)</h4>

        <div className="flex justify-between gap-10 mb-[30px]">
          <div className="flex gap-3">
            <figure className='w-10 h-10 rounded-full'>
              <img className='w-full' src={avatarImg} alt="" />
            </figure>

            <div>
              <h5 className='text-[16px] leading-6 text-primaryColor font-bold'>Some Dude Name</h5>
              <p className='text-[14px] leading-6 text-textColor'>{formateDate('5-14-2019')}</p>
              <p className='text__para mt-3 font-medium text-[15px]'>Good Doc</p>
            </div>
          </div>

          <div className='flex gap-1'>
            {[...Array(5).keys()].map((_,index) => <AiFillStar key={index} color='#0067FF'/>)}
            {/* Array(5).keys() gets the keys iterator for the array. It allows you to iterate over the indices (0 to 4 in this case) of the array. */}
          </div>
        </div>
      </div>
      
      {showFeedBackForm && <FeedBackForm/>}

      {!showFeedBackForm && <div className='text-center'>
        <button className='btn' onClick={()=> setShowFeedBackForm(true)}>Give FeedBack</button>
      </div>
      }


    </div>
  )
}

export default Feedback
