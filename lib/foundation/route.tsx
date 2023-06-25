export type Route = {
  title: string;
  pathname: string;
};

export const routes: Array<Route> = [
  {
    title: "トップページ",
    pathname: "/top",
  },
  {
    title: "会場情報",
    pathname: "/map",
  },
  {
    title: "参加者全般",
    pathname: "/common",
  },
  {
    title: "サークル参加",
    pathname: "/circle",
  },
  {
    title: "コスプレ参加",
    pathname: "/cosplay",
  },
  {
    title: "イベント情報",
    pathname: "/event",
  },
  {
    title: "感染症対策",
    pathname: "/infection",
  },
  {
    title: "スタッフ一覧",
    pathname: "/staff",
  },
];
