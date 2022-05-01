import React, {useEffect, useState} from 'react';

const useGetData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://www.universal-tutorial.com/api/countries/', {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJhZmNhbm9wQGdtYWlsLmNvbSIsImFwaV90b2tlbiI6IlNEWnZDcmxINGJUSG5pV0dXNkpUNE1yVDdMbTYzZEZIdldNTmZlNDBzc0J5LXdNYjZOTVg3dVhJVnpSa0JsM3FJU28ifSwiZXhwIjoxNjUxMzgzOTIyfQ.AxTxUvI5yZQGhcel_Q8kD2YlNEYSJAEWShcdCSqay4o',
        Accept: 'application/json',
      },
    })
      .then(data => data.json())
      .then(json => {
        setData(json);
        setLoading(false);
      });
  }, []);

  return {loading, data};
};

export default useGetData;
