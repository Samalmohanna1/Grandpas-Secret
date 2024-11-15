import React, { useState, useEffect } from 'react'

interface DialogueBoxProps {
	text: string
	speaker?: string
	onComplete?: () => void
}

const DialogueBox: React.FC<DialogueBoxProps> = ({
	text,
	speaker,
	onComplete,
}) => {
	const [displayedText, setDisplayedText] = useState('')
	const [isComplete, setIsComplete] = useState(false)
	const [isVisible, setIsVisible] = useState(true)

	useEffect(() => {
		let index = 0
		const timer = setInterval(() => {
			setDisplayedText((prev) => {
				if (index < text.length) {
					index++
					return text.slice(0, index)
				} else {
					clearInterval(timer)
					setIsComplete(true)
					return prev
				}
			})
		}, 50)

		return () => clearInterval(timer)
	}, [text])

	const handleClick = () => {
		if (isComplete) {
			setIsVisible(false)
			onComplete && onComplete()
		}
	}

	if (!isVisible) return null

	return (
		<div
			className='absolute top-[10%] left-0 right-3/4 bg-gray-800 bg-opacity-75 p-4 text-white cursor-pointer'
			onClick={handleClick}
		>
			{speaker && <div className='font-bold mb-2'>{speaker}</div>}
			<div>{displayedText}</div>
			{isComplete && (
				<div className='mt-2 text-sm text-gray-300'>
					Click to continue...
				</div>
			)}
		</div>
	)
}

export default DialogueBox
