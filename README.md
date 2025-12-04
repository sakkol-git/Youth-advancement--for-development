# Youth Advancement for Development (YAD)

A modern, production-ready Next.js 14 website for the Youth Advancement for Development Organization in Cambodia.

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router, Server Components)
- **Language:** TypeScript (Strict Mode)
- **Styling:** Tailwind CSS + Framer Motion
- **UI Components:** Radix Primitives
- **Validation:** Zod
- **Icons:** Lucide React
- **Fonts:** Inter + Plus Jakarta Sans

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── (marketing)/        # Marketing pages layout
│   │   ├── programs/       # Program pages
│   │   ├── events/         # Events page
│   │   ├── about/          # About pages (governance, residents, alumni)
│   │   ├── partners/       # Partners page
│   │   └── donate/         # Donation page
│   ├── layout.tsx          # Root layout
│   ├── loading.tsx         # Loading state
│   ├── error.tsx           # Error boundary
│   ├── not-found.tsx       # 404 page
│   ├── robots.ts           # SEO robots.txt
│   ├── sitemap.ts          # SEO sitemap
│   └── manifest.ts         # PWA manifest
├── components/
│   ├── ui/                 # Reusable UI components
│   ├── layout/             # Layout components (navbar, footer)
│   └── shared/             # Shared components
├── features/               # Feature-based modules
│   ├── home/               # Home page features
│   ├── programs/           # Programs feature
│   ├── events/             # Events feature
│   ├── donate/             # Donation feature
│   └── partners/           # Partners feature
├── lib/                    # Utility functions
├── types/                  # TypeScript types
└── config/                 # Configuration files
```

## 🏃 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/youth-advancement-for-development.git

# Navigate to project directory
cd youth-advancement-for-development

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Landing page with hero, impact stats, principles, team |
| Programs | `/programs` | All programs overview |
| DYTP | `/programs/dormitory-youth-training` | Dormitory program details |
| Digital Innovation | `/programs/digital-innovation` | Digital program details |
| Community Education | `/programs/slum-community-education` | Community program details |
| Events | `/events` | Upcoming and past events |
| Governance | `/about/governance` | Leadership team |
| Residents | `/about/residents` | Current DYTP students |
| Alumni | `/about/alumni` | Graduate network |
| Partners | `/partners` | Sponsors and partnership info |
| Donate | `/donate` | Donation form |

## 🎨 Design Features

- Dark mode theme with glassmorphism effects
- Emerald/teal primary color palette
- Smooth Framer Motion animations
- Mobile-first responsive design
- WCAG 2.1 AA accessibility compliance

## 📞 Contact

- **Organization:** Youth Advancement for Development (YAD)
- **Location:** Phnom Penh, Cambodia
- **Phone:** +855 99 332 289
- **Email:** yad2025@edu.kh
- **Address:** #30, St. 261, Boeung Salang, TK, Phnom Penh

## 📄 License

This project is licensed under the MIT License.
