import React from 'react'

interface InteractiveItemProps {
	id: string
	name: string
	image: string
	x: number
	y: number
	onClick: (id: string) => void
}

const InteractiveItem: React.FC<InteractiveItemProps> = ({
	id,
	name,
	image,
	x,
	y,
	onClick,
}) => {
	return (
		<div
			className='absolute cursor-pointer hover:brightness-110'
			style={{ left: `${x}px`, top: `${y}px` }}
			onClick={() => onClick(id)}
		>
			<img src={image} alt={name} className='w-12 h-12 object-contain' />
		</div>
	)
}

export default InteractiveItem
