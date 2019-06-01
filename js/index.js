require(['./config'], function() {
	require(['swiper', 'loadHF'], function(Swiper) {
		// 主页类
		class Home {

			constructor() {
        this.Carousel()
			}
        Carousel(){
					var mySwiper = new Swiper ('.swiper-container', { 
						loop: true, 
						autoplay:true,
						
						// 分页器
						pagination: {
							el: '.swiper-pagination',
						},
						
						//前进后退按钮
						navigation: {
							nextEl: '.swiper-button-next',
							prevEl: '.swiper-button-prev',
						},
						
					})        
				}
			
		}

		new Home()
	})
})