import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {locations} from '../../utils/dummyData';

interface LocationPickerModalProps {
  visible: boolean;
  onClose: () => void;
  onSelect: (location: string, type: 'from' | 'to') => void;
  type: 'from' | 'to';
  fromLocation?: string;
}

const LocationPickerModal: React.FC<LocationPickerModalProps> = ({
  visible,
  onClose,
  onSelect,
  type,
  fromLocation,
}) => {
  const [search, setSearch] = useState('');

  const filteredLocations = locations.filter(loc =>
    loc.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <View>
      <Text>LocationPickerModal</Text>
    </View>
  );
};

export default LocationPickerModal;
