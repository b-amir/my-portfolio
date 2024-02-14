import globalStyles from "@/_styles/page.module.scss";
import { AiOutlineLoading3Quarters as LoadingIndicator } from "react-icons/ai";

const Loading: React.FC = () => (
  <div className={globalStyles.loadingContainer} style={{ height: "100dvh" }}>
    <LoadingIndicator className={globalStyles.loadingIndicator} />
  </div>
);

export default Loading;
