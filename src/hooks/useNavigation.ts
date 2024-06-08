import {useNavigation as useNativeNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type NavigationType = NativeStackNavigationProp<any>;

const useNavigation = () => {
  return useNativeNavigation<NavigationType>();
};

export default useNavigation;
