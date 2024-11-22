import { Parameters } from '@storybook/react';

export const parameters: Parameters = {
  percy: {
    widths: [375, 768, 1280], // Default viewport widths for all stories
    skip: false, // Don't skip any stories by default
  },
};