import { redirect } from '@sveltejs/kit'

/** @type {import('./$types').LayoutServerLoad} */
export function load() {
	throw redirect(302, '/budget-facebook-ads-calcolatore')
}
