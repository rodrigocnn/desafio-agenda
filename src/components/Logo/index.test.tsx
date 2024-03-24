import { render, screen } from "@testing-library/react";
import { it, expect } from "vitest";
import "@testing-library/jest-dom";
import { Logo } from ".";

it("Should render correctly", () => {
  render(<Logo />);
  expect(screen.getByText("MyContacts")).toBeInTheDocument();
});
