
const SidePanel = () => {
  return (
    <div className="shadow-panelShadow p-3 lg:p-5 rounded-md">
        <div className="flex items-center justify-between">
            <p className="text__para mt-0 font-semibold">Fees: </p>
            <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold">Rs. 500</span>
        </div>
        <div className="mt-[30px]">
            <p className="text__para mt-0 font-semibold text-headingColor">Available Time Slots:</p>
            <ul className="mt-3">
                <li className="flex items-center justify-between mb-2">
                  <p className="text-[14px] leading-6 text-textColor font-semibold">
                    Sunday
                  </p>
                  <p className="text-[14px] leading-6 text-textColor font-semibold">
                    4:00 PM - 7:30 PM
                  </p>
                </li>
                <li className="flex items-center justify-between mb-2">
                  <p className="text-[14px] leading-6 text-textColor font-semibold">
                    Monday
                  </p>
                  <p className="text-[14px] leading-6 text-textColor font-semibold">
                    5:00 PM - 8:30 PM
                  </p>
                </li>
                <li className="flex items-center justify-between mb-2">
                  <p className="text-[14px] leading-6 text-textColor font-semibold">
                    Wednesday
                  </p>
                  <p className="text-[14px] leading-6 text-textColor font-semibold">
                    10:00 AM - 2:30 PM
                  </p>
                </li>
            </ul>
        </div>

        <button className="btn px-2 w-full rounded-md">Book Appointment</button>

    </div>
  )
}

export default SidePanel
