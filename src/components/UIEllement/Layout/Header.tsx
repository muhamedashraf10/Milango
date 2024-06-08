import React, {FC, memo} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import unit from '../../../styles/units';
import Text from '../Text/Text';
import colors from '../../../styles/colors';
import i18next from 'i18next';
import addShadow from '../../../styles/addShadow';
import useRoute from '../../../hooks/useRoute';
import useNavigation from '../../../hooks/useNavigation';
import {ArrowLeftIcon} from '../../../styles/icons';

type HeaderProps = {};

const Header: FC<HeaderProps> = () => {
  const {name} = useRoute();
  const {goBack, canGoBack} = useNavigation();

  const handleGoBack = () => {
    if (canGoBack()) {
      goBack();
    }
  };
  return (
    <View style={[styles.container, addShadow('sm')]}>
      <Pressable onPress={handleGoBack}>
        <ArrowLeftIcon color={colors.primary} />
      </Pressable>
      <Text size="xlarge" bold color="primary">
        {i18next.t(name)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 18 * unit,
    alignSelf: 'flex-start',
    paddingHorizontal: 20 * unit,
    paddingBottom: 15 * unit,
  },
});

export default memo(Header);
