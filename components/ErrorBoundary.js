import React, { useState } from 'react';

export default function ErrorBoundary({ children }) {
  const [hasError, setHasError] = useState(false);

  try {
    if (hasError) {
      throw new Error("An unexpected error occurred.");
    }
    return <>{children}</>;
  } catch (error) {
    console.error("Error caught in ErrorBoundary:", error);
    return (
      <div>
        <h1>Something went wrong!</h1>
        <p>Please refresh the page or try again later.</p>
        <button onClick={() => setHasError(false)}>Retry</button>
      </div>
    );
  }
}
