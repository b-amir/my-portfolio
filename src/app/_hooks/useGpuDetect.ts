// useGpuDetect.ts
import { getGPUTier } from 'detect-gpu';
import { useState, useEffect } from 'react';

type DeviceTier = "low" | "mobile" | "high" | "loading";

export const useGpuDetect = (): [DeviceTier, React.Dispatch<React.SetStateAction<DeviceTier>>] => {
  const [deviceTier, setDeviceTier] = useState<DeviceTier>("loading");

  useEffect(() => {
    let isMounted = true;
    
    const checkGPU = async () => {
      try {
        const gpuTier = await getGPUTier();
        
        if (isMounted && gpuTier) {
          const { tier, isMobile, fps } = gpuTier;
                    
          if (isMobile) {
            setDeviceTier("mobile");
          } else if (fps === undefined || fps < 40 || tier < 2) {
            setDeviceTier("low");
          } else {
            setDeviceTier("high");
          }
        }
      } catch (error) {
        if (isMounted) {
          console.error("GPU detection failed:", error);
          setDeviceTier("low"); // Fallback to low tier on error
        }
      }
    };

    checkGPU();
    
    // Cleanup function to prevent state updates after unmount
    return () => {
      isMounted = false;
    };
  }, []);

  return [deviceTier, setDeviceTier];
};
