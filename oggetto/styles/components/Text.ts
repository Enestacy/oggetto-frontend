import type { ComponentStyleConfig } from '@chakra-ui/theme'

export const Text: ComponentStyleConfig = {
  baseStyle: {},
  sizes: {
    xs: {
      fontSize: '10',
    },
    sm: {
      fontSize: '12',
    },
    md: {
      fontSize: '14',
    },
    lg: {
      fontSize: '18',
    },
  },
  variants: {
    input_label: {
      fontWeight: 600,
      mb: 2,
    },
    task_title: {
      fontWeight: 'bold',
      fontSize: '3xl',
    },
    task_description: {
      fontWeight: 'regular',
      fontSize: 'md',
    },
  },
}