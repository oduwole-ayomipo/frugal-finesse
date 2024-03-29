import React, { Component } from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; //This for accurate assersions

import FilledBtn from "../FilledBtn";
import OutlineBtn from "../OutlineBtn";
import TextBtn from "../TextBtn";

// Helper function that defines a test case for rendering the button component
const testButtonComponent = (ButtonComponent) => {
  test("Renders Button Component with a text", () => {
    //Arrange
    const buttonText = "Some Action";

    //Act
    const { getByText } = render(<ButtonComponent buttonText={buttonText} />);

    //Assert
    expect(getByText(buttonText)).toBeInTheDocument();
  });
};

//Describe group related tests &Run the above test for each button component
describe("Button Components", () => {
  describe("Filled Button", () => {
    testButtonComponent(FilledBtn);
  });
});

describe("Button Components", () => {
  describe("Outline Button", () => {
    testButtonComponent(OutlineBtn);
  });
});

describe("Button Components", () => {
  describe("Text Button", () => {
    testButtonComponent(TextBtn);
  });
});
