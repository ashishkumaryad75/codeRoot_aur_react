import React, { useState, useEffect } from 'react';

function ErrorPage({ children }) {
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState(null);
  const [info, setInfo] = useState(null);

  useEffect(() => {
    const handleError = (e) => {
      setHasError(true);
      setError(e);
    };

    const handleInfo = (info) => {
      setInfo(info);
    };

    // Manually catching errors using window.onerror and window.onunhandledrejection
    window.onerror = handleError;
    window.onunhandledrejection = handleInfo;

    return () => {
      window.onerror = null;
      window.onunhandledrejection = null;
    };
  }, []);

  if (hasError) {
    return (
      <div style={{ color: 'red' }}>
        <h2>Something went wrong.</h2>
        <p>{error?.message}</p>
        <pre>{info}</pre>
      </div>
    );
  }

  return children;
}

export default ErrorPage;
