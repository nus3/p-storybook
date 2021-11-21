import React from 'react'

import { Meta, Story } from '@storybook/react'
import { within, userEvent } from '@storybook/testing-library'

import { ExampleComponent, ExampleComponentProps } from './'

export default {
  component: ExampleComponent,
  title: 'components/ExampleComponent',
  argTypes: {
    onClickFoo: { action: true },
  },
} as Meta<ExampleComponentProps>

const Template: Story<ExampleComponentProps> = (args) => (
  <ExampleComponent {...args} />
)

export const Default = Template.bind({})
Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  await userEvent.click(canvas.getByRole('button', { name: 'Add' }))
  await userEvent.click(canvas.getByRole('button', { name: 'Add' }))
  await userEvent.click(canvas.getByRole('button', { name: 'Add' }))
  await userEvent.click(canvas.getByRole('button', { name: 'Add' }))
  await userEvent.click(canvas.getByRole('button', { name: 'Reset' }))
}
