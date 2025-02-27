import {Meta, StoryObj} from '@storybook/react';

import {Button} from "./button";
import {action} from "@storybook/addon-actions";

const meta: Meta<typeof Button> = {
    title: "Components/ui/Button",
    component: Button,
    tags: ['autodocs'],
    parameters: {
        layout: "centered",
    },
    argTypes: {
        variant: {
            control: "select",
            description: "Select an option",
            options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
        },
        size: {
            control: "select",
            description: "Select an option",
            options: ["default", "sm", "lg", "icon"],
        },
        onClick: {
            action: "clicked",
            description: "Click an option",
        }
    }
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        variant: 'default',
        size: 'default',
        disabled: false,
        onClick: action('default click'),
        children: 'Default button',
        className: 'shadow-lg'
    }
}

export const Destructive: Story = {
    args: {
        variant: 'destructive',
        size: 'default',
        disabled: false,
        onClick: action('default click'),
        children: 'Default button',
        className: 'shadow-lg'
    }
}

export const Outline: Story = {
    args: {
        variant: 'outline',
        size: 'default',
        disabled: false,
        onClick: action('default click'),
        children: 'Default button',
        className: 'shadow-lg'
    }
}

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        size: 'default',
        disabled: false,
        onClick: action('default click'),
        children: 'Default button',
        className: 'shadow-lg'
    }
}

export const Ghost: Story = {
    args: {
        variant: 'ghost',
        size: 'default',
        disabled: false,
        onClick: action('default click'),
        children: 'Default button',
        className: 'shadow-lg'
    }
}

export const Link: Story = {
    args: {
        variant: 'link',
        size: 'default',
        disabled: false,
        onClick: action('default click'),
        children: 'Default button',
        className: 'shadow-lg'
    }
}