import { useState } from 'react';
import DoctorCard from './../../components/Doctors/DoctorCard';
import { doctors } from './../../assets/data/doctors';
import Testimonial from '../../components/Testimonial/Testimonial';

const Doctors = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDoctors = doctors.filter(doctor =>
    doctor.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = () => {
    alert(`Searching for: ${searchQuery}`);
  };

  return (
    <>
      <section className='bg-[#fff9ea]'>
        <div className="container text-center">
          <h2 className='heading'>Find The Doctors</h2>
          <div className='max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between'>
            <input
              type="search"
              className='py-4 pl-4 pr-2 bg-transparent w-full focus: outline-none placeholder:text-textColor'
              placeholder="Search Doctor"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className='btn mt-0 rounded-[0px]  rounded-r-md' onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          {filteredDoctors.length > 0 ? (
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 '>
              {filteredDoctors.map((doctor) => (
                <DoctorCard key={doctor.id} doctor={doctor}/>
              ))}
            </div>
          ) : (
            <p className="text-center mt-4 text-red-500 text-[20px] text-semibold">No doctor found</p>
          )}
        </div>
      </section>

      <section>
        <div className="container">
          <div className='xl:w-[470px] mx-auto'>
            <h2 className='heading text-center'>Reviews By our Amazing Patients</h2>
            <p className='text__para text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam ut delectus fugit ea asperiores maxime officiis illum sequi voluptatibus, blanditiis nihil aliquid in tempore.</p>
          </div>
          <Testimonial/>
        </div>
      </section>
    </>
  );
};

export default Doctors;
