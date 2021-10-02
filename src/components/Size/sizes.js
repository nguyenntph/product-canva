import FacebookLogo from "./assets/facebook.svg";
import InstagramLogo from "./assets/instagram.svg";
import YoutubeLogo from "./assets/youtube.svg";

export default [
  {
    group: "Instagram",
    logo: InstagramLogo,
    posts: [
      {
        name: "Post",
        width: 1080,
        height: 1080
      },
      {
        name: "Story",
        width: 1080,
        height: 1920
      },
      {
        name: "Ad",
        width: 1080,
        height: 1080
      }
    ]
  },
  {
    group: "Facebook",
    logo: FacebookLogo,
    posts: [
      {
        name: "Post",
        width: 940,
        height: 788
      },
      {
        name: "Cover",
        width: 851,
        height: 315
      },
      {
        name: "Ad",
        width: 1200,
        height: 628
      }
    ]
  },
  {
    group: "Youtube",
    logo: YoutubeLogo,
    posts: [
      {
        name: "Thumbnail",
        width: 1280,
        height: 720
      },
      {
        name: "Channel",
        width: 2560,
        height: 1440
      }
    ]
  }
];
