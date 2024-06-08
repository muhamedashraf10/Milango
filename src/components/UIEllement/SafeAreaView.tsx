import React, {FC} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  ViewProps,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const SafeAreaView: FC<ViewProps> = ({children, style, ...props}) => {
  const {top} = useSafeAreaInsets();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      {...props}
      style={[styles.container, {paddingTop: top}, style]}>
      {children}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});
export default SafeAreaView;
