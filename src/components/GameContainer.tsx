import React from 'react'

interface GameContainerProps {
	children: React.ReactNode
}

const GameContainer: React.FC<GameContainerProps> = ({ children }) => {
	return (
		<div className='w-full h-screen bg-gray-900 flex justify-center items-center'>
			<div className='w-[1920px] h-[1080px] bg-black relative'>
				{children}
			</div>
		</div>
	)
}

export default GameContainer
