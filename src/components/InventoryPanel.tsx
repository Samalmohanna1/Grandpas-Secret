import React from 'react'

interface InventoryItem {
	id: string
	name: string
	image: string
}

interface InventoryPanelProps {
	items: InventoryItem[]
	onItemClick: (id: string) => void
}

const InventoryPanel: React.FC<InventoryPanelProps> = ({
	items,
	onItemClick,
}) => {
	return (
		<div className='absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-75 p-2'>
			<div className='flex justify-center space-x-2'>
				{items.map((item) => (
					<div
						key={item.id}
						className='w-12 h-12 bg-gray-700 rounded cursor-pointer hover:bg-gray-600'
						onClick={() => onItemClick(item.id)}
					>
						<img
							src={item.image}
							alt={item.name}
							className='w-full h-full object-contain'
						/>
					</div>
				))}
			</div>
		</div>
	)
}

export default InventoryPanel
