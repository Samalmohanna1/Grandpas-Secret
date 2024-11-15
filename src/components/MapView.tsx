import React from 'react'

interface Location {
	id: string
	name: string
	x: number
	y: number
	isUnlocked: boolean
}

interface MapViewProps {
	locations: Location[]
	currentLocation: string
	onLocationSelect: (locationId: string) => void
}

const MapView: React.FC<MapViewProps> = ({
	locations,
	currentLocation,
	onLocationSelect,
}) => {
	return (
		<div className='absolute top-4 right-4 bg-gray-800 bg-opacity-75 p-4 rounded-lg'>
			<h2 className='text-white text-lg font-bold mb-2'>Map</h2>
			<div className='relative w-64 h-64 bg-gray-700 rounded-lg'>
				{locations.map((location) => (
					<button
						key={location.id}
						className={`absolute w-8 h-8 rounded-full 
              ${location.isUnlocked ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-500'}
              ${currentLocation === location.id ? 'ring-2 ring-white' : ''}
              ${!location.isUnlocked ? 'cursor-not-allowed' : 'cursor-pointer'}`}
						style={{
							left: `${location.x}%`,
							top: `${location.y}%`,
						}}
						onClick={() =>
							location.isUnlocked && onLocationSelect(location.id)
						}
						disabled={!location.isUnlocked}
					>
						<span className='sr-only'>{location.name}</span>
					</button>
				))}
			</div>
			<div className='mt-2 text-white'>
				Current Location:{' '}
				{locations.find((l) => l.id === currentLocation)?.name}
			</div>
		</div>
	)
}

export default MapView
