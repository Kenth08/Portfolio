import { useState } from 'react';

/**
 * Lazy-loaded image that shows `fallback` if the file is missing or fails to load.
 */
export default function SmartImage({ src, alt, className = '', fallback = null, eager = false, ...rest }) {
  const [failed, setFailed] = useState(!src);

  if (failed) return fallback;

  return (
    <img
      src={src}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      onError={() => setFailed(true)}
      className={className}
      {...rest}
    />
  );
}
