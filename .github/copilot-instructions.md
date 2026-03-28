# Kronos Workspace Instructions

## Workspace Scope
- The active web app lives in [kronos](kronos). Run app commands from this directory.
- Prefer workspace-relative imports with the `@/*` alias configured in [kronos/tsconfig.json](kronos/tsconfig.json).

## Build And Validation
- Install dependencies in [kronos](kronos): `pnpm install`.
- Primary scripts are defined in [kronos/package.json](kronos/package.json): `pnpm dev`, `pnpm build`, `pnpm start`, `pnpm lint`.
- Always run type-checking explicitly before finalizing changes: `pnpm exec tsc --noEmit`.
- Reason: [kronos/next.config.mjs](kronos/next.config.mjs) sets `typescript.ignoreBuildErrors = true`, so builds can pass with TypeScript errors.
- There is no established automated test suite yet. Do not claim tests were run unless you actually add and run them.

## Architecture
- App routes use Next.js App Router under [kronos/app](kronos/app), with route pages like [kronos/app/events/page.tsx](kronos/app/events/page.tsx) and [kronos/app/team/page.tsx](kronos/app/team/page.tsx).
- Reusable UI primitives are in [kronos/components/ui](kronos/components/ui) (shadcn/Radix style).
- Feature-level components are in [kronos/components](kronos/components).
- Shared domain types and event data live in [kronos/lib/types.ts](kronos/lib/types.ts) and [kronos/lib/data.ts](kronos/lib/data.ts).

## Coding Conventions
- Use TypeScript/TSX for new React components and pages.
- Existing JavaScript components in [kronos/components/posterSlider.js](kronos/components/posterSlider.js) and [kronos/components/videoPlayer.js](kronos/components/videoPlayer.js) are legacy; do not add new `.js` React components.
- For interactive browser behavior, add the `"use client"` directive at the top of the file.
- When creating or updating shared UI components, follow the CVA + `cn()` pattern used in [kronos/components/ui/button.tsx](kronos/components/ui/button.tsx) and [kronos/lib/utils.ts](kronos/lib/utils.ts).
- Keep event/coordinator data compatible with [kronos/lib/types.ts](kronos/lib/types.ts).

## Tailwind And Styling Notes
- Theme tokens and global styles are in [kronos/app/globals.css](kronos/app/globals.css) and [kronos/tailwind.config.ts](kronos/tailwind.config.ts).
- Avoid introducing dynamic Tailwind class fragments like `bg-${color}-500` in new code. Prefer explicit class maps so styles are statically discoverable.

## Documentation Links
- Project overview and setup context: [README.md](README.md).
- Contribution and PR workflow: [CONTRIBUTING.md](CONTRIBUTING.md).
- If documentation conflicts with code, treat current source and config files as the source of truth.