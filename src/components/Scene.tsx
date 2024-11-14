import React from 'react'

interface SceneProps {
	children?: React.ReactNode
}

const Scene: React.FC<SceneProps> = ({ children }) => {
	return <div className='w-full h-full relative'>{children}</div>
}

export default Scene
