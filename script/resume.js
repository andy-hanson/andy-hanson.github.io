'use strict'

document.addEventListener('DOMContentLoaded', () => {
	document.querySelector('#details-toggle').addEventListener('click', () => {
		const details = document.querySelectorAll('details')
		const newOpen = !Array.prototype.some.call(details, _ => _.open)
		Array.prototype.forEach.call(details, _ => {
			_.open = newOpen
		})
	})
})
