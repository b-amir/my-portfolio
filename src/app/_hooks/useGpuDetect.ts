// useGpuDetect.ts
import { getGPUTier } from 'detect-gpu';
import { useState, useEffect } from 'react';

type DeviceTier = "low" | "mobile" | "high" | "loading";

export const useGpuDetect = (): [DeviceTier, React.Dispatch<React.SetStateAction<DeviceTier>>] => {
  const [deviceTier, setDeviceTier] = useState<DeviceTier>("loading");

  useEffect(() => {
    const checkGPU = async () => {
      const gpuTier = await getGPUTier();
      if (gpuTier) {
        const { tier, isMobile, fps } = gpuTier;
        if (isMobile) {
          setDeviceTier("mobile");
        } else if (fps === undefined || fps < 40 || tier < 2) {
          setDeviceTier("low");
        } else {
          setDeviceTier("high");
        }
      }
    };

    checkGPU();
  }, []);

  return [deviceTier, setDeviceTier];
};
