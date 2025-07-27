# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Build**: `npm run build` - Formats code with prettier, then builds both ESM and CommonJS versions
- **Format**: `npm run format` - Formats source code using prettier
- **Storybook**: `npm run storybook` - Starts Storybook development server on port 6006
- **Build Storybook**: `npm run build-storybook` - Builds static Storybook for deployment

Note: No test command is configured (`npm test` will fail with "Error: no test specified")

## Architecture Overview

This is a React component library that provides a 7-segment display simulation with three main components:

### Component Hierarchy
- **Display** (`src/components/Display.tsx`) - Top-level component that manages multiple digits
  - **Digit** (`src/components/Digit.tsx`) - Individual digit that renders 7 segments based on character mapping
    - **Segment** (`src/components/Segment.tsx`) - Individual segment with styling and animations

### Key Features
- Supports decimal and hexadecimal display values
- Configurable digit count, height, color, and background
- Optional skewed styling for realistic 7-segment appearance
- Custom character mapping support via `charMap` prop
- Uses CSS clip-path for segment shapes and drop-shadow for glow effects

### Utilities
- `src/utils/charToDigit.ts` - Character to segment mapping (supports 0-9, A-F, and special characters)
- `src/utils/segmentStyle.ts` - CSS positioning and clip-path definitions for both normal and skewed segments

### Build Configuration
- TypeScript with strict mode enabled
- Dual build output: ESM (`dist/esm`) and CommonJS (`dist/cjs`)
- Stories excluded from build via tsconfig
- React 18+ peer dependency