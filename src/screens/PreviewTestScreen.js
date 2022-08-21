import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import UniversalView from '../components/view/UniversalView';
import {strings} from '../localization';
import {setFontStyle, wordLocalization} from '../utils/utils';
import RowView from '../components/view/RowView';
import {APP_COLORS} from '../constans/constants';
import OutlineButton from '../components/button/OutlineButton';
import { ROUTE_NAMES } from '../components/navigation/routes';

const PreviewTestScreen = props => {
  const time = props.route?.params?.time;
  const count = props?.route?.params?.count;
  const id = props.route?.params?.id

  return (
    <UniversalView style={styles.container}>
      <Text style={styles.onlineTest}>{strings['Онлайн тест']}</Text>
      <Text style={styles.tips}>
        {
          strings[
            'Пройдите онлайн тест, чтобы закрепить материалы курса и получить сертификат.'
          ]
        }
      </Text>
      <RowView style={styles.row}>
        <View style={styles.dot} />
        <Text style={styles.label}>
          {wordLocalization(strings['Прохождения теста занимает :num минут.'], {
            num: time,
          })}
        </Text>
      </RowView>
      <RowView>
        <View style={styles.dot} />
        <Text style={styles.label}>
          {wordLocalization(strings['Тест состоит из :num вопросов'], {
            num: count,
          })}
        </Text>
      </RowView>
      <RowView>
        <View style={styles.dot} />
        <Text style={styles.label}>
          {
            strings[
              'Чтобы пройти тест вам нужно ответить правильно на 50% и более вопросов.'
            ]
          }
        </Text>
      </RowView>
      <OutlineButton
        text={strings['Начать тестирование']}
        onPress={() => props.navigation.navigate(ROUTE_NAMES.testPass, {id: id})}
        style={{marginTop: 30}}
      />
    </UniversalView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  onlineTest: {
    ...setFontStyle(21, '700'),
    marginBottom: 7,
  },
  row: {
    justifyContent: '',
  },
  tips: {
    ...setFontStyle(16),
    marginBottom: 16,
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 100,
    backgroundColor: APP_COLORS.placeholder,
    marginRight: 8,
  },
  label: {
    ...setFontStyle(14),
    marginVertical: 3.5,
  },
});

export default PreviewTestScreen;
