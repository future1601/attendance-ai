import React from 'react';

const StudentDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
      <div className="max-w-4xl w-full p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-indigo-900 mb-4 text-center">Welcome, Student!</h2>
        <div className="card shadow-sm p-4">
          <h4 className="text-xl font-semibold mb-4">Your Attendance</h4>
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead className="bg-indigo-600 text-white">
              <tr>
                <th className="border border-gray-300 px-4 py-2">Date</th>
                <th className="border border-gray-300 px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">October 20, 2024</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">Present</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">October 21, 2024</td>
                <td className="border border-gray-300 px-4 py-2 text-red-600">Absent</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
