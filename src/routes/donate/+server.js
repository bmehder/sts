import { redirect } from '@sveltejs/kit'

export function GET() {
  redirect(307, 'https://www.example.com/')
}