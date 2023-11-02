This is a replication of a bug which was introduced in Next 13.4.10. It causes application crash on opening a modal created with parallel routes and route intercepting. The issue: https://github.com/vercel/next.js/issues/56000

## Detailed information:

In the file [`app/items/page.tsx`](https://github.com/pavel-krasnov/next-modal-bug/blob/main/app/items/page.tsx), remove [`prefetch={false}`](https://github.com/pavel-krasnov/next-modal-bug/blob/b71b04029c5e004e1576ac5a01978e1d494b6457/app/items/page.tsx#L10C26-L10C42) to get rid of the error. Disabling prefetch introduces the bug.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Bug info provided by Next.js:

```
Unhandled Runtime Error

Error: Could not find the module "/home/pavel/projects/modal-test/app/items/layout.tsx#" in the React Client Manifest. This is probably a bug in the React Server Components bundler.
Call Stack
<unknown>
/home/pavel/projects/modal-test/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js (11:327266)
eL
/home/pavel/projects/modal-test/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js (11:327461)
<unknown>
/home/pavel/projects/modal-test/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js (11:341155)
Array.toJSON
/home/pavel/projects/modal-test/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js (11:342345)
stringify
<anonymous>
eV
/home/pavel/projects/modal-test/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js (11:328558)
<unknown>
/home/pavel/projects/modal-test/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js (11:329098)
eJ
/home/pavel/projects/modal-test/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js (11:329358)
Timeout._onTimeout
/home/pavel/projects/modal-test/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js (11:326581)
listOnTimeout
node:internal/timers (569:17)
process.processTimers
node:internal/timers (512:7)
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
