import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import UniversalView from '../../../components/view/UniversalView';
import {useFetching} from '../../../hooks/useFetching';
import LoadingScreen from '../../../components/LoadingScreen';
import SearchButton from '../../../components/button/SearchButton';
import ModuleTestItem from '../../../components/test/ModuleTestItem';
import {TaskService, TestService} from '../../../services/API';
import {APP_COLORS, N_STATUS, WIDTH} from '../../../constans/constants';
import {ROUTE_NAMES} from '../../../components/navigation/routes';
import Empty from '../../../components/Empty';
import WhatsappButton from '../../../components/button/WhatsappButton';
import {useSettings} from '../../../components/context/Provider';

const TasksScreen = props => {
  const {nstatus, isAuth} = useSettings();
  const [data, setData] = useState(null);
  const [filters, setFilters] = useState(null);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [fetchTasks, isFetching] = useFetching(async () => {
    const response = await TaskService.fetchTasks();
    setData(response.data?.data);
    setFilters(response.data?.filters);
    setLastPage(response.data?.last_page);
  });
  const [fetchNext, isFetchingNext] = useFetching(
    async () => {
      const response = await TaskService.fetchTasks('', page);
      setData(prev => prev.concat(response.data?.data));
    },
  );

  useEffect(() => {
    global.fetchTasks = fetchTasks;
  }, []);

  useEffect(() => {
    if (page === 1) {
      fetchTasks();
    } else {
      fetchNext();
    }
  }, [page]);

  const taskItemTapped = item => {
    if (isAuth) {
      props.navigation.navigate(ROUTE_NAMES.taskDetail, {id: item?.id, reloadTask: false});
    } else {
      props.navigation.navigate(ROUTE_NAMES.login);
    }
  };

  const renderTask = ({item, index}) => {
    return (
      <ModuleTestItem
        id={item?.id}
        index={index}
        categoryName={item?.category?.name}
        time={item?.timer}
        title={item?.title}
        attempts={item?.attempts}
        type="task"
        price={item?.price}
        oldPrice={item?.old_price}
        onPress={() => taskItemTapped(item)}
        hasSubscribed={item?.has_subscribed}
      />
    );
  };

  const renderFooter = () => (
    <View style={styles.footer}>
      {isFetchingNext ? <ActivityIndicator color={APP_COLORS.primary} /> : null}
    </View>
  );

  const onEndReached = () => {
    if (page < lastPage && !isFetchingNext) {
      setPage(prev => prev + 1);
    }
  };

  if (isFetching) {
    return <LoadingScreen />;
  }

  return (
    <UniversalView>
      {nstatus === N_STATUS ? null : (
        <SearchButton
          navigation={props.navigation}
          type="task"
          filters={filters}
        />
      )}
      <FlatList
        data={data}
        contentContainerStyle={styles.container}
        renderItem={renderTask}
        ListFooterComponent={renderFooter}
        ListEmptyComponent={() => <Empty />}
        keyExtractor={(_, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        onEndReached={onEndReached}
        refreshing={isFetching}
        onRefresh={() => {
          if (page === 1) {
            fetchTasks();
          }
          setPage(1);
        }}
      />
      <WhatsappButton />
    </UniversalView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  footer: {
    width: WIDTH - 32,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TasksScreen;
