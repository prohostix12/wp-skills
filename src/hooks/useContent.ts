"use client";

import { useEffect, useState } from "react";

export function useContent<T>(section: string, fallback: T): T {
  const [data, setData] = useState<T>(fallback);

  useEffect(() => {
    let cancelled = false;
    fetch(`/api/content/${section}`)
      .then((r) => r.json())
      .then((d) => {
        if (!cancelled && d.data !== undefined) setData(d.data as T);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [section]);

  return data;
}
