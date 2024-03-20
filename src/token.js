import { useEffect, useState } from 'react';

export function useValidateToken() {
  const [token, setToken] = useState({});

  const localToken = localStorage.getItem('iedvToken');
  const sessionToken = sessionStorage.getItem('iedvToken');
  let officialToken = "";

  if (localToken) {
    officialToken = localToken;
  } else {
    officialToken = sessionToken;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/validate-token', {
          method: 'POST',
          headers: {
            'Authorization': officialToken
          }
        });
  
        const data = await response.json();
        setToken(data);

        if (token.Estado === 'ERROR') {
          try {
            localStorage.removeItem('iedvToken');
          } catch {}
      
          try {
            sessionStorage.removeItem('iedvToken');
          } catch {}
        }

      } catch (error) {}
    };

    fetchData();
  }, [officialToken, token.Estado]);

  return token;
}