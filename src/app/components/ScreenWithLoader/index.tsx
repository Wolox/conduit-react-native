import React, { ReactNode, useRef, useEffect } from 'react';
import { Loading } from '@components/Loadable';

interface Props {
  loading: boolean;
  refreshed?: boolean;
  children: ReactNode;
  withInitialLoading?: boolean;
}

function ScreenWithLoader({ loading, refreshed, children, withInitialLoading = true }: Props) {
  const initialLoading = useRef(withInitialLoading);
  useEffect(() => {
    if (initialLoading.current && loading) initialLoading.current = false;
  }, [loading]);

  return initialLoading.current || (loading && !refreshed) ? <Loading /> : <>{children}</>;
}

export default ScreenWithLoader;
