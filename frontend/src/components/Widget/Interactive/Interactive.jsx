import { React } from "../imports/index";
import { useRef } from "react";

import {
  userStyles as styles,
  FaRocket,
  PiRocketLaunch
} from "./imports/index";

const Interactive = () => {
  const containerRef = useRef(null);

  const handleWidgetClick = () => {
    const container = containerRef.current;

    container.classList.toggle(styles.expanded);
  };

  const handleClick = () => {
    window.open("https://forms.gle/3xAT8V3JBenMygLB8", "_blank");
  };

  return (
    <>
      <div
        ref={containerRef}
        className={styles.widgetContainer}
        onClick={handleWidgetClick}
      >
        <div className={styles.widget}>
          <FaRocket className={styles.icon} />
        </div>

        <div className={styles.desktopWidget}>
          <p>
            Be the first to experience our latest updates!{" "}
            <span onClick={handleClick}>
              Sign up now for early access{" "}
              <PiRocketLaunch className={styles.blueIcon} />
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Interactive;
