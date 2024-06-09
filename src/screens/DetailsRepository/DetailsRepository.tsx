import React, {useCallback, useState} from 'react';
import {View, FlatList, RefreshControl, ActivityIndicator} from 'react-native';
import useRoute from '../../hooks/useRoute';
import PageLoader from '../../components/UIEllement/PageLoader';
import Layout from '../../components/UIEllement/Layout';
import useGetInfiniteQuery from '../../hooks/useGetInfiniteQuery';
import {TRepository} from '../../types/repo';
import colors from '../../styles/colors';
import _isEmpty from 'lodash/isEmpty';
import CardRepository from '../../components/DetailsRepository/CardRepository';
import {TUserData} from '../../types/userData';
import Error from '../../components/Error';
import NotFound from '../../components/NotFound';

const DetailsRepository = () => {
  const {params}: {params: TUserData} = useRoute();
  const [selected, setSelected] = useState<number[]>([]);
  const {
    data: myRepository,
    isFetching,
    hasNextPage,
    isError,
    isFetchingNextPage,
    error,
    fetchNextPage,
    refetch,
    isInitialLoading,
  } = useGetInfiniteQuery({name: params?.userName});

  const renderItem = useCallback(
    ({item}: {item: TRepository}) => (
      <CardRepository
        {...params}
        {...item}
        selected={selected}
        setSelected={setSelected}
      />
    ),
    [params, selected],
  );

  if ((isInitialLoading || isFetching) && !isFetchingNextPage) {
    return <PageLoader />;
  }

  if (isError) {
    return <Error refetch={refetch} error={error} />;
  }

  if (_isEmpty(myRepository)) {
    return <NotFound />;
  }

  return (
    <Layout>
      <View>
        <FlatList
          data={myRepository}
          keyExtractor={item => item.id + ''}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={false}
              onRefresh={refetch}
              colors={[colors.secondary]}
            />
          }
          onEndReached={() => {
            hasNextPage && fetchNextPage();
          }}
          renderItem={renderItem}
          ListFooterComponent={
            <>
              {isFetchingNextPage && (
                <ActivityIndicator size="small" color={colors.primary} />
              )}
            </>
          }
        />
      </View>
    </Layout>
  );
};

export default DetailsRepository;
