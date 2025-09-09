import React, { Suspense, lazy } from 'react';
const Spline = lazy(() => import('@splinetool/react-spline'));

const SplineScene = ({ scene, className }) => {
  return (
    <Suspense 
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <div className="loader">
            <div className="spinner"></div>
          </div>
        </div>
      }
    >
      <Spline
        scene={scene}
        className={className}
      />
    </Suspense>
  );
};

export { SplineScene };