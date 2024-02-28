import * as React from "react";

import Palworld from "../../../../public/videos/palworld.mp4";
import Gta6 from "../../../../public/videos/gta6.mp4";
import COD from "../../../../public/videos/cod.mp4";

const Slider = React.lazy(() => import("react-slick"));

export const useGetSliderConfig = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const data = [
    {
      header: "New Release",
      title: "Call of Duty: Warzone",
      subTitle:
        "Call of Duty: Warzone 2.0 is a free-to-play battle royale video game developed by Infinity Ward and Raven Software for PlayStation 4, PlayStation 5, Windows, Xbox One, and Xbox Series X/S. It is a sequel to 2020's Call of Duty: Warzone.",
      image:
        "https://static.wixstatic.com/media/9bd05f_bd92cceb1f6c411f94997bed9dc05960~mv2.png/v1/fill/w_780,h_639,al_c,q_90/9bd05f_bd92cceb1f6c411f94997bed9dc05960~mv2.png",
      video: COD,
    },
    {
      header: "Upcoming",
      title: "Grand Theft Auto VI",
      subTitle:
        "Grand Theft Auto VI is a 2030 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the seventh main entry in the Grand Theft Auto series, following 2013's Grand Theft Auto IV, and the fifteenth instalment overall.",
      image: "https://stories.gamesradar.com/gta6/assets/17.png",
      video: Gta6,
    },
    {
      header: "Upcoming",
      title: "Palworld",
      subTitle:
        "Palworld is an upcoming action-adventure, survival, and monster-taming game created and published by Japanese developer Pocket Pair. The game is set in an open world populated with animal-like creatures called Pals, which players can battle and capture to use for base building, traversal, and combat.",
      image:
        "https://oyster.ignimgs.com/mediawiki/apis.ign.com/palworld/1/10/T_SheepBall_icon_normal.png?width=325",
      video: Palworld,
    },
  ];

  return {
    Slider,
    sliderSettings,
    data,
  };
};
