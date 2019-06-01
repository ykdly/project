define([
    'jquery'
], function($) {
    class LoadHeaderAddFooter{
        constructor(){
            this.loadHeader()
            this.loadFooter()
        }
    
    
        loadHeader() {
			$('header').load('/html/include/header.html',()=>{
                this.addListener()
         })  
        }
         addListener() {
		 	$(".search input").on("keyup", this.suggesteHandler)
			 $('.suggest').delegate("div", "click", this.suggestClickHandler)
         }
         suggestClickHandler(e) {
		 	$(".search input").val($(e.target).html())
		 	$(".suggest").empty()
		 }

		 suggesteHandler(e) {
		 	const _val = $(e.target).val()
	     	const _url = `https://suggest.taobao.com/sug?code=utf-8&q=${_val}&callback=?`
		 	$.getJSON(_url, (data) => {
		 		console.log(data)
				 const html = data.result.map(curr => `<div style="font-size:12px;margin:10px;">${curr[0]}</div>`).join("")
		 		$(".search .suggest").html(html)
		 	})
		 }

        
        loadFooter() {
			$('footer').load('/html/include/footer.html')
		}
    }
    return new LoadHeaderAddFooter()
})

	