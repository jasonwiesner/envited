import React, { useEffect, useRef, useState } from "react";
export default function LogDateTime({ selected, handleChange }) {
  const [date, setDate] = useState(selected && selected.split(" ")[0]);
  const [time, setTime] = useState(selected && selected.split(" ")[1]);
  const dateRef = useRef(null);
  const timeRef = useRef(null);

  useEffect(() => {
    if (!date || !time) return;
  }, [date, time]);

  function _handleChange(e) {
    // onChange();
    const value = e.target.value;
    const lid = e.target.id;
    let newStr;

    if ("logdate" === lid) {
      setDate(value);
      newStr = new String("").concat(
        value || "0000-00-00",
        " ",
        time || "00:00"
      );
    } else if ("logtime" === lid) {
      setTime(value);
      newStr = new String("").concat(
        date || "0000-00-00",
        " ",
        value || "00:00"
      );
    }
    handleChange(newStr);
  }

  return (
    <>
      <input
        id="logdate"
        ref={dateRef}
        value={date}
        onChange={_handleChange}
        type="date"
      />
      <input
        id="logtime"
        ref={timeRef}
        value={time}
        onChange={_handleChange}
        type="time"
      />
    </>
  );
};