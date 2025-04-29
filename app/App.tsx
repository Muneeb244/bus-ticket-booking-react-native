import { QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import './global.css';
import Navigation from './src/navigation/Navigation';
import { queryClient } from './src/service/queryClient';

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Navigation />
    </QueryClientProvider>
  );
};

export default App;
