
const DoctorDashBoard = () => {
  return (
    <div className="bg-white rounded-md shadow-md p-6">
      <h2 className="text-2xl font-bold text-headingColor mb-4">Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-gray-100 p-4 rounded-md">
          <h3 className="text-lg font-semibold text-headingColor mb-2">Total Appointments</h3>
          <p className="text-gray-600">20</p>
        </div>

      </div>
    </div>
  );
};

export default DoctorDashBoard;
