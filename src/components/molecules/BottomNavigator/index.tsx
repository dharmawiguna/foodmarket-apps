import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {
  IcHomeOff,
  IcHomeOn,
  IcOrderOff,
  IcOrderOn,
  IcProfileOff,
  IcProfileOn,
} from '../../../assets';
import {Gs} from '../../../assets/Styles/GlobalStyle';

interface BottomNavigatorProps {
  state: any;
  descriptors: any;
  navigation: any;
}

// Define the type for the label
type LabelType = 'Home' | 'Order' | 'Profile';

// Define the props for the Icon component
interface IconProps {
  label: LabelType;
  focus: boolean;
}

function Icon({label, focus}: IconProps): JSX.Element {
  switch (label) {
    case 'Home':
      return focus ? <IcHomeOn /> : <IcHomeOff />;
    case 'Order':
      return focus ? <IcOrderOn /> : <IcOrderOff />;
    case 'Profile':
      return focus ? <IcProfileOn /> : <IcProfileOff />;
    default:
      return <IcProfileOn />;
  }
}

export default function BottomNavigator({
  state,
  descriptors,
  navigation,
}: BottomNavigatorProps): JSX.Element {
  return (
    <View style={styles.container}>
      {state.routes.map((route: any, index: number) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}>
            <Icon label={label} focus={isFocused} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...Gs.flexRow,
    ...Gs.justifyBetween,
    backgroundColor: 'white',
    paddingTop: 15,
    paddingBottom: 25,
    paddingHorizontal: 50,
  },
  textFocused: {
    color: '#673ab7',
  },
  textUnfocused: {
    color: '#222',
  },
});
