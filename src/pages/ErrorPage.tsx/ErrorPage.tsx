import { useRouteError } from "react-router-dom";

type RouteError = {
    statusText?: string;
    message?: string;
  };

export function ErrorPage() {
  const error = useRouteError() as RouteError;

  return (
    <div>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}
