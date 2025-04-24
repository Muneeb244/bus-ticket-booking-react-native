import './global.css';
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Navigation from './src/navigation/Navigation';
import {QueryClientProvider} from '@tanstack/react-query';
import { queryClient } from './src/service/queryClient';

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Navigation />
    </QueryClientProvider>
  );
};

export default App;
