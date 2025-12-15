# Roshan Cinematic Portfolio

A premium, React-based Single Page Application built for a video editor and digital strategist.

## Features
- **Cinematic UI**: Dark mode, large typography, smooth interactions.
- **Admin Panel**: Dashboard for managing projects and viewing inquiries.
- **AI Integration**: Uses Gemini API in the admin panel to auto-generate creative project descriptions.
- **Responsive**: Mobile-first design using Tailwind CSS.

## Setup Instructions

### 1. Environment Variables
To enable the AI features in the Admin Panel, you must set the `API_KEY` environment variable.
Create a `.env` file in the root (if using a build tool) or configure your deployment platform environment variables.

```
API_KEY=your_gemini_api_key_here
```

### 2. Mock Authentication
For this demo, the admin login credentials are:
- **Email**: `admin@roshan.com`
- **Password**: `admin`

### 3. CMS Integration (Sanity)
Currently, the app uses mock data in `constants.ts`. To connect Sanity:
1. Install Sanity Client: `npm install @sanity/client`
2. Configure `services/sanityMock.ts` to actually fetch from your Sanity project.

### 4. Form Handling
The contact form simulates a successful submission. To connect Web3Forms:
1. Get your Access Key from Web3Forms.
2. Update the `handleSubmit` function in `pages/Contact.tsx` to POST to `https://api.web3forms.com/submit`.

## Tech Stack
- React 18
- Tailwind CSS
- Lucide React (Icons)
- Google Gemini API (Content Generation)
