// import {Picker} from '@react-native-picker/picker';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {colors} from '../../../assets/Styles/Colors';

interface SelectProps {
  options: {label: string; value: string}[];
  label: string;
  value: string;
  onSelectChange: (value: string) => void;
}

export function Select({
  options,
  label,
  value,
  onSelectChange,
}: SelectProps): JSX.Element {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View>
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={options}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="Select item"
          searchPlaceholder="Search..."
          value={value}
          onChange={item => {
            onSelectChange(item.value);
          }}
        />
      </View>
    </View>
  );
}

export default Select;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: colors.black,
    marginBottom: 5,
  },
  input: {
    padding: 2,
  },
  dropdown: {
    height: 50,
    borderWidth: 1,
    borderColor: colors.greyContainer,
    borderRadius: 8,
    padding: 15,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
