# DevTalk

A modern developer-themed chat application built with Next.js 16, React 19, and TypeScript.

## Features

- 💬 Real-time chat interface
- 🎨 Developer-themed dark UI with purple accents
- 📱 Responsive design
- 🔔 Message notifications with unread indicators
- 📷 Image sharing support
- 👥 Contact management
- ⌨️ Monospace font for developer aesthetic
- 🎯 Code-style UI elements (JSX-like syntax)

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** Radix UI primitives
- **Icons:** Lucide React
- **Date Formatting:** date-fns
- **Font:** Geist & Geist Mono

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
devtalk/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles with dark theme
├── components/
│   ├── chat-interface.tsx  # Main chat component with state
│   ├── sidebar.tsx         # Contacts sidebar with search
│   ├── chat-header.tsx     # Chat header with call actions
│   ├── chat-messages.tsx   # Messages display with images
│   ├── chat-input.tsx      # Message input with attachments
│   └── ui/
│       └── button.tsx      # Reusable button component
├── types/
│   └── chat.ts            # TypeScript interfaces
├── next.config.ts         # Next.js configuration
└── package.json
```

## Features Explained

### Developer Theme
- Code-style syntax (JSX imports, function-like placeholders)
- Monospace fonts throughout
- Dark mode with purple/blue accent colors
- Console-style session indicators

### Chat Functionality
- Send and receive messages
- Display timestamps
- Share images
- Online status indicators
- Unread message badges
- Search contacts

### Responsive Design
- Mobile-first approach
- Flexible layouts with Flexbox
- Overflow handling for long messages
- Smooth transitions and hover effects

## Customization

### Colors
Edit the CSS variables in `app/globals.css` under the `.dark` class to customize the theme colors.

### Contacts
Modify the `contacts` array in `components/sidebar.tsx` to add or remove contacts.

### Messages
Update the initial `messages` state in `components/chat-interface.tsx` to customize default messages.

## License

MIT