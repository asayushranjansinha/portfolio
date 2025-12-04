# Portfolio (DEPLOYED ON VERCEL)

A modern, portfolio website built with Next.js 16, Tailwind CSS 4, and Framer Motion. This project showcases my work, skills, and thoughts through a dynamic interface and a custom blog system.

## 🚀 Features

- **Modern Tech Stack**: Built with the latest Next.js App Router and React Server Components.
- **Responsive Design**: Fully responsive layout optimized for all devices using Tailwind CSS.
- **Dark Mode**: Seamless dark/light mode switching with `next-themes`.
- **Animations**: Smooth, engaging animations powered by `motion` (Framer Motion).
- **Blog System**: Markdown/MDX-based blog with syntax highlighting (`rehype-pretty-code`) and reading time estimation.
- **UI Components**: Accessible and customizable components built on top of Radix UI primitives.
- **Type Safety**: Written in TypeScript for robust and maintainable code.
- **SEO Optimized**: Includes sitemap generation and metadata management.

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Primitives**: [Radix UI](https://www.radix-ui.com/) / [ShadCN](https://ui.shadcn.com/)
- **Animations**: [Motion](https://motion.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Content**: MDX with `next-mdx-remote` and `fumadocs-core`
- **Forms**: React Hook Form + Zod
- **Utils**: date-fns, clsx, tailwind-merge

## 📦 Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (v20 or higher)
- npm, yarn, pnpm, or bun

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/asayushranjansinha/portfolio.git
    cd portfolio-25
    ```

2.  Install dependencies:

    ```bash
    npm install
    # or
    pnpm install
    # or
    yarn install
    ```

3.  Set up environment variables:
    Copy `.env.example` to `.env` and fill in the required values.
    ```bash
    cp .env.sample .env
    ```

### Running the Development Server

Start the local development server:

```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## 📜 Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run start`: Starts the production server.
- `npm run lint`: Runs ESLint to check for code quality issues.

## 📂 Project Structure

```
src/
├── app/              # Next.js App Router pages and layouts
├── components/       # Reusable UI components
├── features/         # Feature-specific components and logic
├── lib/              # Utility functions and libraries
├── hooks/            # Custom React hooks
├── types/            # TypeScript type definitions
└── assets/           # Static assets (images, fonts, etc.)
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 💬 Contact

**Ayush Ranjan Sinha**

- GitHub: [@asayushranjansinha](https://github.com/asayushranjansinha)
- LinkedIn: [Ayush Ranjan Sinha](https://linkedin.com/in/asayushranjansinha)
- Email: asayushranjansinha@gmail.com

**⭐ Star this repository if you found it helpful!**

Made with ❤️ by [Ayush Ranjan Sinha](https://github.com/asayushranjansinha)