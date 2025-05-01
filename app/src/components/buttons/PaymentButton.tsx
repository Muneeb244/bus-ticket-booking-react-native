import {View, Text, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {UserGroupIcon} from 'react-native-heroicons/solid';

interface PaymentButtonProps {
  price: number;
  seat: number;
  onPay: any;
}

const PaymentButton: FC<PaymentButtonProps> = ({seat, price, onPay}) => {
  return (
    <View className="absolute bottom=0 pb-5 shadow-md bg-white w-full rounded-t-xl p-4">
      <View className="flex-row items-center justify-between">
        <View>
          <Text className="font-semibold font-okra text-xl"></Text>
          <Text className="font-okra font-medium text-gray-700 text-sm">
            Tax included
          </Text>
        </View>
        <View>
          <View className="flex-row items-center gap-3">
            <Text className="text-gray-500 line-through font-okra font-medium text-sm">
              PKR {(seat * price - (seat * price > 200 ? 100 : 0)).toFixed(0)}
            </Text>

            <Text className="font-okra font-medium text-lg">
              PKR {(price * seat).toFixed(0)}
            </Text>
          </View>

          <View className="flex-row self-end items-center gap-1">
            <UserGroupIcon color={'gray'} size={16} />
            <Text className="font-okra font-medium text-md">{seat} P</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        onPress={onPay}
        className="bg-tertiary my-4 rounded-xl justify-center items-center p-3">
        <Text className="text-white font-semibold text-xl font-okra">
          Pay Now!
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PaymentButton;
