import React from "react";

export type NetworkState = {
  online: boolean;
  downlink: number | null;
  downlinkMax: number | null;
  effectiveType: string | null;
  rtt: number | null;
  saveData: boolean | null;
  type: string | null;
};

const getConnection = () => {
  return (
    (navigator as any)?.connection ||
    (navigator as any)?.mozConnection ||
    (navigator as any)?.webkitConnection
  );
};

const useNetworkStateSubscribe = (callback: (e: Event) => void) => {
  window.addEventListener("online", callback, { passive: true });
  window.addEventListener("offline", callback, { passive: true });

  const connection = getConnection();

  if (connection) {
    connection.addEventListener("change", callback, { passive: true });
  }

  return () => {
    window.removeEventListener("online", callback);
    window.removeEventListener("offline", callback);

    if (connection) {
      connection.removeEventListener("change", callback);
    }
  };
};

const getNetworkStateServerSnapshot = () => {
  throw Error("useNetworkState is a client-only hook");
};

export function useNetworkState() {
  const cache = React.useRef({});

  const getSnapshot = () => {};

  return React.useSyncExternalStore(
    useNetworkStateSubscribe,
    getSnapshot,
    getNetworkStateServerSnapshot
  );
}
