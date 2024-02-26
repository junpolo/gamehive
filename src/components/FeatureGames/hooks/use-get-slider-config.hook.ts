import * as React from "react";

const Slider = React.lazy(() => import("react-slick"));

export const useGetSliderConfig = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  const data = [
    {
      header: "New Release",
      title: "Counter Strike Global Offensive",
      subTitle:
        "Counter-Strike: Global Offensive is a 2012 multiplayer tactical first-person shooter developed by Valve and Hidden Path Entertainment. It is the fourth game in the Counter-Strike series.",
      image: "https://images8.alphacoders.com/132/1329760.jpeg",
      logo: "https://logos-world.net/wp-content/uploads/2023/02/CSGO-Emblem.png",
    },
    {
      header: "Upcoming",
      title: "Grand Theft Auto VI",
      subTitle:
        "Grand Theft Auto VI is a 2030 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the seventh main entry in the Grand Theft Auto series, following 2013's Grand Theft Auto IV, and the fifteenth instalment overall. ",
      image:
        "https://ilg.lxgindia.com/esports-arena-league/elements/dota2-character.png",
    },
    {
      header: "Upcoming",
      title: "Grand Theft Auto VI",
      subTitle:
        "Grand Theft Auto VI is a 2030 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the seventh main entry in the Grand Theft Auto series, following 2013's Grand Theft Auto IV, and the fifteenth instalment overall. ",
      image:
        "https://ilg.lxgindia.com/esports-arena-league/elements/dota2-character.png",
    },
  ];

  return {
    Slider,
    sliderSettings,
    data,
  };
};
