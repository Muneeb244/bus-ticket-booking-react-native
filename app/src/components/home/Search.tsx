import {View, Text, Alert, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {navigate} from '../../utils/NavigationUtils';
import LinearGradient from 'react-native-linear-gradient';
import { CalendarDaysIcon } from 'react-native-heroicons/solid';

const Search = () => {
  const [from, setFrom] = useState<string | null>(null);
  const [to, setTo] = useState<string | null>(null);
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [locationType, setLocationType] = useState<'from' | 'to'>('from');
  const [showLocationPicker, setShowLocationPicker] = useState(false);

  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 2);

  const handleLocationSet = (location: string, type: 'from' | 'to') => {
    if (type === 'from') {
      setFrom(location);
      if (location === to) {
        setTo(null);
      }
    } else {
      setTo(location);
    }
  };

  const handleSearchBuses = () => {
    if (!from || !to)
      return Alert.alert(
        'Missing Information',
        'Please select both departure and destination locations',
      );
    if (from === to)
      return Alert.alert(
        'Invalid Selection',
        'Departure and destination locations cannot be the same',
      );

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (date < today)
      return Alert.alert(
        'Invalid date',
        'please select a future date for your journey',
      );

    navigate('busList', {item: {from, to, date}});
  };

  return (
    <View className="rounded-b-3xl overflow-hidden">
      <LinearGradient
        colors={['#78B0E6', '#fff']}
        start={{x: 1, y: 1}}
        end={{x: 1, y: 0}}>
        <View className="p-4">
          <View className="my-4 border border-1 z-20 bg-white rounded-md border-gray-600">
            <TouchableOpacity
              className="p-4 flex-row gap-4 items-center"
              onPress={() => {
                setLocationType('from');
                setShowLocationPicker(true);
              }}>
              <Image
                className="h-6 w-6 "
                source={require('../../assets/images/bus.png')}
              />
              <Text className="w-[90%] text-lg font-okra text-gray-700">
                {from || 'From'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="p-4 flex-row gap-4 items-center"
              onPress={() => {
                setLocationType('to');
                setShowLocationPicker(true);
              }}>
              <Image
                className="h-6 w-6 "
                source={require('../../assets/images/bus.png')}
              />
              <Text className="w-[90%] text-lg font-okra text-gray-700">
                {to || 'to'}
              </Text>
            </TouchableOpacity>

            <View className="flex-row items-center p-2 justify-between">
              <View className="flex-row items-center">
                <TouchableOpacity
                  className="p-2 mr-2 rounded-lg  bg-secondary"
                  onPress={() => setDate(new Date())}>
                  <Text className="font-bold text-sm font-okra">Today</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className="p-2 mr-2 rounded-lg bg-secondary"
                  onPress={() => {
                    const tomorrow = new Date();
                    tomorrow.setDate(tomorrow.getDate() + 1);
                    setDate(tomorrow);
                  }}>
                  <Text className="font-bold text-sm font-okra">Tomorrow</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                className="flex-row items-center"
                onPress={() => setShowDatePicker(true)}>
                <View className='mr-3 '>
                  <Text className="text-sm font-normal font-okra text-gray-500">
                    Date of Journey
                  </Text>
                  <Text className="text-md font-bold font-okra text-gray-900">
                    {date?.toDateString()}
                  </Text>
                </View>
                <CalendarDaysIcon color={'black'} size={25} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default Search;
