import { Meta, Story } from "@storybook/react";
import React, { useState } from "react";
import { Resizer, ResizerControlType } from "../src/components";

import "./sidebarExampleStyles.css";
import "./customExampleStyles.css";

export default {
  title: "Example/Resizer",
  component: Resizer,

  argTypes: {
    controls: {
      control: "multi-select",
      options: [
        ResizerControlType.RIGHT,
        ResizerControlType.RIGHT_BOTTOM,
        ResizerControlType.BOTTOM,
      ],
    },
  },
} as Meta;

interface StoryArgsProps {
  controls: ResizerControlType[];
  children: React.ReactNode;
}

const Template: Story<typeof Resizer & StoryArgsProps> = ({
  controls,
  children,
}) => {
  return <Resizer controls={controls}>{children}</Resizer>;
};

export const Basic = Template.bind({});
Basic.args = {
  children: (
    <p>
      There are many variations of passages of Lorem Ipsum available, but the
      majority have suffered alteration in some form, by injected humour, or
      randomised words which don't look even slightly believable. If you are
      going to use a passage of Lorem Ipsum, you need to be sure there isn't
      anything embarrassing hidden in the middle of text. All the Lorem Ipsum
      generators on the Internet tend to repeat predefined chunks as necessary,
      making this the first true generator on the Internet. It uses a dictionary
      of over 200 Latin words, combined with a handful of model sentence
      structures, to generate Lorem Ipsum which looks reasonable. The generated
      Lorem Ipsum is therefore always free from repetition, injected humour, or
      non-characteristic words etc.
    </p>
  ),
};

const FewTemplate: Story<typeof Resizer & StoryArgsProps> = ({ controls }) => {
  const texts = [
    "Build a resizer component as a standalone library (importable by third-party applications) and create an example that will use it.",
    "The resizer component should have handles, which a user can interact with. The user can increase or decrease the width or height of a container wrapping any child component",
  ];

  return (
    <>
      {texts.map((text: string, index: number) => (
        <Resizer controls={controls} key={`resizer-${index}`}>
          <p>{text}</p>
        </Resizer>
      ))}
    </>
  );
};

export const Few = FewTemplate.bind({});
Few.args = {};

const SidebarTemplate: Story<typeof Resizer & StoryArgsProps> = ({
  controls,
  children,
}) => {
  return (
    <div className="sidebar-example">
      <Resizer controls={controls}>{children}</Resizer>
      <div className="content">content</div>
    </div>
  );
};

export const Sidebar = SidebarTemplate.bind({});
Sidebar.args = {
  controls: [ResizerControlType.RIGHT],
  children: (
    <nav>
      <ul>
        <li>Nav link one</li>
        <li>Nav link two</li>
        <li>Nav link three</li>
      </ul>
    </nav>
  ),
};

const TimerTemplate: Story<typeof Resizer & StoryArgsProps> = ({
  controls,
}) => {
  const [date, setDate] = useState(new Date());
  setTimeout(() => setDate(new Date()), 1000);

  return (
    <Resizer controls={controls}>
      <span>{date.toISOString()}</span>
    </Resizer>
  );
};

export const Timer = TimerTemplate.bind({});
Timer.args = {};

const CustomTemplate: Story<typeof Resizer & StoryArgsProps> = ({
  controls,
  children,
}) => {
  return (
    <div className="custom-example">
      <Resizer controls={controls}>
        <span>{children}</span>
      </Resizer>
    </div>
  );
};

export const Custom = CustomTemplate.bind({});
Custom.args = {
  children: "Custom styles",
};
