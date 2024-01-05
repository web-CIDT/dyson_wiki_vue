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

// 顶栏渐变
topbarFadeChange = () => {
	let topbar = document.getElementById('navbar')
	let banner = document.getElementById('main-content')
	let page = document.querySelector('.vp-highlight-wrapper')

	let startHeight, endHeight
	let maxOpacity = 1
	let maxBlur = 16

	startHeight = banner.offsetTop
	endHeight = page.offsetTop

	window.addEventListener('resize', () => {
		startHeight = banner.offsetTop
		endHeight = page.offsetTop
	})

	changeTopbarTransparency = () => {
		let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
		if (scrollTop < startHeight) {
			topbar.style.setProperty('background-color', 'rgba((--navbar-bg-color), 0)', 'important')
			topbar.style.setProperty('box-shadow', 'none')
			topbar.style.setProperty('backdrop-filter', 'blur(0px) opacity(0)')
			return
		}
		if (scrollTop > endHeight) {
			topbar.style.setProperty('background-color', 'rgba((--navbar-bg-color), ' + maxOpacity + ')', 'important')
			topbar.style.setProperty('box-shadow', '0 2px 8px rgba(var(--card-shadow),' + maxOpacity + ')', 'important')
			topbar.style.setProperty('backdrop-filter', 'blur(16px) opacity(100%)')
			return
		}
		let transparency = (scrollTop - startHeight) / (endHeight - startHeight) * maxOpacity
		let transblur = (scrollTop - startHeight) / (endHeight - startHeight) * maxBlur
		topbar.style.setProperty('background-color', 'rgba((--navbar-bg-color), ' + transparency + ')', 'important')
		topbar.style.setProperty('box-shadow', '0 2px 8px rgba(var(--card-shadow),' + transparency + ')', 'important')
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

feedbackTitle()
topbarFadeChange()