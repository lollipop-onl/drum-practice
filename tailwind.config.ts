import type { Config } from 'tailwindcss'
import daisyUI, { type Theme } from 'daisyui';

export default {
  content: ['index.html', 'src/**/*.tsx'],
  theme: {
    extend: {},
  },
  plugins: [daisyUI],
  daisyui: {
    themes: ['dark', 'cupcake', 'dracula', 'coffee', 'sunset', 'lofi', 'garden', 'valentine'] satisfies Theme[],
  }
} satisfies Config;

