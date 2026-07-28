# AISource MM Demo Project

A showcase landing page for free Myanmar business applications (POS, inventory, restaurant, QR menu, invoice, attendance, accounting). Built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**.

This project is intended as a demo target for the [`open-orc`](https://github.com/opencode-ai/open-orc) agent workflow. It includes intentional bugs and feature ideas you can practice fixing with `open-orc`.

---

## Quick start

```bash
cd demo-project
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start Vite development server |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build |
| `npm run test` | Run the test suite with Vitest |
| `npm run lint` | Run ESLint |

---

## Project structure

```text
demo-project/
├── src/
│   ├── components/      # React components (Navbar, Hero, App cards, etc.)
│   ├── data/            # Static data for apps and testimonials
│   ├── hooks/           # Custom hooks (useToast, useInView)
│   ├── types/           # TypeScript types
│   ├── utils/           # Shared utilities (Myanmar digit conversion)
│   └── App.tsx          # Root application component
├── .open-orc/
│   ├── config.json      # open-orc workflow configuration
│   ├── inbox/           # Starter Specs for agent runs
│   └── formats/         # Templates for feature / bugfix / main specs
└── README.md
```

---

## Demo Specs (open-orc)

The `.open-orc/inbox/` folder contains starter Specs you can run with `open-orc-ui` or `open-orc`:

| Spec | Type | Goal |
| --- | --- | --- |
| `footer-dynamic-year.md` | Bugfix | Make the footer copyright year dynamic |
| `add-download-feedback.md` | Feature | Add toast feedback for download buttons |
| `add-dark-mode.md` | Feature | Add a dark mode toggle |

To run one:

```bash
cd demo-project
open-orc serve       # in one terminal
open-orc-ui serve --project .   # in another terminal
```

Then open the UI and pick a Spec from the **Docs** tab.

---

## Design notes

- **Typography**: Noto Sans Myanmar + Padauk fallback for Myanmar script.
- **Base font size**: 15px for comfortable reading.
- **Color palette**: Blue/sky/cyan hero, soft slate applications section, dark slate footer.
- **Responsive**: Mobile-first layout with `sm:`, `lg:`, and `xl:` breakpoints.

---

## License

MIT
# MM-Free-App
