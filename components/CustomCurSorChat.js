import React, { useMemo } from "react";
import styles from "./CustomCurSorChat.module.css";
import { useOnlineCursor, useRenderPosition } from "yomo-react-cursor-chat";

const MeCursor = ({ cursor }) => {
  const refContainer = useRenderPosition(cursor);

  return useMemo(
    () => (
      <div className={styles.cursor} ref={refContainer}>
        <CursorIcon color={cursor.color} />
      </div>
    ),
    []
  );
};

const OthersCursor = ({ cursor }) => {
  const refContainer = useRenderPosition(cursor);

  return (
    <div ref={refContainer} className={styles.otherCursor}>
      <CursorIcon color={cursor.color} />
    </div>
  );
};

// Exporting your custom components
export const CustomComponent = ({
  socketURL,
  name,
  avatar,
  sendingTimeInterval = 200,
}) => {
  const { me, others } = useOnlineCursor({
    socketURL,
    name,
    avatar,
    sendingTimeInterval,
  });

  if (!me) {
    return null;
  }

  return (
    <div className={styles.container}>
      {others.map((item) => (
        <OthersCursor key={item.id} cursor={item} />
      ))}
      <MeCursor cursor={me} />
    </div>
  );
};

function CursorIcon({ color }) {
  return useMemo(
    () => (
      <svg
        shapeRendering="geometricPrecision"
        xmlns="http://www.w3.org/2000/svg"
        fill={color}
      >
        <path
          fill="#666"
          d="M9.63 6.9a1 1 0 011.27-1.27l11.25 3.75a1 1 0 010 1.9l-4.68 1.56a1 1 0 00-.63.63l-1.56 4.68a1 1 0 01-1.9 0L9.63 6.9z"
        />
        <path
          stroke="#fff"
          strokeWidth="1.5"
          d="M11.13 4.92a1.75 1.75 0 00-2.2 2.21l3.74 11.26a1.75 1.75 0 003.32 0l1.56-4.68a.25.25 0 01.16-.16L22.4 12a1.75 1.75 0 000-3.32L11.13 4.92z"
        />
      </svg>
    ),
    [color]
  );
}
