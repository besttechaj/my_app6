import React, { useEffect } from 'react';

export default function useTitleHook(param) {
  return useEffect(() => {
    document.title = `status: ${param}`;
  }, [param]);
}
