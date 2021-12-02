import React from 'react'

import { Meta, Story } from '@storybook/react'

import { Parallax, ParallaxProps } from '.'

export default {
  component: Parallax,
  argTypes: {
    onClickFoo: { action: true },
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<ParallaxProps>

const Template: Story<ParallaxProps> = (args) => <Parallax {...args} />

export const Default = Template.bind({})
