import { redirect } from 'next/navigation';

// Redirect all 404s to the home page
export default function NotFound() {
  redirect('/');
}