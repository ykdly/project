require(['./config'],function(){
    require(['jquery','template','loadHF','zoom'],function($,template){
          class Detail {
              constructor(){
                this.cart = JSON.parse(localStorage.getItem("cart")) || []
                this.init()
                
              }
              init(){
                const _id = window.location.search.slice(4)
                const url =`http://www.xiongmaoyouxuan.com/api/detail?id=${_id}`
                $.getJSON(url,resp => {

                    const _prod = resp.data.detail
                    console.log(resp)
                    const data = {prod: _prod}
                    const html = template("detail-template",data)
                    $(".pdp_main").prepend(html)
                    this.addListener()
                    $(".img_m").elevateZoom({
                      // gallery:'gallery',
                      cursor: 'pointer',
                      galleryActiveClass: 'active',
                      tint:true,
                      tintColour:'#F90',
                      tintOpacity:0.5
                    })
                })
              }
              addListener() {
            console.log($("#KLS00014"))

                $("#KLS00014").on("click", this.addToCartHandler.bind(this))
              }
           
              addToCartHandler(e) {
               
                console.log("a")
                const parents = $(e.target).parents(".prod-detail")
                // 获取当前选购商品的信息
                const currProd = {
                  id: parents.data("id"),
                  title: parents.find(".prod-title").text(),
                  image: parents.find(".prod-img").attr("src"),
                  price: parents.find(".prod-price").text(),
                  amount: 1
                }
                console.log(currProd)
                this.cart = JSON.parse(localStorage.getItem("cart")) || []

				const has = this.cart.some(prod => prod.id == currProd.id)
				if (has) {
					this.cart = this.cart.map(prod => {
						if (prod.id == currProd.id)
							prod.amount += 1
						return prod
					})
				} else {
					this.cart.push(currProd)
				}
				localStorage.setItem("cart", JSON.stringify(this.cart))
        

              
          }
        }
          new Detail()
    })
})