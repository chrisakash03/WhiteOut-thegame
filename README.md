# WhiteOut - The Game

A modern React website built with Vite, featuring a responsive design and smooth navigation.

## Features

- **Home Page**: Welcome landing page with feature highlights
- **FAQ Page**: Frequently asked questions section
- **Privacy Statement**: Comprehensive privacy policy
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations

## Tech Stack

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and development server
- **React Router**: Client-side routing
- **CSS3**: Modern styling with flexbox and grid
- **Responsive Design**: Mobile-first approach

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd WhiteOut-thegame
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation component
│   └── Navbar.css          # Navigation styles
├── pages/
│   ├── Home.jsx            # Home page
│   ├── Home.css            # Home page styles
│   ├── FAQ.jsx             # FAQ page
│   ├── FAQ.css             # FAQ page styles
│   ├── PrivacyStatement.jsx # Privacy statement page
│   └── PrivacyStatement.css # Privacy statement styles
├── App.jsx                 # Main app component with routing
├── App.css                 # App-level styles
├── main.jsx               # Entry point
└── index.css              # Global styles
```

## Customization

This is a basic template that you can customize for your specific needs:

1. **Update Content**: Modify the text content in each page component
2. **Change Styling**: Update CSS files to match your brand colors and design
3. **Add Pages**: Create new page components and add routes in `App.jsx`
4. **Modify Navigation**: Update the `Navbar.jsx` component to include new links

## Deployment

To deploy your website:

1. Build the project:
   ```bash
   npm run build
   ```

2. The built files will be in the `dist` folder
3. Deploy the `dist` folder to your hosting service of choice

## License

This project is open source and available under the [MIT License](LICENSE).
