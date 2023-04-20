import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import linaria from '@linaria/vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
  plugins: [react(), linaria()],
})
