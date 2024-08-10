import React, { useEffect, useRef } from 'react'

///importation objets///

const CircleAnimation = () => {
	const circleRef = useRef(null)

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY
			const windowHeight = window.innerHeight
			const documentHeight = document.documentElement.scrollHeight

			// Calculate new dimensions based on scroll position
			const maxDimension =
				Math.max(window.innerWidth, window.innerHeight) * 2
			const newDimension =
				scrollPosition >= documentHeight - windowHeight
					? maxDimension
					: Math.max(100, 100 + scrollPosition * 2)
			const newTransform =
				scrollPosition >= documentHeight - windowHeight
					? 'translate(-50%, -50%)'
					: `translate(-50%, -50%) translateX(${Math.min(
							scrollPosition,
							windowHeight / 2
					  )}px)`

			if (circleRef.current) {
				circleRef.current.style.width = `${newDimension}px`
				circleRef.current.style.height = `${newDimension}px`
				circleRef.current.style.transform = newTransform
			}
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<div className="circle__container">
			<div className="circle" ref={circleRef}></div>
		</div>
	)
}

export default CircleAnimation
