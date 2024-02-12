import Image from 'next/image'

export function Logo() {
	return (
		<div className="flex items-center gap-4">
			<Image
				className="h-8 w-8"
				width="32"
				height="32"
				src="/react-sprout.png"
				alt="react sprout"
			/>
			<span className="text-xl font-semibold">React Sprout</span>
		</div>
	)
}
