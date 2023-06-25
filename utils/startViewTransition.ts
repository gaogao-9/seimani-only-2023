/**
 * View Transtions APIのstartViewTransitionをレガシー環境でも動作させるための関数です
 * 対応ブラウザではTransitionを行い、非対応ブラウザでは即座にコールバックを実行します
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API
 */
export const startViewTransition = (
  callback: () => void,
): ViewTransition | null => {
  if (document.startViewTransition != null) {
    return document.startViewTransition(callback);
  } else {
    callback();
    return null;
  }
};
