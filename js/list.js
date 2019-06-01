require(['./config'],function(){
    require(['jquery','template','loadHF'],function($,template){
           class List{
               constructor(){
                   this.initProductList()
               }

               initProductList(){
                   const url ="http://www.xiongmaoyouxuan.com/api/tab/2"
                   $.getJSON(url,function(resp){
                       console.log(resp)
                       const list = resp.data.items.list
                       const data = {products:list}
                       console.log(data)
                       const html = template('list-template',data)
                       $(".shop_box").html(html)
                   })
               }
           }
           new List()
    })
})