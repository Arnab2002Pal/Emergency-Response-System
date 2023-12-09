import { useContext, useState } from 'react';
import { authContext } from './../../context/AuthContext';
import DoctorDashBoard from './DoctorDashBoard'; // Import the Dashboard component or replace with the actual path

const Dashboard = () => {
  const { dispatch } = useContext(authContext);
  const [tab, setTab] = useState('appointments');

  // Replace with actual doctor-specific data fetching logic
  const doctorData = {
    name: 'Doctor Name',
    email: 'doctor@example.com',
    photo: 'doctor_profile_picture_url',
  };

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <section>
      <div className='max-w-[1170px] px-5 mx-auto'>
        <div className='grid md:grid-cols-3 gap-10'>
          <div className='pb-[50px] px-[30px] rounded-md'>
            <div className='flex items-center justify-center'>
              <figure className='w-[100px] h-[100px] rounded-full border-2 border-solid border-primaryColor'>
                <img src={doctorData.photo} alt='' className='w-full h-full rounded-full' />
              </figure>
            </div>
            <div className='text-center mt-4'>
              <h3 className='text-[18px] leading-[30px] text-headingColor font-bold'>{doctorData.name}</h3>
              <p className='text-color text-[15px] leading-6 font-medium'>{doctorData.email}</p>
            </div>
            <div className='mt-[50px] md:mt-[100px]'>
              <button
                onClick={handleLogout}
                className='w-full bg-[#181A1E] p-3 text-[16px] leading-7 rounded-md text-white'
              >
                Log Out
              </button>
              <button className='w-full bg-red-600 mt-4 p-3 text-[16px] leading-7 rounded-md text-white'>
                Delete Account
              </button>
            </div>
          </div>

          <div className='md:col-span-2 md:px-[30px]'>
            <div>
              <button
                onClick={() => setTab('dashboard')}
                className={` ${tab === 'dashboard' && 'bg-primaryColor text-white font-normal'} p-2 mr-5 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}
              >
                Dashboard
              </button>
              <button
                onClick={() => setTab('appointments')}
                className={` ${tab === 'appointments' && 'bg-primaryColor text-white font-normal'} p-2 mr-5 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}
              >
                Appointments
              </button>
              <button
                onClick={() => setTab('patients')}
                className={` ${tab === 'patients' && 'bg-primaryColor text-white font-normal'} p-2 mr-5 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}
              >
                Patients
              </button>
            </div>

            {tab === 'dashboard' && <DoctorDashBoard />} 
            {/* {tab === 'appointments' && <AppointmentsSection />}
            {tab === 'patients' && <PatientsSection />} */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
