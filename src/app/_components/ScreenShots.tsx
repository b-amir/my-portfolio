import Link from "next/link";
import Image from "next/image";
import { Project } from "@/_types/Project";
import globalStyles from "@/_styles/page.module.scss";

export function ScreenShots({ currentProject }: { currentProject: Project }) {
  return (
    <div className={globalStyles.moreImages}>
      {/* Render mobile screenshots only if they exist */}
      {currentProject?.screenshots && "mobile" in currentProject?.screenshots
        ? currentProject?.screenshots.mobile.map(
            (screenshot: string, index: number) => (
              <div className={globalStyles.mobileScreenshot} key={index}>
                <Link href={`${screenshot}.png`} target="_blank">
                  <Image
                    className={globalStyles.imageClickable}
                    src={`${screenshot}-thumbnail.png`}
                    loading="lazy"
                    width={112}
                    height={240}
                    alt="cslit"
                  />
                </Link>
              </div>
            )
          )
        : null}

      {/* Render desktop screenshots only if they exist */}
      {currentProject?.screenshots && "desktop" in currentProject?.screenshots
        ? currentProject?.screenshots.desktop.map(
            (screenshot: string, index: number) => (
              <div className={globalStyles.desktopScreenshot} key={index}>
                <Link href={`${screenshot}.png`} target="_blank">
                  <Image
                    className={globalStyles.imageClickable}
                    src={`${screenshot}-thumbnail.png`}
                    loading="lazy"
                    width={365}
                    height={240}
                    alt="cslit"
                  />
                </Link>
              </div>
            )
          )
        : null}
    </div>
  );
}
