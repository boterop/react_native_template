import React from "react";
import { render } from "@testing-library/react-native";
import HomeScreen from "@/app/(tabs)";

describe("HomeScreen", () => {
  it("renders correctly", () => {
    const expectedText = "React Native Template";
    const component = render(<HomeScreen />);

    expect(component.getByText(expectedText)).toBeTruthy();
  });
});
