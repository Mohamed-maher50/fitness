"use client";
import React, { FC, useMemo, useState } from "react";
import "./Pagination.css";
interface Props {
  buttonNumber: number;
  PrevCb?: (page: number) => void;
  nextCb?: (page: number) => void;
  className?: string;
  nextIcon?: React.ReactNode | React.ReactElement;
  prevIcon?: React.ReactNode | React.ReactElement;
}

const Pagination: FC<Props> = ({
  PrevCb,
  nextCb,
  buttonNumber,
  nextIcon,
  prevIcon,
  className,
}) => {
  const [page, setPage] = useState<number>(0);

  const buttons = useMemo(() => {
    let buttons: number[] = [];
    buttons.length = buttonNumber;
    return (buttons = buttons.fill(5).map((_, index) => index));
  }, [buttonNumber]);

  const handlePrev = () => {
    console.log(page);
    nextCb && nextCb(page - 1);
    if (page <= 0) return;

    setPage((prev) => {
      return --prev;
    });
  };
  const handleNext = () => {
    nextCb && nextCb(page + 1);
    if (page > buttonNumber - 1) return;

    setPage((prev) => {
      return ++prev;
    });
  };

  const viewSpans = [
    buttons[0],
    ...buttons.slice(
      page < 3
        ? 1
        : page - 2 + 5 >= buttons.length
        ? buttons.length - 6
        : page - 2,
      page < 3
        ? 6 > buttons.length
          ? buttons.length - 1
          : 6
        : page + 3 >= buttons.length
        ? buttons.length - 1
        : page + 3
    ),
    buttons[buttons.length - 1],
  ];

  if (buttons.length <= 1) return <></>;
  return (
    <div className={`flex gap   pagination ${className || className}`}>
      <button
        onClick={() => {
          nextCb && nextCb(page);
          setPage(0);
        }}
        className="btn"
      >
        {"<<"}
      </button>
      <button className="btn" onClick={handlePrev} disabled={page <= 0}>
        {prevIcon || <span className="prev">{"<<"}</span>}
      </button>
      {viewSpans.map((btn) => {
        return (
          <span
            key={+btn}
            onClick={() => {
              setPage(btn);
              nextCb && nextCb(btn);
            }}
            className={`${btn == page ? "active" : ""}`}
          >
            {btn + 1}
          </span>
        );
      })}
      <button
        className="btn"
        onClick={handleNext}
        disabled={page >= buttons.length - 1}
      >
        {nextIcon || <span className="next">{">>"}</span>}
      </button>
      <button
        onClick={() => {
          nextCb && nextCb(page);
          setPage(buttons.length - 1);
        }}
        className="btn"
      >
        {">>"}
      </button>
    </div>
  );
};

export default Pagination;
