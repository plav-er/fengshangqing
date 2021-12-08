// loding
var bigloding = document.querySelector(".bigloding")
var box = document.querySelector(".box");
(function(){
	setTimeout(()=>{
		bigloding.style.display = "none"
		box.style.display = "block"
	},2000)
})()

// 轮播图
var swiper = new Swiper('.swiper-container', {
	slidesPerView: 1,
	autoplay: {
		disableOnInteraction: false,
	},
	loop: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});

//全屏滚动
var panel = document.querySelector(".panel");
const ul = document.querySelector('.headerNav ul')
const ls = document.querySelectorAll('.headerNav ul li')
var i = 0;
var flag = true
ls[i].className = "current"
document.addEventListener("wheel", function (e) {
	if (flag) {
		flag = false;
		if (e.wheelDelta < 0 && i < panel.children.length - 1) {
			i++;
		} else if (e.wheelDelta > 0 && i > 0) {
			i--;
		}

		ls.forEach(function (e) {
			e.className = ""
		})
		ls[i].className = "current"
		left = 72*i;
		span.style.left = left + "px"

		panel.style.top = -100 * i + "%";
		// console.log(panel.style.top);
		setTimeout(function () {
			flag = true;
		}, 1000)
	}
})

// 固定导航栏模块
const span = document.querySelector("ul span")
// 小线条的移动位置
let left = 0;
ls.forEach(function (e, n) {
	e.addEventListener('mouseover', function () {
		// 让小线条的位置等与当前移入 e(li) 的位置
		span.style.left = e.offsetLeft + "px"
		console.log(e.offsetLeft);
	})
	e.addEventListener('mouseout', function () {
		span.style.left = left + "px"
	})
	e.addEventListener('click', function () {
		left = e.offsetLeft
		i = n;
		ls.forEach(function (e) {
			e.className = ""
		})
		ls[i].className = "current"
		panel.style.top = -100 * n + "%";
	})
})


// 首页新闻模块里的下滑模块
let down = document.querySelector(".down");
down.addEventListener('click', function () {
	i++;
	ls.forEach(function (e) {
		e.className = ""
	})
	left = 72*i
	ls[i].className = "current"
	
	span.style.left = left + "px"
	panel.style.top = -100 * i + "%";
})

// 首页固定联系模块
const plus = document.querySelector(".plus")
const fixedBox = document.querySelector(".fixedBox")
let isHiden = true;
plus.addEventListener('click', function () {
	if (isHiden) {
		plus.style.transform = "rotate(45deg)"
		fixedBox.style.right = "-45px"
		isHiden = false;
	} else {
		plus.style.transform = "rotate(0deg)"
		fixedBox.style.right = "0px"
		isHiden = true;
	}
})
fixedBox.children[0].addEventListener('click', function () {
	if (flag) {
		flag = false
		if (i > 0) {
			i--;
			ls.forEach(function (e) {
				e.className = ""
			})
			ls[i].className = "current"
			left = 72*i;
			span.style.left = left + "px"
			panel.style.top = -100 * i + "%";
		}
		setTimeout(function () {
			flag = true;
		}, 1000)
	}
})
var box1 = document.querySelector(".fixedBox .box1")
var box2 = document.querySelector(".fixedBox .box2")

fixedBox.children[1].addEventListener('mouseover', function () {
	box1.style.display = "block"
	box1.style.right = "45px";
})
fixedBox.children[1].addEventListener('mouseout', function () {
	box1.style.right = "-150px";
	box1.style.display = "none"
})
fixedBox.children[2].addEventListener('mouseover', function () {
	box2.style.display = "block"
	box2.style.right = "45px";
})
fixedBox.children[2].addEventListener('mouseout', function () {
	box2.style.right = "-150px";
	box2.style.display = "none"
})

fixedBox.children[3].addEventListener('click', function () {
	if (flag) {
		flag = false 
		if (i < panel.children.length - 1) {
			i++;
			ls.forEach(function (e) {
				e.className = ""
			})
			ls[i].className = "current"
			left = 72*i;
			span.style.left = left + "px"
			panel.style.top = -100 * i + "%";
		}
		setTimeout(function () {
			flag = true;
		}, 1000)
	}
})

// 页面二服务模块特效
const cover = document.querySelectorAll(".page2 .cover");
const lis = document.querySelectorAll(".page2 li");
const h3s = document.querySelectorAll(".page2 h3")
lis.forEach(function (e, i) {
	e.addEventListener('mouseover', function () {
		cover[i].style.height = "100%";
		h3s[i].style.color = "white"
	})
	e.addEventListener('mouseout', function () {
		cover[i].style.height = "0";
		h3s[i].style.color = "rgb(92, 90, 90)"
	})
})

//页面四品牌显示特效
const brands = document.querySelectorAll(".page4 ul li");
brands.forEach(function (e, i) {
	e.style.backgroundPosition = -230 * i + "px 0px"
	e.addEventListener("mouseover", function () {
		this.style.backgroundPosition = -230 * i + "px -150px"
	})
	e.addEventListener("mouseout", function () {
		this.style.backgroundPosition = -230 * i + "px 0px"
	})
})

// 页面七公司简介/荣誉模块
var hs = document.querySelectorAll(".tab h5")
var covers = document.querySelector(".tab .cover")
var contentall = document.querySelector(".contentall")
hs.forEach(function (e, i) {
	e.addEventListener('mouseover', function () {
		covers.style.top = 44 * i + "px";
		contentall.style.left = -480 * i + "px";
	})
})