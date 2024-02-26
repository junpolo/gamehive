import { ElementType, Suspense as ReactSuspense } from "react";

export const Suspense =
  (Component: ElementType) => (props: JSX.IntrinsicAttributes) => {
    return (
      <ReactSuspense fallback={null}>
        <Component {...props} />
      </ReactSuspense>
    );
  };
