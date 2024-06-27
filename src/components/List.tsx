import styled from "@emotion/styled";
import React, { FC, useEffect, useRef, useState } from "react";
import { VirtualizedList } from "./VirtualizedList";

const ScrollWrapper = styled.div`
  border: 1px solid black;
  width: 100%;
  width: 100%;
  height: 500px;
  overflow: auto;
`;
export interface ListProps {
  items: string[];
}

export const List: FC<ListProps> = ({ items }) => {
  const listRef = useRef<HTMLDivElement>(null);
  const [scrollTop, setScrollTop] = useState(0);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const element = listRef.current;
    let scrollFlag = false;

    const handleScroll = () => {
      if (!scrollFlag) {
        requestAnimationFrame(() => {
          const { scrollTop } = element;
          setScrollTop(scrollTop);
          scrollFlag = false;
        });
        scrollFlag = true;
      }
    };

    element.addEventListener("scroll", handleScroll);

    return () => {
      element.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const filteredItems = items.filter((item) => {
    if (searchValue !== "") {
      return item.toLowerCase().startsWith(searchValue.toLowerCase());
    } else {
      return true;
    }
  });

  return (
    <>
      <input
        type="text"
        placeholder="Search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        style={{ width: "100%", marginBlock: 50, padding: 12 }}
      />
      <ScrollWrapper ref={listRef}>
        <VirtualizedList
          items={filteredItems}
          itemHeight={30}
          containerHeight={500}
          scrollTop={scrollTop}
        />
      </ScrollWrapper>
    </>
  );
};
