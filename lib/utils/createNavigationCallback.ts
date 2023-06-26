import { startViewTransition } from "@/utils/startViewTransition";

export const createNavigationCallback =
  (push: (href: string) => void) =>
  (onClick?: () => void) =>
  (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const beforeHref = window.location.href;
    const afterHref = (
      (e.target as HTMLElement).closest("a") as HTMLAnchorElement
    ).href;

    if (beforeHref === afterHref) return;

    window.sessionStorage.setItem("navigationStatus", "navigationStart");

    startViewTransition(async () => {
      onClick?.();
      window.sessionStorage.setItem("navigationStatus", "navigating");
      push(afterHref);
      // URLの遷移を検出して、navigateの完了を検出する。タイムアウトを5000msとする
      await Promise.race([
        new Promise<void>((resolve) => {
          const checkNavigateLoopCallback = () => {
            if (
              window.sessionStorage.getItem("navigationStatus") ===
              "navigationEnd"
            ) {
              resolve();
            } else {
              setTimeout(checkNavigateLoopCallback, 10);
            }
          };

          checkNavigateLoopCallback();
        }),
        new Promise<void>((resolve) => {
          setTimeout(resolve, 5000);
        }),
      ]);
    });
  };
