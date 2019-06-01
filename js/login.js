require(['./config'], function() {
	require(['jquery', 'loadHF'], function($) {
		class Login {
			constructor() {
				console.log(this.addListener())
			}

			addListener() {
				// 点击“登录”提交登录表单
				$('.login a').on('click', this.loginHandler)
			}

			// 实现登录处理
			loginHandler(){
                $(".login_l").style.display="block";
            }
		}

		new Login()
	})
})