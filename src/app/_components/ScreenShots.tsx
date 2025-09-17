import Link from "next/link";
import Image from "next/image";
import { Project } from "@/_types/Project";
import globalStyles from "@/_styles/page.module.scss";

export function ScreenShots({ currentProject }: { currentProject: Project }) {
  let screenshots;
  try {
    screenshots = typeof currentProject?.screenshots === 'string' 
      ? JSON.parse(currentProject.screenshots) 
      : currentProject?.screenshots;
  } catch (error) {
    console.error('Error parsing screenshots:', error);
    screenshots = null;
  }

  if (!screenshots || typeof screenshots !== 'object') {
    return <div className={globalStyles.moreImages}></div>;
  }

  return (
    <div className={globalStyles.moreImages}>
      {screenshots.mobile && Array.isArray(screenshots.mobile) && screenshots.mobile.length > 0
        ? screenshots.mobile.map((screenshot: string, index: number) => (
            <div className={globalStyles.mobileScreenshot} key={index}>
              <Link href={`${screenshot}.png`} target="_blank">
                <Image
                  className={globalStyles.imageClickable}
                  src={`${screenshot}-thumbnail.png`}
                  width={112}
                  height={240}
                  alt="mobile screenshot"
                />
              </Link>
            </div>
          ))
        : null}

      {screenshots.desktop && Array.isArray(screenshots.desktop) && screenshots.desktop.length > 0
        ? screenshots.desktop.map((screenshot: string, index: number) => (
            <div className={globalStyles.desktopScreenshot} key={index}>
              <Link href={`${screenshot}.png`} target="_blank">
                <Image
                  className={globalStyles.imageClickable}
                  src={`${screenshot}-thumbnail.png`}
                  width={365}
                  height={240}
                  alt="desktop screenshot"
                />
              </Link>
            </div>
          ))
        : null}
    </div>
  );
}
