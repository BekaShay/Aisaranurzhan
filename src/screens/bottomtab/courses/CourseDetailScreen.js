import {Text, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import UniversalView from '../../../components/view/UniversalView';
import {useFetching} from '../../../hooks/useFetching';
import {CourseService} from '../../../services/API';
import {useState} from 'react';
import {useEffect} from 'react';
import {generateHash, setFontStyle} from '../../../utils/utils';
import Divider from '../../../components/Divider';
import {useSettings} from '../../../components/context/Provider';
import TransactionButton from '../../../components/button/TransactionButton';
import DetailView from '../../../components/view/DetailView';
import {ROUTE_NAMES} from '../../../components/navigation/routes';
import Footer from '../../../components/course/Footer';
import LoadingScreen from '../../../components/LoadingScreen';
import CourseChapter from '../../../components/course/CourseChapter';
import {N_STATUS, TYPE_SUBCRIBES} from '../../../constans/constants';
import MyCourseChapter from '../../../components/course/MyCourseChapter';
import {useLocalization} from '../../../components/context/LocalizationProvider';
import {lang} from '../../../localization/lang';

const CourseDetailScreen = props => {
  const {localization} = useLocalization();
  const {isAuth, nstatus} = useSettings();

  const courseID = props.route?.params?.courseID;

  const [data, setData] = useState(null);
  const [fetchCourse, isLoading, courseError] = useFetching(async () => {
    let params = {};
    if (nstatus === N_STATUS) {
      params.publication_app = await generateHash();
    }
    const response = await CourseService.fetchCourseByID(courseID, params);
    setData(response.data?.data);
  });

  useEffect(() => {
    fetchCourse();
  }, []);

  const passedLessonCount = chapter => {
    if (chapter?.position < data?.progress_information?.last_chapter_position) {
      return chapter?.lessons_count;
    }
    if (chapter?.position > data?.progress_information?.last_chapter_position) {
      return 0;
    }

    return data?.progress_information?.last_lesson_position;
  };

  const getProgressPercent = chapter => {
    if (chapter?.lessons_count === 0) {
      return 0;
    }

    return (passedLessonCount(chapter) / chapter?.lessons_count) * 100;
  };

  const onTransaction = () => {
    if (isAuth) {
      if (data?.has_subscribed) {
        props.navigation.navigate(ROUTE_NAMES.lesson, {
          id: data?.progress?.next_lesson?.id,
          title: data?.progress?.next_lesson?.chapter?.title,
        });
      } else {
        props.navigation.navigate(ROUTE_NAMES.operation, {
          operation: data,
          type: TYPE_SUBCRIBES.COURSE_SUBCRIBE,
          previousScreen: ROUTE_NAMES.courseDetail,
        });
      }
    } else {
      props.navigation.navigate(ROUTE_NAMES.login);
    }
  };

  const renderHeader = () => {
    return <CourseListHeader data={data} />;
  };

  const renderChapter = ({item, index}) => {
    if (data?.has_subscribed) {
      return (
        <MyCourseChapter
          item={item}
          index={index}
          localization={localization}
          navigation={props.navigation}
          passedLessonsCount={passedLessonCount(item)}
          totalLessonsCount={item?.lessons_count}
          percent={getProgressPercent(item)}
        />
      );
    }

    return (
      <CourseChapter item={item} index={index} navigation={props.navigation} />
    );
  };

  const renderFooter = () => {
    return <Footer data={data} navigation={props.navigation} />;
  };

  const renderTransactionButton = () => {
    if (nstatus === N_STATUS) {
      return null;
    }

    return (
      <TransactionButton
        text={lang('Купить полный курс', localization)}
        price={data?.price}
        oldPrice={data?.old_price}
        onPress={onTransaction}
      />
    );
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <UniversalView style={styles.container}>
      <FlatList
        data={data?.chapters}
        ListHeaderComponent={renderHeader}
        renderItem={renderChapter}
        ListFooterComponent={renderFooter}
        ItemSeparatorComponent={() => <Divider />}
        keyExtractor={(_, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
      {renderTransactionButton()}
    </UniversalView>
  );
};

const CourseListHeader = ({data, localization}) => {
  return (
    <UniversalView>
      <DetailView
        poster={data?.poster}
        category={data?.category?.name}
        title={data?.title}
        duration={data?.time}
        rating={data?.rating}
        reviewCount={data?.reviews_count}
        description={data?.description}
      />
      <Divider isAbsolute={false} />
      <Text style={styles.courseProgram}>{lang('Программа курса', localization)}</Text>
    </UniversalView>
  );
};

const styles = StyleSheet.create({
  listContent: {
    paddingBottom: 50,
  },
  container: {},
  courseProgram: {
    margin: 16,
    ...setFontStyle(21, '700'),
  },
});

export default CourseDetailScreen;
