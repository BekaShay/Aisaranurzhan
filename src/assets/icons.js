import React from 'react';
import Svg, { Path, Rect, G, Defs, ClipPath, Circle } from 'react-native-svg';

export const Logo = (size = 1) => (
  <Svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Rect width="80" height="80" rx="12" fill="#5559F4"/>
    <G clip-path="url(#clip0_2328_14553)">
      <Path d="M59.0576 39.9981V39.209C59.3161 39.267 59.4453 39.4088 59.4453 39.6342C59.4453 39.7436 59.4084 39.8307 59.3343 39.8956C59.2606 39.9639 59.1682 39.9981 59.0576 39.9981Z" fill="white"/>
      <Path d="M59.0576 47.4307V48.2197C59.1682 48.2197 59.2606 48.1856 59.3343 48.1173C59.4084 48.0524 59.4453 47.9652 59.4453 47.8558C59.4453 47.6303 59.3161 47.4886 59.0576 47.4307Z" fill="white"/>
      <Path 
        fill-rule="evenodd" 
        clip-rule="evenodd" 
        d="M47.6188 64.7619C61.0841 64.7619 71.9997 53.8462 71.9997 40.381C71.9997 26.9157 61.0841 16 47.6188 16C35.2365 16 25.0101 25.2305 23.4453 37.186C24.7652 35.7846 26.4475 35.0839 28.4921 35.0839C30.3971 35.0839 31.765 35.4964 32.5959 36.3214H32.6567C32.6365 36.1202 32.6263 35.8888 32.6263 35.6272V29.4095H37.8853V51.3524H32.9607V49.9639L32.9911 49.0886H32.9303C31.9373 50.5978 30.4275 51.3524 28.401 51.3524C27.361 51.3524 
        26.4203 51.1747 25.5789 50.819C29.4897 59.0619 37.8886 64.7619 47.6188 64.7619ZM44.6888 35.4461H39.4298V45.5271C39.4298 47.5794 39.9263 49.0685 40.9195 49.9941C41.9325 50.8995 43.2906 51.3524 44.9926 51.3524C46.0465 51.3524 47.0193 51.111 47.911 50.628C48.8028 50.1452 49.4614 49.4912 49.8868 48.6662H49.9478L49.8868 49.632V51.3524H54.9331V35.4461H49.6741V42.3277C49.6741 43.5552 49.3904 44.5814 48.8229 45.4064C48.2554 46.2113 
        47.4347 46.6136 46.3607 46.6136C45.2462 46.6136 44.6888 45.9295 44.6888 44.5613V35.4461ZM59.6816 35.8993C59.4164 35.6363 59.0995 35.5048 58.7301 35.5048C58.3543 35.5048 58.034 35.6363 57.7689 35.8993C57.5037 36.1658 57.3712 36.5244 57.3712 36.9753C57.3712 37.1939 57.4099 37.404 57.487 37.6056C57.5641 37.8105 57.668 37.9779 57.799 38.1077L58.408 37.7849C58.2001 37.539 58.0959 37.2981 58.0959 37.0624C58.0959 36.8541 58.1599 
        36.6918 58.2873 36.5757C58.418 36.4595 58.5692 36.4015 58.7402 36.4015C58.9081 36.4015 59.0525 36.4561 59.1732 36.5654C59.2973 36.6782 59.3594 36.8336 59.3594 37.0317C59.3594 37.2674 59.2756 37.474 59.1077 37.6517L59.6916 38.0257C59.8227 37.9028 59.9199 37.7456 59.9836 37.5543C60.0506 37.3665 60.0841 37.1735 60.0841 36.9753C60.0841 36.5244 59.9501 36.1658 59.6816 35.8993ZM59.6968 38.6559C59.4417 38.4066 59.1196 38.2819 
        58.7301 38.2819C58.361 38.2819 58.0422 38.4117 57.7738 38.6713C57.5053 38.9309 57.3712 39.2845 57.3712 39.732C57.3712 39.9369 57.4047 40.1402 57.4717 40.3417C57.5391 40.5467 57.6311 40.7192 57.7488 40.8592L58.3577 40.5313C58.1834 40.2648 58.0959 40.0223 58.0959 39.8037C58.0959 39.6534 58.1346 39.5202 58.2117 39.404C58.2925 39.2913 58.408 39.2196 58.5591 39.1888V40.8541C58.6798 40.8678 58.7706 40.8746 58.831 40.8746C59.2 
        40.8746 59.5002 40.7653 59.7318 40.5467C59.9668 40.3315 60.0841 40.0343 60.0841 39.6551C60.0841 39.2384 59.9549 38.9053 59.6968 38.6559ZM57.4315 41.3377H60.0238V42.1883H59.7974L59.6362 42.178V42.1883C59.9348 42.3693 60.0841 42.6494 60.0841 43.0286C60.0841 43.6606 59.7605 43.9765 59.1129 43.9765H57.4315V43.0901H58.9517C59.1799 43.0901 59.2939 42.9927 59.2939 42.798C59.2939 42.6102 59.2287 42.4667 59.0976 42.3676C58.9669 
        42.272 58.8023 42.2242 58.6045 42.2242H57.4315V41.3377ZM59.2991 44.6989H58.3878C58.2504 44.6989 58.1261 44.7194 58.0154 44.7604C57.9048 44.8014 57.814 44.8577 57.7436 44.9295C57.6765 45.0012 57.6195 45.0764 57.5726 45.1549C57.5257 45.2369 57.4903 45.3274 57.4669 45.4265C57.4434 45.529 57.4282 45.6178 57.4214 45.6929C57.4114 45.7715 57.4065 45.8518 57.4065 45.9337C57.4065 45.9611 57.4114 46.0414 57.4214 46.1746H58.1766C58.1733 
        46.137 58.1715 46.0977 58.1715 46.0567C58.1715 45.7424 58.2821 45.5853 58.5037 45.5853H59.2991V46.1387H59.9787V45.5853H60.7235V44.7245H59.9787V44.3607H59.2991V44.6989ZM58.7301 46.5033C59.1196 46.5033 59.4417 46.628 59.6968 46.8773C59.9549 47.1266 60.0841 47.4597 60.0841 47.8763C60.0841 48.2557 59.9668 48.5528 59.7318 48.768C59.5002 48.9865 59.2 49.0959 58.831 49.0959C58.7706 49.0959 58.6798 49.0889 58.5591 49.0755V47.41C58.408 
        47.4408 58.2925 47.5127 58.2117 47.6255C58.1346 47.7416 58.0959 47.8747 58.0959 48.025C58.0959 48.2435 58.1834 48.4861 58.3577 48.7525L57.7488 49.0804C57.6311 48.9405 57.5391 48.768 57.4717 48.5629C57.4047 48.3615 57.3712 48.1582 57.3712 47.9534C57.3712 47.5057 57.5053 47.1522 57.7738 46.8925C58.0422 46.6331 58.361 46.5033 58.7301 46.5033ZM60.0238 49.5589H57.4315V50.4454H58.4381C58.6832 50.4454 58.8746 50.507 59.012 50.6298C59.1498 
        50.7529 59.2186 50.9339 59.2186 51.1732C59.2186 51.2619 59.2134 51.3216 59.2034 51.3524H60.0592C60.0659 51.3112 60.0692 51.2771 60.0692 51.25C60.0692 51.0586 60.007 50.8843 59.883 50.7273C59.7587 50.5734 59.606 50.4677 59.4249 50.4094V50.3994L59.5859 50.4094H60.0238V49.5589Z" 
        fill="white"
      />
      <Path d="M27.5197 40.4863C26.932 41.1503 26.6382 42.0558 26.6382 43.2027C26.6382 44.3497 26.9219 45.2753 27.4894 45.9795C28.0568 46.6837 28.7965 47.036 29.7084 47.036C30.5799 47.036 31.3094 46.7139 31.8971 46.0701C32.4848 45.4262 32.7787 44.4704 32.7787 43.2027C32.7787 42.1966 32.5051 41.3314 31.9579 40.607C31.431 39.8625 30.6812 39.4902 29.7084 39.4902C28.837 39.4902 28.1074 39.8222 27.5197 40.4863Z" fill="white"/>
      <Path fill-rule="evenodd" clip-rule="evenodd" d="M10.2191 37.5243C8.7397 39.0535 8 40.9852 8 43.3194C8 45.5328 8.77009 47.4443 10.3103 49.0541C11.8505 50.6638 13.9479 51.4687 16.6028 51.4687C17.8187 51.4687 19.0245 51.2675 20.2202 50.865C21.4361 50.4627 22.4595 49.9092 23.2904 49.2049L21.3449 45.5529C19.7642 46.5992 18.3253 47.1225 17.0283 47.1225C16.1367 47.1225 15.3463 46.8909 14.6572 46.4282C13.9885 45.9452 13.5629 45.2511 13.3805 44.3456H23.26C23.3411 43.6212 23.3816 43.0779 23.3816 42.7157C23.3816 40.5023 22.7331 38.7014 21.4361 37.313C20.1594 35.9045 18.3963 35.2002 16.1468 35.2002C13.6744 35.2002 11.6985 35.9749 10.2191 37.5243ZM18.1835 41.3575H13.5021C13.8466 39.8081 14.6877 39.0334 16.0252 39.0334C16.6737 39.0334 17.1905 39.2547 17.5755 39.6974C17.9808 40.1401 18.1835 40.6935 18.1835 41.3575Z" fill="white"/>
    </G>
    <Defs>
      <ClipPath id="clip0_2328_14553">
        <Rect width="64" height="48.7619" fill="white" transform="translate(8 16)"/>
      </ClipPath>
    </Defs>
  </Svg>
)

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

export const iconPlay = (size = 1, color = "white") => (
  <Svg width={11*size} height={14*size} viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path d="M10.5 6.13398C11.1667 6.51888 11.1667 7.48112 10.5 7.86603L1.5 13.0622C0.833333 13.4471 0 12.966 0 12.1962V1.80385C0 1.03405 0.833333 0.552922 1.5 0.937822L10.5 6.13398Z" fill={color}/>
  </Svg>
)

export const iconPause = (size = 1, color = "white") => (
  <Svg width={8*size} height={14*size} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path d="M1.66667 13.3333H1C0.447715 13.3333 0 12.8856 0 12.3333V1C0 0.447715 0.447716 0 1 0H1.66667C2.21895 0 2.66667 0.447714 2.66667 0.999999V12.3333C2.66667 12.8856 2.21895 13.3333 1.66667 13.3333Z" fill={color}/>
    <Path d="M7 13.3333H6.33333C5.78105 13.3333 5.33333 12.8856 5.33333 12.3333V1C5.33333 0.447715 5.78105 0 6.33333 0H7C7.55228 0 8 0.447714 8 0.999999V12.3333C8 12.8856 7.55228 13.3333 7 13.3333Z" fill={color}/>
  </Svg>

)

export const search = (fill = "#808191") => (
  <Svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path fill-rule="evenodd" clip-rule="evenodd" d="M0.976744 5.69767C0.976744 3.09056 3.09056 0.976744 5.69767 0.976744C8.30479 0.976744 10.4186 3.09056 10.4186 5.69767C10.4186 8.30479 8.30479 10.4186 5.69767 10.4186C3.09056 10.4186 0.976744 8.30479 0.976744 5.69767ZM5.69767 0C2.55112 0 0 2.55112 0 5.69767C0 8.84423 2.55112 11.3953 5.69767 11.3953C7.09514 11.3953 8.37516 10.8921 9.36641 10.0571L13.1663 13.857C13.357 14.0477 13.6662 14.0477 13.857 13.857C14.0477 13.6662 14.0477 13.357 13.857 13.1663L10.0571 9.36641C10.8921 8.37516 11.3953 7.09514 11.3953 5.69767C11.3953 2.55112 8.84423 0 5.69767 0Z" fill={fill}/>
  </Svg>
)

export const clear = () => <Svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M8.00016 1.3335C4.31737 1.3335 1.3335 4.31737 1.3335 8.00016C1.3335 11.683 4.31737 14.6668 8.00016 14.6668C11.683 14.6668 14.6668 11.683 14.6668 8.00016C14.6668 4.31737 11.683 1.3335 8.00016 1.3335ZM11.269 9.75016C11.3953 9.87651 11.3953 10.0808 11.269 10.2072L10.2045 11.269C10.0781 11.3953 9.87382 11.3953 9.74747 11.269L8.00016 9.50554L6.25016 11.269C6.12382 11.3953 5.91952 11.3953 5.79317 11.269L4.73135 10.2045C4.605 10.0781 4.605 9.87382 4.73135 9.74747L6.49479 8.00016L4.73135 6.25016C4.605 6.12382 4.605 5.91952 4.73135 5.79317L5.79586 4.72866C5.92221 4.60231 6.12651 4.60231 6.25285 4.72866L8.00016 6.49479L9.75016 4.73135C9.87651 4.605 10.0808 4.605 10.2072 4.73135L11.2717 5.79586C11.398 5.92221 11.398 6.12651 11.2717 6.25285L9.50554 8.00016L11.269 9.75016Z" fill="#ACB4BE"/>
</Svg>


export const filter = <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path fillRule="evenodd" clipRule="evenodd" d="M19.425 6H22.5V7.5H19.425C19.05 9.225 17.55 10.5 15.75 10.5C13.95 10.5 12.45 9.225 12.075 7.5H1.5V6H12.075C12.45 4.275 13.95 3 15.75 3C17.55 3 19.05 4.275 19.425 6ZM13.5 6.75C13.5 8.025 14.475 9 15.75 9C17.025 9 18 8.025 18 6.75C18 5.475 17.025 4.5 15.75 4.5C14.475 4.5 13.5 5.475 13.5 6.75ZM4.575 18H1.5V16.5H4.575C4.95 14.775 6.45 13.5 8.25 13.5C10.05 13.5 11.55 14.775 11.925 16.5H22.5V18H11.925C11.55 19.725 10.05 21 8.25 21C6.45 21 4.95 19.725 4.575 18ZM10.5 17.25C10.5 15.975 9.525 15 8.25 15C6.975 15 6 15.975 6 17.25C6 18.525 6.975 19.5 8.25 19.5C9.525 19.5 10.5 18.525 10.5 17.25Z" fill="#5559F4"/>
</Svg>

export const filterON = <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path fillRule="evenodd" clipRule="evenodd" d="M19.425 6H22.5V7.5H19.425C19.05 9.225 17.55 10.5 15.75 10.5C13.95 10.5 12.45 9.225 12.075 7.5H1.5V6H12.075C12.45 4.275 13.95 3 15.75 3C17.55 3 19.05 4.275 19.425 6ZM13.5 6.75C13.5 8.025 14.475 9 15.75 9C17.025 9 18 8.025 18 6.75C18 5.475 17.025 4.5 15.75 4.5C14.475 4.5 13.5 5.475 13.5 6.75ZM4.575 18H1.5V16.5H4.575C4.95 14.775 6.45 13.5 8.25 13.5C10.05 13.5 11.55 14.775 11.925 16.5H22.5V18H11.925C11.55 19.725 10.05 21 8.25 21C6.45 21 4.95 19.725 4.575 18ZM10.5 17.25C10.5 15.975 9.525 15 8.25 15C6.975 15 6 15.975 6 17.25C6 18.525 6.975 19.5 8.25 19.5C9.525 19.5 10.5 18.525 10.5 17.25Z" fill="#5559F4"/>
<Circle cx="19" cy="5" r="4" fill="#5559F4" stroke="white" strokeWidth="2"/>
</Svg>

export const time = <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path fillRule="evenodd" clipRule="evenodd" d="M9.9997 2.5C14.142 2.5 17.5 5.85787 17.5 10C17.5 14.1415 14.142 17.5 9.9997 17.5C5.8574 17.5 2.5 14.1415 2.5 10C2.5 5.85787 5.8574 2.5 9.9997 2.5ZM9.9997 3.75C6.54789 3.75 3.75 6.54809 3.75 10C3.75 13.4515 6.54812 16.25 9.9997 16.25C13.4514 16.25 16.25 13.4514 16.25 10C16.25 6.54824 13.4516 3.75 9.9997 3.75ZM10.312 4.97727C9.97161 4.97727 9.69215 5.24684 9.69215 5.58368V9.719H6.96075C6.62024 9.719 6.34092 9.98819 6.34092 10.3254C6.34092 10.6626 6.62024 10.9318 6.96075 10.9318H10.9318V5.58368C10.9318 5.24684 10.6524 4.97727 10.312 4.97727Z" fill="#5559F4"/>
</Svg>




/// BOTTOM TAB ICONS

export const coursesON = <Svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path fill-rule="evenodd" clip-rule="evenodd" d="M23 25C23.5523 25 24 24.5523 24 24V7.82499C24 7.82499 24 7.82499 24 7.82499H8.99995C8.54432 7.82499 8.17495 7.45562 8.17495 6.99999C8.17495 6.54435 8.54432 6.17499 8.99995 6.17499H24C24 6.17499 24 6.17499 24 6.17499V4C24 3.44772 23.5523 3 23 3H7C5.343 3 4 4.343 4 6V22C4 23.657 5.343 25 7 25H23Z" fill="#5559F4"/>
</Svg>

export const coursesOFF = <Svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M23.1818 7.63672H9.54541" stroke="#111621" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path fillRule="evenodd" clipRule="evenodd" d="M23.1818 23C23.1818 23.5523 22.7341 24 22.1818 24H7.72727C6.22091 24 5 22.7791 5 21.2727V6.72727C5 5.22091 6.22091 4 7.72727 4H22.1818C22.7341 4 23.1818 4.44772 23.1818 5V23Z" stroke="#111621" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>

export const testsON = <Svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path fillRule="evenodd" clipRule="evenodd" d="M8.84571 3H19.1543C22.7581 3 25 5.54329 25 9.14367V18.8563C25 22.4567 22.7581 25 19.1543 25H8.84571C5.2419 25 3 22.4567 3 18.8563V9.14367C3 5.54329 5.25238 3 8.84571 3ZM9.73347 12.0219C9.73347 11.5663 9.36411 11.1969 8.90847 11.1969C8.45284 11.1969 8.08347 11.5663 8.08347 12.0219V19.568C8.08347 20.0237 8.45284 20.393 8.90847 20.393C9.36411 20.393 9.73347 20.0237 9.73347 19.568V12.0219ZM14.0419 7.58604C14.4975 7.58604 14.8669 7.95541 14.8669 8.41104V19.568C14.8669 20.0237 14.4975 20.393 14.0419 20.393C13.5863 20.393 13.2169 20.0237 13.2169 19.568V8.41104C13.2169 7.95541 13.5863 7.58604 14.0419 7.58604ZM19.9165 16.0095C19.9165 15.5539 19.5472 15.1845 19.0915 15.1845C18.6359 15.1845 18.2665 15.5539 18.2665 16.0095V19.568C18.2665 20.0237 18.6359 20.393 19.0915 20.393C19.5472 20.393 19.9165 20.0237 19.9165 19.568V16.0095Z" fill="#5559F4"/>
</Svg>

export const testsOFF = <Svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M9.37121 12.2021V19.0623" stroke="#111621" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin='round'/>
<Path d="M14.0382 8.91895V19.0617" stroke="#111621" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M18.6285 15.8271V19.0622" stroke="#111621" strokeWidth="1.5" strokeLinecap='round' strokeLinejoin="round"/>
<Path fillRule="evenodd" clipRule="evenodd" d="M18.6857 4H9.31429C6.04762 4 4 6.31208 4 9.58516V18.4148C4 21.6879 6.0381 24 9.31429 24H18.6857C21.9619 24 24 21.6879 24 18.4148V9.58516C24 6.31208 21.9619 4 18.6857 4Z" stroke="#111621" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>


export const myCoursesON = <Svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M18.5 6.49999C18.5 4.01468 16.4853 2 14 2C11.5147 2 9.49998 4.01468 9.49998 6.49999C9.49998 8.98529 11.5147 11 14 11C16.4853 11 18.5 8.98529 18.5 6.49999ZM12.9495 13.3015C10.1684 11.599 5.66374 11.1312 3.39687 11.0023C2.63515 10.9592 2 11.5395 2 12.2722V22.7159C2 23.3876 2.54328 23.9478 3.24172 23.9838C5.28827 24.0912 9.42873 24.4845 12.2904 25.9259C12.7297 26.1471 13.2504 25.8457 13.2504 25.3695V13.8387C13.25 13.6198 13.1417 13.4192 12.9495 13.3015ZM24.6031 11.0023C22.3367 11.1308 17.8315 11.599 15.0509 13.3015C14.8587 13.4192 14.7504 13.6278 14.7504 13.8467V25.3681C14.7504 25.8457 15.2726 26.1476 15.7132 25.9259C18.5745 24.4859 22.7126 24.0926 24.7587 23.9853C25.4571 23.9487 26.0004 23.3885 26.0004 22.7168V12.2722C25.9999 11.5395 25.3648 10.9592 24.6031 11.0023Z" fill="#5559F4"/>
</Svg>

export const myCoursesOFF = <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path fillRule="evenodd" clipRule="evenodd" d="M9.50037 3.75C9.50037 2.50721 10.5076 1.5 11.7504 1.5C12.9932 1.5 14.0004 2.50721 14.0004 3.75C14.0004 4.99279 12.9932 6 11.7504 6C10.5076 6 9.50037 4.99279 9.50037 3.75ZM11.7504 0C9.67915 0 8.00037 1.67879 8.00037 3.75C8.00037 5.82121 9.67915 7.5 11.7504 7.5C13.8216 7.5 15.5004 5.82121 15.5004 3.75C15.5004 1.67879 13.8216 0 11.7504 0ZM20.2571 8.04477C21.9462 7.73829 23.5 9.03466 23.5 10.7517V19.0807C23.5 20.4098 22.5501 21.5498 21.2411 21.7876L11.9113 23.4827C11.8595 23.494 11.8056 23.5 11.7504 23.5C11.6965 23.5 11.6439 23.4943 11.5933 23.4835L2.25992 21.7876C0.951441 21.5499 0 20.4104 0 19.0807V10.7517C0 9.03422 1.55526 7.73837 3.2439 8.04477L11.4942 9.5449C11.5741 9.51585 11.6604 9.5 11.7504 9.5C11.8403 9.5 11.9265 9.51582 12.0063 9.54482L20.2571 8.04477ZM20.9729 20.3118L12.5004 21.8511V10.9796L20.5249 9.52067C21.2937 9.38133 22 9.97086 22 10.7517V19.0807C22 19.6856 21.5679 20.2037 20.9729 20.3118ZM2.9761 9.52067L11.0004 10.9797V21.8512L2.52808 20.3118C1.93257 20.2036 1.5 19.685 1.5 19.0807V10.7517C1.5 9.97131 2.20684 9.38126 2.9761 9.52067Z" fill="#111621"/>
</Svg>


export const tasksON = <Svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path fillRule="evenodd" clipRule="evenodd" d="M7.4 25H20.6C23.0299 25 25 23.0299 25 20.6V7.4C25 4.9701 23.0299 3 20.6 3H7.4C4.9701 3 3 4.9701 3 7.4V20.6C3 23.0299 4.9701 25 7.4 25ZM18.3741 11.1661C18.6039 10.8215 18.5108 10.3558 18.1661 10.126C17.8215 9.89628 17.3558 9.98941 17.126 10.3341L13.5421 15.71L11.1661 14.126C10.8215 13.8963 10.3558 13.9894 10.126 14.3341C9.89628 14.6787 9.98941 15.1444 10.3341 15.3741L13.3341 17.3741C13.6787 17.6039 14.1444 17.5108 14.3741 17.1661L18.3741 11.1661Z" fill="#5559F4"/>
</Svg>

export const tasksOFF = <Svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M10.5 14.9453L13.5 16.9453L17.5 10.9453" stroke="#111621" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path fillRule="evenodd" clipRule="evenodd" d="M20 23.9453H8C5.791 23.9453 4 22.1543 4 19.9453V7.94531C4 5.73631 5.791 3.94531 8 3.94531H20C22.209 3.94531 24 5.73631 24 7.94531V19.9453C24 22.1543 22.209 23.9453 20 23.9453Z" stroke="#111621" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>

export const profileON = <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M3 6H21" stroke="#5559F4" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M3 18H21" stroke="#5559F4" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M3 12H21" stroke="#5559F4" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>


export const profileOFF = <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M3 6H21" stroke="#111621" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M3 18H21" stroke="#111621" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M3 12H21" stroke="#111621" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>








