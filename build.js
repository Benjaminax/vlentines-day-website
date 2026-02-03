import { build } from 'vite'

async function buildProject() {
  try {
    console.log('🚀 Starting Vite build...')
    
    await build({
      // Use current working directory
      root: process.cwd(),
      // Build configuration
      build: {
        outDir: 'dist',
        emptyOutDir: true,
        rollupOptions: {
          output: {
            manualChunks: undefined,
          }
        }
      }
    })
    
    console.log('✅ Build completed successfully!')
  } catch (error) {
    console.error('❌ Build failed:', error)
    process.exit(1)
  }
}

buildProject()