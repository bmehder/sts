import { redirect } from '@sveltejs/kit'

export function GET() {
	redirect(307, 'https://www.paypal.com/donate/?hosted_button_id=N6FYJYP5NU2XQ')
}
