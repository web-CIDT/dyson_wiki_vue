// 获取视窗高度
getClientHeight = () => {
	let clientHeight = 0

	if (document.body.clientHeight && document.documentElement.clientHeight) {
		clientHeight = (document.body.clientHeight < document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight
	}
	else {
		clientHeight = (document.body.clientHeight > document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight
	}
	return clientHeight
}

// 获取视窗宽度
getClientWidth = () => {
	let clientWidth = 0

	if (document.body.clientWidth && document.documentElement.clientWidth) {
		clientWidth = (document.body.clientWidth < document.documentElement.clientWidth) ? document.body.clientWidth : document.documentElement.clientWidth
	}
	else {
		clientWidth = (document.body.clientWidth > document.documentElement.clientWidth) ? document.body.clientWidth : document.documentElement.clientWidth
	}
	return clientWidth
}

// 滑动函数
scrollToDest = (pos, time) => {
	const currentPos = window.scrollY || window.pageYOffset
	if (currentPos > pos) pos = pos - 50

	if ('scrollBehavior' in document.documentElement.style) {
		window.scrollTo({
			top: pos,
			behavior: 'smooth'
		})
		return
	}

	let start = null
	pos = +pos
	window.requestAnimationFrame(step = (currentTime) => {
		start = !start ? currentTime : start
		const progress = currentTime - start
		if (currentPos < pos) {
			window.scrollTo(0, ((pos - currentPos) * progress / time) + currentPos)
		} else {
			window.scrollTo(0, currentPos - ((currentPos - pos) * progress / time))
		}
		if (progress < time) {
			window.requestAnimationFrame(step)
		} else {
			window.scrollTo(0, pos)
		}
	})
}

// banner定位滑动
scrollDownInIndex = () => {
	if (!(document.getElementById('scroll-down'))) {
		let banner = document.querySelector('.vp-hero-info-wrapper')
		banner.insertAdjacentHTML('beforeend', '<div id="scroll-down" class="scroll-down-wrapper"><span class="font-icon icon fa-solid fa-chevron-down"></span></div>')
	}
	let scrollDownEle = document.getElementById('scroll-down')
	scrollDownEle.addEventListener('click', () => {
		scrollToDest(document.querySelector('.vp-highlight-wrapper').offsetTop, 300)
	})
}

// 顶栏渐变
topbarFadeChange = () => {
	let topbar = document.getElementById('navbar')
	let banner = document.querySelector('.vp-hero-info-wrapper')
	let page = document.querySelector('.vp-highlight-wrapper')

	let startHeight, endHeight
	let maxOpacity = 0.9
	let maxBlur = 12

	startHeight = banner.offsetTop
	endHeight = page.offsetTop

	window.addEventListener('resize', () => {
		startHeight = banner.offsetTop
		endHeight = page.offsetTop
	})

	changeTopbarTransparency = () => {
		let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
		if (scrollTop < startHeight) {
			topbar.style.setProperty('background-color', 'rgba(var(--topbar-color), 0)', 'important')
			topbar.style.setProperty('box-shadow', 'none')
			topbar.style.setProperty('backdrop-filter', 'blur(0px)')
			return
		}
		if (scrollTop > endHeight) {
			topbar.style.setProperty('background-color', 'rgba(var(--topbar-color), ' + maxOpacity + ')', 'important')
			topbar.style.setProperty('box-shadow', '0 4px 8px rgba(var(--topbar-shadow),' + maxOpacity + ')', 'important')
			topbar.style.setProperty('backdrop-filter', 'blur(16px)')
			return
		}
		let transparency = (scrollTop - startHeight) / (endHeight - startHeight) * maxOpacity
		let transblur = (scrollTop - startHeight) / (endHeight - startHeight) * maxBlur
		topbar.style.setProperty('background-color', 'rgba(var(--navbar-bg-color), ' + transparency + ')', 'important')
		topbar.style.setProperty('box-shadow', '0 4px 8px rgba(var(--topbar-shadow),' + transparency + ')', 'important')
		if ((scrollTop - startHeight) / (endHeight - startHeight) > 0.1) {
			topbar.style.setProperty('backdrop-filter', 'blur(' + transblur + 'px)')
		}
		else {
			topbar.style.setProperty('backdrop-filter', 'blur(0px)')
		}
	}
	changeTopbarTransparency()
	document.addEventListener('scroll', changeTopbarTransparency, { passive: true })
}

// 动态标题
feedbackTitle = () => {
	let OriginTitile = document.title
	let welcome
	document.addEventListener('visibilitychange', () => {
		if (document.hidden) {
			document.title = '记得回来肝球'
			clearTimeout(welcome)
		} else {
			document.title = '欢迎来到真实宇宙'
			welcome = setTimeout(() => {
				document.title = OriginTitile
			}, 1500)
		}
	})
}

scrollDownInIndex()
feedbackTitle()
topbarFadeChange()