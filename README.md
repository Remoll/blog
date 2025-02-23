Vercel hosting: https://blog-chi-pearl.vercel.app/

# Blog Application

This is a modern, full-stack blog application built with Next.js 15, React 19, and TypeScript. The application is designed with a focus on performance, SEO, and best practices. It leverages Supabase as its backend database and fetches posts on the server-side for optimal performance and SEO benefits. You can view the live hosted application at: [https://blog-chi-pearl.vercel.app/](https://blog-chi-pearl.vercel.app/).

## Features

- **Server-Side Data Fetching:** Posts are fetched on the server to ensure fast initial load times and improve SEO.
- **Responsive Design:** Separate layouts for mobile and desktop ensure a great experience on all devices.
- **Global State Management:** Redux (with Redux Toolkit) manages global states such as filters, sorting, and device detection.
- **Backend Integration:** Supabase is used as the backend database for secure, scalable data storage.
- **Dynamic Filtering & Sorting:** Users can filter posts by category and favorites, and sort them by date (newest/oldest).
- **Modern Styling:** Tailwind CSS is used with a custom design system for typography and colors.
- **Error Handling:** Comprehensive error handling and user notifications (via toast notifications) for API failures.

## Installation

### Prerequisites

- Node.js (>= 16.x)
- npm (>= 7.x) or yarn

### Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Remoll/blog.git
   cd blog

   ```

2. **Install dependencies:**

   npm install

   # or

   yarn install

3. **Configure Environment Variables:**

   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   NEXT_PUBLIC_SITE_URL=https://blog-chi-pearl.vercel.app

4. **Run the development server:**

   npm run dev

   # or

   yarn dev

The application should now be running at http://localhost:3000.

## Hosted Application

A live version of the application is hosted on Vercel and can be accessed here: https://blog-chi-pearl.vercel.app/.

## Project Structure

The project is organized with a clear separation of concerns:

- **/app**: Contains server components and layout files for SSR.
- **/components**: Reusable UI components.
- **/store**: Redux slices and store configuration.
- **/services**: API interaction functions.
- **/consts**: Global constants.
- **/hooks**: Custom React hooks (e.g., for media queries).
  For a deeper look, check out the source code.

## Technologies Used

- **Next.js 15**: Modern framework for server-side rendering and static site generation.
- **React 19**: Latest version of React with concurrent features.
- **TypeScript**: Enhances code quality and developer experience.
- **Redux Toolkit**: Simplifies Redux state management.
- **Tailwind CSS**: Utility-first CSS framework with a custom design system.
- **Supabase**: Backend database and API provider.
- **React Toastify**: Provides toast notifications for error handling.

## Data Fetching & Error Handling

Data is fetched on the server for optimal performance and SEO. The API calls are centralized in service functions that handle errors gracefully, returning either the requested data or an error object. Toast notifications are used to inform the user of any issues.

## SEO & Performance

By fetching posts on the server (using SSR or SSG) and hydrating the initial state in Redux, the application delivers pre-rendered HTML to search engines, improving SEO. At the same time, client-side interactivity (like filtering, sorting, and managing favorites) is handled seamlessly without sacrificing performance.

## Contributing

Contributions are welcome! Please feel free to open issues or submit pull requests for improvements and bug fixes.

## License

This project is licensed under the MIT License.

Feel free to reach out if you have any questions or need further information!
