import React from 'react';
import { useAuth } from '../context/AuthContext';

function Profile() {
  const { user } = useAuth();
  const statesOfIndia = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal"
  ];
  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white shadow rounded-lg">
          {/* Profile Header */}
          <div className="px-4 py-5 sm:px-6 border-b">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Profile Information
            </h3>
          </div>

          {/* Profile Content */}
          <div className="px-4 py-5 sm:p-6">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <div className="mt-1">
                  <p className="text-sm text-gray-900">{user?.name || 'Not set'}</p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <div className="mt-1">
                  <p className="text-sm text-gray-900">{user?.email}</p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone no
                </label>
                <div className="mt-1">
                  <input className='border-2 border-gray-300 rounded-md p-2' type="text" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  State
                </label>
                <div className="mt-1">
                  <select className='border-2 border-gray-300 rounded-md p-2'>
                    <option value="">Select a state</option>
                    {statesOfIndia.sort().map((state, index) => (
                      <option key={index} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              {/* Add more profile fields as needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile; 