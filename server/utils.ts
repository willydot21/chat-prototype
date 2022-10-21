
export function isInstanceOfExpress(app?: any) {

  if (app) return (
    !app.hasOwnProperty("listen") ||
    typeof app.listen !== "function"
  );

  return false;

}