import { render, screen } from "@testing-library/react";
import { formConstant } from "../../const";
import { GICFooter } from "./GICFooter";

describe("GICFooter", () => {
  test("renders without error and display the footer content", () => {
    render(<GICFooter />);
    const currentYear = new Date().getFullYear();
    const footerText = `© ${currentYear} ${formConstant.footer.content}`;
    expect(screen.getByText(footerText)).toBeInTheDocument();
  });
});
