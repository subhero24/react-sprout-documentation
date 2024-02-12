import glob from 'fast-glob'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata = {
	title: {
		template: '%s - React sprout',
		default: 'React sprout',
	},
}

export default async function RootLayout({ children }) {
	let pages = await glob('**/*.mdx', { cwd: 'src/app' })
	let allSectionsEntries = await Promise.all(
		pages.map(async (filename) => [
			'/' + filename.replace(/(^|\/)page\.mdx$/, ''),
			(await import(`./${filename}`)).sections,
		]),
	)
	let allSections = Object.fromEntries(allSectionsEntries)

	return (
		<html lang="en" className="h-full" suppressHydrationWarning>
			<head>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link0
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
				<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#12c974" />
				<meta name="apple-mobile-web-app-title" content="React Sprout" />
				<meta name="application-name" content="React Sprout" />
				<meta name="msapplication-TileColor" content="#00aba9" />
				<meta name="theme-color" content="#ffffff" />
			</head>
			<body className="flex min-h-full bg-white antialiased dark:bg-zinc-900">
				<Providers>
					<div className="w-full">
						<Layout allSections={allSections}>{children}</Layout>
					</div>
				</Providers>
			</body>
		</html>
	)
}
