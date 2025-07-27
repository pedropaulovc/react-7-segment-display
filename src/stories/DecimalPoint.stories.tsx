import { Meta, StoryObj } from "@storybook/react";

import DecimalPoint from "../components/DecimalPoint";

const meta = {
    title: "Example/DecimalPoint",
    component: DecimalPoint,
    argTypes: {
        active: { control: "boolean" },
        color: { control: "color" },
        size: { control: "number" },
        skew: { control: "boolean" },
    },
} satisfies Meta<typeof DecimalPoint>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        active: true,
        color: "red",
        size: 40,
        skew: false,
    },
};

export const Inactive: Story = {
    args: {
        active: false,
        color: "red",
        size: 40,
        skew: false,
    },
};

export const Skewed: Story = {
    args: {
        active: true,
        color: "green",
        size: 40,
        skew: true,
    },
};