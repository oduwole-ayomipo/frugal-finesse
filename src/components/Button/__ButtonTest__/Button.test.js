import React, { Component } from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; //This for accurate assersions

import FilledBtn from "../Filled-Button/FilledBtn";
import OutlineBtn from "../Outline-Button/OutlineBtn";
import TextBtn from "../Text-Button/TextBtn";

// Helper function that defines a test case for rendering the button component
const testButtonComponent = (ButtonComponent) => {
  test("Renders Button Component with a text", () => {
    //Arrange
    const buttonText = "some action";

    //Act
    const { getByText } = render(<ButtonComponent buttonText={buttonText} />);

    //Assert
    expect(getByText(buttonText)).toBeInTheDocument();
  });
};

//Run the above test for each button component
//Describe group related tests, one for each button type.
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
