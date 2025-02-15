const buttonYes = document.querySelector('.yes')
const buttonNo = document.querySelector('.no')

buttonNo.addEventListener("click", function(){
	buttonNo.classList.add("hide")
})

buttonYes.addEventListener("click", function(){
	buttonYes.classList.add("hide")

	const addFeedBack = document.createElement('span')
	const onFeedBack = document.createTextNode('LOVE YOU FOR EVER')
	addFeedBack.appendChild(onFeedBack)

	const wrapContainer = document.querySelector('.container')
	wrapContainer.appendChild(addFeedBack)

	buttonNo.classList.add("hide")
})


