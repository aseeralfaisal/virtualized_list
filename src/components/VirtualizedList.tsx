import React, { CSSProperties, FC } from "react";

interface VirtualizedListProps {
  items: string[];
  itemHeight: number;
  containerHeight: number;
  scrollTop: number;
}

export const VirtualizedList: FC<VirtualizedListProps> = ({
  items,
  itemHeight,
  containerHeight,
  scrollTop,
}) => {
  const startIndex = Math.floor(scrollTop / itemHeight);
  const endIndex = Math.min(
    startIndex + Math.ceil(containerHeight / itemHeight),
    items.length
  );

  const visibleItems = items.slice(startIndex, endIndex);
  const invisibleItemsHeight =
    (startIndex + visibleItems.length - endIndex) * itemHeight;

  const wrapperStyles: CSSProperties = {
    height: `${items.length * itemHeight}px`,
  };

  const wrapperChildStyles: CSSProperties = {
    position: "relative",
    height: `${visibleItems.length * itemHeight}px`,
    top: `${startIndex * itemHeight}px`,
    textAlign: "center",
  };

  return (
    <div style={wrapperStyles}>
      <div style={wrapperChildStyles}>
        {visibleItems.map((item: string, index: number) => (
          <div
            key={index}
            style={{ height: itemHeight }}
          >
            {item}
          </div>
        ))}
      </div>
      <div style={{ height: invisibleItemsHeight }} />
    </div>
  );
};
