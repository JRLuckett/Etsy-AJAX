var result =[];
var obj = '<div class="obj4sale"><a class="clickable" href="#"><img src=""/><footer class="info"><h3 class="title"></h3><h3 class="company"></h3><h3 class="price"></footer></div></a>';
var objectListing = $('.page');

var request = {
    type: 'GET',
    url: 'https://api.etsy.com/v2/listings/active.js?api_key=5l7hwarkfj9w22pjsghru8wf&keywords=soap&includes=Images,Shop',
    dataType: 'jsonp',
    success: function(response) {
    var objArr = response.results;
objArr.forEach(function(item,i) {
  var $objPost = $(obj);
  $objPost.children('.clickable').children('.info').children('.title').text(item.title);
  $objPost.children('.clickable').children('.info').children('.company').text(item.Shop.shop_name);
  $objPost.children('.clickable').children('.info').children('.price').text('$' +item.price);
  $objPost.children('.clickable').children('img').attr('src',item.Images[0].url_170x135);
  $objPost.children('.clickable').attr('href',item.url);
  objectListing.append($objPost);
  console.log(item);
});


    }
};
$.ajax(request);
