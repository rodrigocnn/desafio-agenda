import { render, screen } from "@testing-library/react";
import { it, expect } from "vitest";
import "@testing-library/jest-dom";
import { Header } from ".";

it("Header - Should render correctly", () => {
  render(<Header />);
  expect(screen.getByText("Novo Contato")).toBeInTheDocument();
});
