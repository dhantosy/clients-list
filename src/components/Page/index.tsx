import styles from "./page.module.css";
import { IPageProp } from "./types";

export default function Page({ children }: IPageProp) {
  return (
    <div className={styles.content}>
      {children}
    </div>
  );
}
