#!/bin/bash

# Fallback build script for Vercel deployment
echo "🚀 Starting fallback build process..."

# Make sure node_modules/.bin is executable
if [ -d "node_modules/.bin" ]; then
    echo "📝 Setting executable permissions..."
    find node_modules/.bin -type f -exec chmod +x {} \; 2>/dev/null || true
fi

# Try different build methods in order of preference
echo "🔧 Attempting build methods..."

# Method 1: Direct Node.js API
if node build.js; then
    echo "✅ Build completed with Node.js API"
    exit 0
fi

# Method 2: npx with explicit path
if npx --yes vite build; then
    echo "✅ Build completed with npx"
    exit 0
fi

# Method 3: Direct node execution
if node node_modules/vite/bin/vite.js build; then
    echo "✅ Build completed with direct node execution"
    exit 0
fi

echo "❌ All build methods failed"
exit 1