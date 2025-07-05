# Feedback System - Dark Theme Glassmorphism Design

A sleek, modern feedback collection system built with React and featuring a stunning dark glassmorphism design with orange accents.

## ✨ Features

### 🌙 Dark Theme Design
- **Sleek Dark UI**: Black background with orange (#FF4500) accents
- **Glassmorphism Effects**: Semi-transparent dark glass with backdrop blur
- **Animated Background**: Subtle animated gradient background with orange tones
- **Smooth Transitions**: Hover effects and smooth animations throughout
- **Professional Typography**: Inter font family for clean, modern text
- **Responsive Design**: Works perfectly on all device sizes

### 🔐 Authentication System
- **User Registration**: Secure account creation with validation
- **User Login**: JWT-based authentication
- **Protected Routes**: Secure access to feedback submission
- **Session Management**: Automatic token handling

### 📝 Feedback Management
- **Submit Feedback**: User-friendly feedback submission form
- **Admin Dashboard**: Comprehensive admin panel to view all feedback
- **Real-time Updates**: Live feedback count and refresh functionality
- **Data Validation**: Form validation with helpful error messages

### 🚀 Technical Features
- **React 19**: Latest React with modern hooks
- **React Router**: Client-side routing with protected routes
- **Axios**: HTTP client for API communication
- **CSS Variables**: Consistent design system
- **Responsive Grid**: Flexible layout system

## 🎯 Design System

### Color Palette
- **Primary Background**: Pure black (#000000)
- **Secondary Background**: Dark gray (#111111)
- **Tertiary Background**: Charcoal (#1a1a1a)
- **Primary Accent**: Orange Red (#FF4500)
- **Secondary Accent**: Tomato (#ff6347)
- **Tertiary Accent**: Dark Orange (#ff8c00)
- **Glass Effects**: Semi-transparent dark backgrounds with orange borders

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800
- **Hierarchy**: Clear typographic scale for headings and body text

### Components
- **Glass Cards**: Main container components with dark glass effects
- **Glass Inputs**: Form inputs with dark glassmorphism styling
- **Glass Buttons**: Interactive buttons with orange accents
- **Loading States**: Animated loading spinners with orange color
- **Error/Success Messages**: Clear feedback for user actions

## 🛠️ Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
1. Navigate to the frontend directory:
   ```bash
   cd feedback-main/frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

### Backend Setup
Make sure your backend server is running on `http://localhost:3000` with the following endpoints:
- `POST /register` - User registration
- `POST /login` - User authentication
- `POST /feedback` - Submit feedback
- `GET /feedbacks` - Get all feedback (admin)

## 📱 Pages & Routes

### Public Pages
- **Landing Page** (`/`) - Welcome page with feature overview
- **Register** (`/register`) - User account creation
- **Login** (`/login`) - User authentication

### Protected Pages
- **Feedback Submission** (`/feedback`) - Submit new feedback
- **Admin Dashboard** (`/admin`) - View and manage all feedback

## 🎨 Design Highlights

### Dark Glassmorphism Effects
- Semi-transparent dark backgrounds with backdrop blur
- Subtle orange borders and shadows
- Layered depth with multiple glass elements
- Custom scrollbar with orange accent

### Animations
- Smooth hover transitions with orange glow effects
- Fade-in animations for page loads
- Loading spinners with orange color
- Background gradient animations with orange tones

### User Experience
- Intuitive navigation with active state indicators
- Form validation with real-time feedback
- Loading states for all async operations
- Responsive design for all screen sizes
- Dark theme optimized for eye comfort

## 🔧 Customization

### Colors
Modify the CSS variables in `src/index.css`:
```css
:root {
  --bg-primary: #000000;
  --accent-primary: #FF4500;
  --glass-bg: rgba(26, 26, 26, 0.9);
  --glass-border: rgba(255, 69, 0, 0.2);
  /* ... more variables */
}
```

### Spacing & Typography
Adjust the design system variables:
```css
:root {
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --radius-md: 16px;
  /* ... more variables */
}
```

## 🌙 Dark Theme Benefits

- **Eye Comfort**: Reduced eye strain in low-light environments
- **Modern Aesthetic**: Sleek, professional appearance
- **Battery Saving**: OLED screens use less power with dark themes
- **Focus**: Dark backgrounds help users focus on content
- **Trendy**: Aligns with modern design trends

## 📄 License

This project is open source and available under the MIT License.

---

**Built with ❤️ using React and modern web technologies**
