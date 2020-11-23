import React from "react";
import App from "./App";

test("if hits match lentgh boat sinks", () => {
  expect(isHit(2)).toBe("sunk!!");
});
