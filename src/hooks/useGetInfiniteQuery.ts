import {UseInfiniteQueryOptions, useInfiniteQuery} from '@tanstack/react-query';
import {useMemo} from 'react';
import axiosInstance from '../configs/axiosInstance';
import urlJoin from 'url-join';
import EndPoints from '../apis/EndPoints';
import Toast from 'react-native-toast-message';
import i18next from 'i18next';
import unit from '../styles/units';
import colors from '../styles/colors';

type TuseGetQueryType = {
  options?: UseInfiniteQueryOptions<any, any>;
  name: string;
};

const useGetInfiniteQuery = ({options, name}: TuseGetQueryType) => {
  const api = urlJoin(EndPoints.GithupUser, name || '', EndPoints.Repos);
  const {data, ...rest} = useInfiniteQuery({
    queryKey: ['myRepository', name],
    queryFn: async ({pageParam = 1}) => {
      const response = await axiosInstance.get(
        `${api}?&page=${pageParam}&per_page=10`,
      );

      return response?.data;
    },

    getNextPageParam: (lastPage: any, pages: any) => {
      return lastPage?.items?.length === 0 || lastPage?.length === 0
        ? undefined
        : pages.length + 1;
    },
    enabled: !!name,
    onError: (err: any) => {
      if (err?.status === '403' && err?.message?.includes('rate limit')) {
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
    ...options,
  });

  const allData = useMemo(() => {
    const newData: any[] = [];
    data?.pages?.map((page: any) => newData?.push(...(page?.items || page)));
    return newData;
  }, [data]);

  return {
    data: allData,
    ...rest,
  };
};

export default useGetInfiniteQuery;
