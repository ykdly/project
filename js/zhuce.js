require(['./config'],function(){
    require(['jquery','loadHF'],function($){
        class Register{
            constructor(){
                this.addlistener()
            }
            addlistener(){
                $('.button_b').on('click', this.registerHandler)
                console.log("a")
            }
            registerHandler(e) {
				e.preventDefault()
                const data = $('.form-register').serialize()
                console.log(data)
				$.post('/api/register.php', data, (res) => {
					console.log(res)
					if (res.data.status === 1) { // 注册成功
						location = '/html/login.html'
					} else { // 注册失败
						$('.register-error').removeClass('hidden').text(res.data.message)
					}
				}, 'json')
			}
        }
        new Register()
    })
})