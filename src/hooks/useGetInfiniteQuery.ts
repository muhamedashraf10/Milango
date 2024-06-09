import {UseInfiniteQueryOptions, useInfiniteQuery} from '@tanstack/react-query';
import {useMemo} from 'react';
import axiosInstance from '../configs/axiosInstance';
import urlJoin from 'url-join';
import EndPoints from '../apis/EndPoints';

type TuseGetQueryType = {
  options?: UseInfiniteQueryOptions<any, any>;
  name: string;
};

const useGetInfiniteQuery = ({options, name}: TuseGetQueryType) => {
  const api = urlJoin(EndPoints.GithupUser, name || '', EndPoints.Repos);
  const {data, ...rest} = useInfiniteQuery({
    queryKey: ['Repository'],
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
