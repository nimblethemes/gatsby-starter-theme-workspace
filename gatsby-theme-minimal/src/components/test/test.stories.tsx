import React from "react";
import Test from "./index";

export default {
  title: "Test",
  component: Test
};

export const ToStorybook = () => <Test />;

ToStorybook.story = {
  name: "to Storybook"
};
