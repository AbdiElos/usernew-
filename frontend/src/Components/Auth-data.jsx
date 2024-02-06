import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [authInfo, setAuthInfo] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('access');

    if (token) {
      const fetchData = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/accounts/my-profile/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
              id: 'id'
            },
          });

          const data = response.data;

          setAuthInfo({
             user: data,
             token: token,
          });
        } catch (error) {
          console.error('Error fetching user information:', error);
        }
      };

      fetchData();
    }
  }, []);

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth };