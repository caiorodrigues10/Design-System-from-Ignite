import type { StoryObj, Meta } from '@storybook/react'
import { TextInputProps, TextInput } from '@ignite-ui/react'

export default {
  type: 'Form/Text Input',
  component: TextInput,
  args: {},
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'call.com',
  },
}
