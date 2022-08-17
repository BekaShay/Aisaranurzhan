import { Dimensions, StyleSheet } from 'react-native';

export const WIDTH = Dimensions.get('screen').width
export const HEIGHT = Dimensions.get("screen").height

export const APP_COLORS = {
  primary: '#5559F4',
  placeholder: '#808191',
  font: '#111621',
  input: '#F5F5F5',
  border: 'rgba(0, 0, 0, 0.1)',
  gray: "#F5F5F5",
  gray2: "#FCFCFD"
};

export const DOMAIN = "https://demo.educenter.kz"
export const REQUEST_HEADERS = {
  'Accept': 'application/json'
}

export const URLS = {
  settings: "settings/mobile",
  languages: "languages",
  courses: "courses",
  courseByID: "course/",
  categories: "categories",
  lesson: "lesson/"
}

