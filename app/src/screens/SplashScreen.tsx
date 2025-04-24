import {View, Text, Image, Alert} from 'react-native';
import React, {useEffect} from 'react';
import {jwtDecode} from 'jwt-decode';
import {getAccessToken, getRefreshToken} from '../service/storage';
import {resetAndNavigate} from '../utils/NavigationUtils';
import {refreshTokens} from '../service/requests/auth';

interface DecodedToken {
  exp: number;
}

const SplashScreen = () => {
  const tokenCheck = async () => {
    const accessToken = getAccessToken();
    const refreshToken = getRefreshToken() as string;

    if (accessToken) {
      const decodedAccessToken = jwtDecode<DecodedToken>(accessToken);
      const decodedRefreshToken = jwtDecode<DecodedToken>(refreshToken);

      const currentTime = Date.now() / 1000;

      if (decodedRefreshToken?.exp < currentTime) {
        resetAndNavigate('login');
        Alert.alert('Session expired, please login again');
        return;
      }

      if (decodedAccessToken?.exp < currentTime) {
        const refreshed = await refreshTokens();
        if (!refreshed) {
          Alert.alert('Something went wrong');
          return;
        }
      }

      resetAndNavigate('home');
      return;
    }

    resetAndNavigate('login');
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      tokenCheck();
    }, 1500);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <View className="flex-1 justify-center bg-white items-center">
      <Image
        source={require('../assets/images/logo_t.png')}
        className="h-[30%] w-[60%]"
        resizeMode="contain"
      />
    </View>
  );
};

export default SplashScreen;
