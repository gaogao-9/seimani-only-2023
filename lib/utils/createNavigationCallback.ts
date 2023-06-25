import { startViewTransition } from "@/utils/startViewTransition";

export const createNavigationCallback =
  (push: (href: string) => void) =>
  (onClick?: () => void) =>
  (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    startViewTransition(async () => {
      onClick?.();
      const beforeHref = window.location.href;
      const afterHref = (e.target as HTMLAnchorElement).href;
      if (beforeHref === afterHref) return;
      push(afterHref);
      // URLの遷移を検出して、navigateの完了を検出する。タイムアウトを5000msとする
      await Promise.race([
        new Promise<void>((resolve) => {
          const checkNavigateLoopCallback = () => {
            if (
              beforeHref !== window.location.href &&
              (window.document.readyState === "interactive" ||
                window.document.readyState === "complete")
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
