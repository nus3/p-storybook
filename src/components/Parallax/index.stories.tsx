import React from 'react'

import { Meta, Story } from '@storybook/react'

import { Parallax, ParallaxProps, ParallaxWrapper } from '.'

export default {
  component: Parallax,
  argTypes: {
    onClickFoo: { action: true },
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<ParallaxProps>

const Template: Story = () => (
  <ParallaxWrapper>
    <Parallax
      config={{
        motionRate: 1,
      }}
    />
  </ParallaxWrapper>
)

export const Default = Template.bind({})
