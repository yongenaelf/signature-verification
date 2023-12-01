import { verify } from "./verify";
import { expect, test } from "vitest";

test("verify that the address owner signed the message", () => {
  const address = "2Er5NZzbossomRB6b8Qkbp72t7vAAtFCWyzgaNdFxL4bLJKHb5";
  const message =
    "e099070e955a057cb36e515ad4078bc41884bd08fa5bb91bd0df2e989a0bc0de";
  const signed =
    "rQhXADrbh9B7RybjEbpENOpS4afxgyPB/tVXQykQSc0jhoYt63SNM1iyP+54lHBl8KZ0gUoIhj17P+4BpvRinwE=";

  expect(verify(message, signed)).toBe(address);
});
