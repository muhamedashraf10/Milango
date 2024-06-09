import React, {useState} from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import {TRepository} from '../../types/repo';
import Text from '../UIEllement/Text';
import i18next from 'i18next';
import unit from '../../styles/units';
import colors from '../../styles/colors';
import addShadow from '../../styles/addShadow';
import {TUserData} from '../../types/userData';
import {LikeIcon} from '../../styles/icons';

type TCardRepository = TRepository &
  TUserData & {
    selected: number[];
    setSelected: React.Dispatch<React.SetStateAction<number[]>>;
  };

const CardRepository = ({
  name,
  language,
  description,
  avatar,
  myName,
  setSelected,
  selected,
  id,
}: TCardRepository) => {
  const [error, setError] = useState(false);
  const handleSelectedCard = (idSelect: number) => {
    if (selected?.includes(idSelect)) {
      const filterSelect = selected?.filter(select => select !== idSelect);
      return setSelected(filterSelect);
    }
    return setSelected([...selected, idSelect]);
  };

  return (
    <View style={[styles.container, addShadow('sm')]}>
      <View style={styles.content}>
        <Image
          source={
            !error
              ? {uri: avatar as string}
              : require('../../assets/userProfile.png')
          }
          style={styles.image}
          onError={() => setError(true)}
          defaultSource={require('../../assets/userProfile.png')}
        />
        <Text text={myName} style={styles.text} />
      </View>
      <Text
        text={`${i18next.t('projectName')}: ${name}`}
        bold
        size="medium"
        color="darkGray"
      />
      <Text
        text={`${i18next.t('lang')}: ${
          language || i18next.t<string>('notFound')
        }`}
        bold
        size="medium"
        color="darkGray"
      />
      <Text
        text={`${i18next.t('desc')}: ${
          description || i18next.t<string>('notFound')
        }`}
        bold
        size="medium"
        color="darkGray"
      />
      <Pressable onPress={() => handleSelectedCard(id)} style={styles.icons}>
        <LikeIcon
          color={selected?.includes(id) ? colors.danger : colors.gray}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    marginBottom: 16 * unit,
    borderRadius: 16 * unit,
    padding: 8 * unit,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8 * unit,
    marginBottom: 20 * unit,
  },
  image: {
    width: 40 * unit,
    height: 40 * unit,
    resizeMode: 'contain',
    borderRadius: 100 * unit,
  },
  text: {
    fontWeight: '700',
    textTransform: 'capitalize',
  },
  icons: {
    marginTop: 10 * unit,
  },
});

export default CardRepository;
