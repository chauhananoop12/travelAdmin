import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { Dna } from 'react-loader-spinner';
import axios from '../utils/axios';
import { set } from 'nprogress';

export default function GifLoader() {
  const [requestCount, setRequestCount] = useState(0);
  useEffect(() => {
    const reqInterceptor = axios.interceptors.request.use((config) => {
      setRequestCount((prevCount) => prevCount + 1);
      return config;
    });
    const resInterceptor = axios.interceptors.response.use(
      (response) => {
        setTimeout(() => {
          setRequestCount((prevCount) => prevCount - 1);
        }, 1000);
        return response;
      },
      (error) => {
        setTimeout(() => {
          setRequestCount((prevCount) => prevCount - 1);
        }, 1000);
        return Promise.reject(error);
      }
    );
    return () => {
      axios.interceptors.request.eject(reqInterceptor);
      axios.interceptors.response.eject(resInterceptor);
    };
  }, []);

  return (
    !!requestCount && (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          width: '100vw',
          backgroundColor: '#fff',
          opacity: 0.8,
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 99999
        }}
      >
        <Dna ariaLabel="Loading" color={'#000'} height={200} width={200} />
      </Box>
    )
  );
}
