import { Global, css } from "@emotion/react";
import { routes } from "@/foundation/route";

const routesText = encodeURIComponent(
  routes.reduce((text, { title }) => text + title, ""),
);

const routingMenuFont = css`
  @import url("https://fonts.googleapis.com/css2?family=Kaisei+Opti:wght@400&display=swap&text=${routesText}");
`;

const BodyTextFont = css`
  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;500&display=swap");
`;

export const GlobalStyle: React.FC = () => {
  return (
    <>
      <Global styles={routingMenuFont} />
      <Global styles={BodyTextFont} />
    </>
  );
};
