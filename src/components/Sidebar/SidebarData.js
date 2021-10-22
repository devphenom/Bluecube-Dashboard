import HouseOutlinedIcon from "@material-ui/icons/House";
import PostAddIcon from "@material-ui/icons/PostAdd";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import GolfCourseIcon from "@material-ui/icons/GolfCourse";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import LinkIcon from "@material-ui/icons/Link";
import DirectionsWalkIcon from "@material-ui/icons/DirectionsWalk";
import GroupIcon from "@material-ui/icons/Group";

export const SidebarConstData = [
  {
    title: "Home",
    icon: <HouseOutlinedIcon />,
    link: "/",
  },
  {
    title: "Message",

    icon: <PostAddIcon />,
    link: "/message",
  },
];
export const SidebarData = [
  {
    title: "Ranking",
    icon: <LocationCityIcon />,
    link: "/rank",
  },
  {
    title: "Challenge",
    icon: <GolfCourseIcon />,
    link: "/challenge",
  },
  {
    title: "Party",
    icon: <LibraryMusicIcon />,
    link: "/party",
  },
  {
    title: "Connect",
    icon: <LinkIcon />,
    link: "/connect",
  },
  {
    title: "Parade",
    icon: <DirectionsWalkIcon />,
    link: "/parade",
  },
  {
    title: "Group",
    // icon: "K",
    icon: <GroupIcon />,
    link: "/group",
  },
];
