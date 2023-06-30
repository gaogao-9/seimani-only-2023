export type Route = {
  title: string;
  name: string;
  pathname: string;
};

export const routes: Array<Route> = [
  {
    title: "トップページ",
    name: "top",
    pathname: "/top",
  },
  {
    title: "会場情報",
    name: "map",
    pathname: "/map",
  },
  {
    title: "参加者全般",
    name: "common",
    pathname: "/common",
  },
  {
    title: "サークル参加",
    name: "circle",
    pathname: "/circle",
  },
  {
    title: "コスプレ参加",
    name: "cosplay",
    pathname: "/cosplay",
  },
  {
    title: "イベント情報",
    name: "event",
    pathname: "/event",
  },
  {
    title: "スタッフ一覧",
    name: "staff",
    pathname: "/staff",
  },
];
