import { Platform } from "react-native";

export const BASE_URL = Platform.OS === 'android' ? 'http://192.168.18.20:4000' : 'http://localhost:4000'