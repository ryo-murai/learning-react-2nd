import { useRef, useEffect } from "react";

export default function useMountedRef() {
  const mountedRef = useRef(false);

  // Set mountedRef to true when the component mounts
  // and false when it unmounts.
  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  return mountedRef;
}