import React from 'react';
import Svg, { Path } from 'react-native-svg';

export const left_icon = (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7 12C7 11.7901 7.08554 11.5889 7.23753 11.4413L13.6375 5.22697C13.9517 4.9219 14.4582 4.92472 14.7689 5.23327C15.0795 5.54182 15.0767 6.03926 14.7625 6.34433L8.93784 12L14.7625 17.6557C15.0767 17.9607 15.0795 18.4582 14.7689 18.7667C14.4582 19.0753 13.9517 19.0781 13.6375 18.773L7.23753 12.5587C7.08554 12.4111 7 12.2099 7 12Z"
      fill="#5559F4"
    />
  </Svg>
);

export const check = (size = 1, color = "white") => (
  <Svg width={10*size} height={8*size} viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path d="M3.34363 6.1012L1.18848 3.83966L0.45459 4.60435L3.34363 7.63601L9.5455 1.12798L8.81678 0.363281L3.34363 6.1012Z" fill={color}/>
  </Svg>

)

export const x = (size = 8, color = "#FEFEFE") => (
  <Svg width={size} height={size} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path d="M0.8 0L0 0.8L3.2 4L0 7.2L0.8 8L4 4.8L7.2 8L8 7.2L4.8 4L8 0.8L7.2 0L4 3.2L0.8 0Z" fill={color}/>
  </Svg>

)

export const right_icon = (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M19.425 6H22.5V7.5H19.425C19.05 9.225 17.55 10.5 15.75 10.5C13.95 10.5 12.45 9.225 12.075 7.5H1.5V6H12.075C12.45 4.275 13.95 3 15.75 3C17.55 3 19.05 4.275 19.425 6ZM13.5 6.75C13.5 8.025 14.475 9 15.75 9C17.025 9 18 8.025 18 6.75C18 5.475 17.025 4.5 15.75 4.5C14.475 4.5 13.5 5.475 13.5 6.75ZM4.575 18H1.5V16.5H4.575C4.95 14.775 6.45 13.5 8.25 13.5C10.05 13.5 11.55 14.775 11.925 16.5H22.5V18H11.925C11.55 19.725 10.05 21 8.25 21C6.45 21 4.95 19.725 4.575 18ZM10.5 17.25C10.5 15.975 9.525 15 8.25 15C6.975 15 6 15.975 6 17.25C6 18.525 6.975 19.5 8.25 19.5C9.525 19.5 10.5 18.525 10.5 17.25Z"
      fill="#5559F4"
    />
  </Svg>
);

export const starIcon = (size = 24) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M11.2933 2.23051L8.61535 7.66031L2.62371 8.53383C1.54923 8.68967 1.11862 10.0143 1.89782 10.773L6.23264 14.9971L5.20737 20.9641C5.02283 22.0427 6.15882 22.8506 7.11026 22.3462L12.4703 19.5288L17.8304 22.3462C18.7819 22.8465 19.9179 22.0427 19.7333 20.9641L18.708 14.9971L23.0429 10.773C23.8221 10.0143 23.3915 8.68967 22.317 8.53383L16.3253 7.66031L13.6473 2.23051C13.1675 1.26266 11.7773 1.25036 11.2933 2.23051Z"
      fill="#FACC56"
    />
  </Svg>
);

export const halfStar = (size = 24) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M21.4245 8.53459L15.6899 7.66055L13.1272 2.23049C12.8969 1.74527 12.4475 1.5 11.9981 1.5C11.5515 1.5 11.1052 1.74199 10.8741 2.23049L8.3106 7.66014L2.57563 8.53336C1.54719 8.68922 1.13503 10.0136 1.8806 10.7724L6.02923 14.997L5.04741 20.964C4.90793 21.8163 5.55791 22.5 6.28585 22.5C6.479 22.5 6.67763 22.452 6.86843 22.3462L11.9989 19.5292L17.1289 22.347C17.3193 22.4516 17.5176 22.4992 17.71 22.4992C18.4387 22.4992 19.0898 21.8179 18.9503 20.9652L17.9697 14.9978L22.1191 10.774C22.8651 10.0153 22.4529 8.69045 21.4245 8.53459ZM16.6549 13.5877L15.945 14.3104L16.1126 15.3309L16.8774 19.9841L12.8761 17.7861L11.9993 17.3046L12.0004 4.2948L13.9997 8.53131L14.4378 9.45949L15.4176 9.60879L19.893 10.2909L16.6549 13.5877Z"
      fill="#FACC56"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 19.5299L17.1289 22.347C17.3193 22.4516 17.5176 22.4992 17.71 22.4992C18.4387 22.4992 19.0898 21.8179 18.9503 20.9652L17.9697 14.9978L22.1191 10.774C22.8651 10.0153 22.4529 8.69045 21.4245 8.53459L15.6899 7.66054L13.1272 2.23049C12.8972 1.74596 12.4487 1.50069 12 1.5V9.23028L12.0004 4.2948L13.9997 8.53131L14.4378 9.45949L15.4176 9.60879L19.893 10.2909L16.6549 13.5877L15.945 14.3104L16.1126 15.3309L16.8774 19.9841L12.8761 17.7861L12 17.3049V19.5299Z"
      fill="#ACB4BE"
    />
  </Svg>
);

export const emptyStar = (size = 24) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.5 20.0299L17.6289 22.847C17.8193 22.9516 18.0176 22.9992 18.21 22.9992C18.9387 22.9992 19.5898 22.3179 19.4503 21.4652L18.4697 15.4978L22.6191 11.274C23.3651 10.5153 22.9529 9.19045 21.9245 9.03459L16.1899 8.16054L13.6272 2.73049C13.3972 2.24596 12.9487 2.00069 12.5 2V9.73028L12.5004 4.7948L14.4997 9.03131L14.9378 9.95949L15.9176 10.1088L20.393 10.7909L17.1549 14.0877L16.445 14.8104L16.6126 15.8309L17.3774 20.4841L13.3761 18.2861L12.5 17.8049V20.0299Z"
      fill="#ACB4BE"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.5 20.0305L7.37094 22.8478C7.18054 22.9524 6.98229 23 6.78993 23C6.06121 23 5.41006 22.3187 5.54954 21.466L6.53017 15.4984L2.38078 11.2744C1.63483 10.5156 2.04699 9.19073 3.07542 9.03486L8.80997 8.16079L11.3726 2.73052C11.6027 2.24591 12.0512 2.00064 12.5 2V11.4618L12.4994 4.79491L10.5001 9.03158L10.0621 9.9598L9.08225 10.1091L4.6069 10.7912L7.845 14.0882L8.55491 14.8109L8.38723 15.8314L7.62247 20.4848L11.6238 18.2867L12.5 17.8055V20.0305Z"
      fill="#ACB4BE"
    />
  </Svg>
);


export const iconNext = <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <Path fill-rule="evenodd" clip-rule="evenodd" d="M16 12C16 11.7901 15.9145 11.5889 15.7625 11.4413L9.36247 5.22697C9.04828 4.9219 8.54176 4.92472 8.23112 5.23327C7.92047 5.54182 7.92334 6.03926 8.23753 6.34433L14.0622 12L8.23753 17.6557C7.92334 17.9607 7.92047 18.4582 8.23112 18.7667C8.54176 19.0753 9.04828 19.0781 9.36247 18.773L15.7625 12.5587C15.9145 12.4111 16 12.2099 16 12Z" fill="#808191" />
</Svg>
