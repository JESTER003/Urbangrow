import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';

function MentorRequest() {
  const { user } = useAuth();
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/requests/${user.id}`);
        setRequests(response.data);
      } catch (error) {
        console.error("Error fetching requests:", error);
      }
    };

    if (user?.role === 'mentor') {
      fetchRequests();
    }
  }, [user]);

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Connection Requests</h1>
        {requests.length === 0 ? (
          <p className="text-lg text-gray-600">No connection requests at the moment.</p>
        ) : (
          <ul className="space-y-4">
            {requests.map((request) => (
              <li key={request._id} className="bg-white rounded-lg shadow-md p-4">
                <p className="text-lg text-gray-900">Request from: {request.userName}</p>
                <p className="text-sm text-gray-600">Requested on: {new Date(request.createdAt).toLocaleDateString()}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default MentorRequest; 