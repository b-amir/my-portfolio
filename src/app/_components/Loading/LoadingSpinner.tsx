import globalStyles from "@/_styles/page.module.scss";
import { AiOutlineLoading3Quarters as LoadingIndicator } from "react-icons/ai";

export const LoadingSpinner: React.FC = () => (
  <div className={globalStyles.loadingContainer}>
    <LoadingIndicator className={globalStyles.loadingIndicator} />
  </div>
);
