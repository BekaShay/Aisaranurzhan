import {View, StyleSheet, FlatList, ActivityIndicator} from 'react-native';
import React from 'react';
import UniversalView from '../../../components/view/UniversalView';
import SearchButton from '../../../components/button/SearchButton';
import {useFetching} from '../../../hooks/useFetching';
import {CourseService} from '../../../services/API';
import {useState} from 'react';
import {APP_COLORS, N_STATUS, WIDTH} from '../../../constans/constants';
import {useEffect} from 'react';
import {setFontStyle} from '../../../utils/utils';
import LoadingScreen from '../../../components/LoadingScreen';
import Empty from '../../../components/Empty';
import WhatsappButton from '../../../components/button/WhatsappButton';
import {useSettings} from '../../../components/context/Provider';
import {DefaultCard} from './designType/DefaultCard';
import {MiniCard} from './designType/MiniCard';
import {DoubleCard} from './designType/DoubleCard';

const CoursesScreen = props => {
  const {nstatus, nCourse} = useSettings();
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState(null);
  const [lastPage, setLastPage] = useState(1);
  const [data, setData] = useState([]);
  const [loadingNext, setLoadingNext] = useState(false);
  const [fetchCourses, isLoading, coursesError] = useFetching(async () => {
    const response = await CourseService.fetchCourses();
    setData(response.data?.data);
    setFilters(response.data?.filters);
    setLastPage(response.data?.last_page);
  });

  useEffect(() => {
    if (page === 1) {
      fetchCourses();
    } else {
      fetchNextPage();
    }
  }, [page]);

  const fetchNextPage = async () => {
    const response = await CourseService.fetchCourses('', page);
    setData(data.concat(response.data?.data));
    setLoadingNext(false);
  };

  const onEndReached = () => {
    if (page < lastPage && !loadingNext) {
      setLoadingNext(true);
      setPage(prev => prev + 1);
    }
  };

  const renderCourse = ({item, index}) => {
    if (nCourse == '1') {
      return (
        <MiniCard item={item} index={index} navigation={props?.navigation} />
      );
    }
    if (nCourse == '2') {
      return (
        <DoubleCard item={item} index={index} navigation={props?.navigation} />
      );
    }

    return (
      <DefaultCard item={item} index={index} navigation={props?.navigation} />
    );
  };

  const renderFooter = () => (
    <View style={styles.footer}>
      {loadingNext ? <ActivityIndicator color={APP_COLORS.primary} /> : null}
    </View>
  );

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <UniversalView>
        <SearchButton
          navigation={props.navigation}
          type={'course'}
          filters={filters}
        />
      <FlatList
        data={data}
        numColumns={nCourse === '2' ? 2 : 1}
        renderItem={renderCourse}
        ListFooterComponent={renderFooter}
        ListEmptyComponent={<Empty />}
        keyExtractor={(_, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        onEndReached={onEndReached}
        refreshing={isLoading}
        onRefresh={() => {
          if (page === 1) {
            fetchCourses();
          }
          setPage(1);
        }}
      />
      {nstatus === N_STATUS ? null : <WhatsappButton />}
    </UniversalView>
  );
};

export const styles = StyleSheet.create({
  contentContainer: {
    paddingTop: 13,
  },
  footer: {
    width: WIDTH - 32,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CoursesScreen;
