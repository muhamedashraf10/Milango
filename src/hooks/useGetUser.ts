import {useQuery} from '@tanstack/react-query';
import axiosInstance from '../configs/axiosInstance';
import urlJoin from 'url-join';
import EndPoints from '../apis/EndPoints';
import useNavigation from './useNavigation';
import routes from '../navigation/routes';
import Toast from 'react-native-toast-message';
import i18next from 'i18next';
import unit from '../styles/units';
import colors from '../styles/colors';
import {checkErrorRateLimit} from '../helpers';

type TGetUser = {
  name: string;
  reset: () => void;
  submitting: boolean;
};

const fetchApi = async (name: string) => {
  const api = urlJoin(EndPoints.GithupUser, name.trim() || '');
  const {data} = await axiosInstance.get(api);
  return data;
};

export default function useGetUser({name, reset, submitting}: TGetUser) {
  const {navigate} = useNavigation();
  return useQuery<any | undefined>(['user', name], () => fetchApi(name), {
    enabled: !!name && !!submitting,
    cacheTime: 0,
    staleTime: 0,
    onSuccess: data => {
      reset();
      return navigate(routes.Repository, {
        avatar: data?.avatar_url,
        myName: data?.name,
        userName: data?.login,
      });
    },
    onError: (err: any) => {
      reset();

      if (checkErrorRateLimit(err)) {
        return Toast.show({
          type: 'error',
          text1: i18next.t('retaLimit') as string,
          text2: i18next.t('retaLimitTry') as string,
          position: 'top',
          text1Style: {
            fontSize: 10 * unit,
            fontWeight: '800',
            color: colors.danger,
          },
          text2Style: {
            fontSize: 10 * unit,
            fontWeight: '800',
            color: colors.danger,
          },
        });
      }
      Toast.show({
        type: 'error',
        text1: err?.message,
        position: 'top',
      });
    },
  });
}
