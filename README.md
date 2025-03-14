# Umazing-Official-v2

This project is built with [Next.js](https://nextjs.org) v22.14.0.

## Tech Stack
- **Node.js**: Ensure you have the latest LTS version installed (`node -v`).
- **Tailwind CSS 4**: [Tailwind Docs](https://tailwindcss.com)
- **Colors**: Uses [OKLCH](https://oklch.com/) for better color management.

- **ShadCN UI**: [Sonner](http://ui.shadcn.com/docs/components/sonner) for notifications.
````
 toast("Event has been created", {
          description: "Sunday, December 03, 2023 at 9:00 AM",
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        })
````

Then, open [http://localhost:3000](http://localhost:3000) in your browser.

## Naming Conventions
- Use **camelCase** for folders and other files.
- Use **PascalCase** for `.tsx` component files.
- Use **kebab-case** for route names (e.g., `forgot-password`).

## Hydration Issues:
**Cause Component:** /ui/dropdown-menu.tsx

## Development
Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
````

## Deployment
Deploy easily using [Vercel](https://vercel.com).

---
For more details, visit the official [Next.js Documentation](https://nextjs.org/docs).
