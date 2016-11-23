var x = 0;
var data = '';
function loadScreen(nextpage) {
	switch (nextpage) {
	    case 2:
	    	document.getElementById("page1").className = 'hide';
	    	document.getElementById("purchaseImage").src=data.allProducts[x].image_path;
	    	document.getElementById("purchaseInfoPrice").innerText=data.allProducts[x].price;
	    	document.getElementById("purchaseInfoDesc").innerText=data.allProducts[x].product_discription;
	    	document.getElementById("purchaseInfoShip").innerText=data.allProducts[x].shipping_details;    	
	    	document.getElementById("page2").className = '';
	    	document.getElementById("page3").className = 'hide';
	        break;
	    case 3:
	    	document.getElementById("page1").className = 'hide';
	    	document.getElementById("page2").className = 'hide';
	    	document.getElementById("confImage").src=data.allProducts[x].image_path;
	    	document.getElementById("confProductPrice").innerText=data.allProducts[x].price;
	    	document.getElementById("confProductInfoDesc").innerText=data.allProducts[x].product_discription;
	    	document.getElementById("confShip").innerText=data.allProducts[x].shipping_details; 
	    	document.getElementById("confTotal").innerText=data.allProducts[x].total_price;  
	    	document.getElementById("page3").className = '';
	        break;
	}
	
}
function goToReview(){
	document.getElementById("reviewName").innerText = document.getElementById("firstName").value +" "+document.getElementById("lastName").value;
	var cardNumber = document.getElementById("cardNumber").value
	document.getElementById("reviewCardNumber").innerText = "XXXXXXXXXXXX" + cardNumber.substring((cardNumber.length-4), cardNumber.length);
	document.getElementById("reviewNameOnCard").innerText = document.getElementById("nameOnCard").value;
	document.getElementById("reviewExpirationDate").innerText = document.getElementById("expiryMonth").value + "/"+document.getElementById("expiryYear").value;
	document.getElementById("reviewEmail").innerText = document.getElementById("email").value;
	document.getElementById("purchaseContainer").className = 'hide';
	document.getElementById("reviewContainer").className = '';
}
function editReview(){
	document.getElementById("reviewContainer").className = 'hide';
	document.getElementById("purchaseContainer").className = '';
}
function goToHome(){
	location.href = "/"
}
//retrewing the data from json
$(function() {
	//var path='images/';
	$.ajax({
		type : "GET",
		url : "json/guitar.json",
		contentType : "application/json; charset=utf-8",
		dataType : "json",
		cache : false,
		success : function(responseData) {
			data = responseData;
			console.log(responseData.allProducts[0].product_discription);
			$('#sliderImage').attr("src", data.allProducts[0].image_path);
			$('#productPrice').html(data.allProducts[x].price);
			$('#productText').html(data.allProducts[0].product_discription);
			$('#shippingText').html(data.allProducts[0].shipping_details);
			$('#custmer_reviews').html(data.allProducts[0].custmer_reviews);

		},
		error : function(xhr, status, error) {
			console.log(error);
		}
	});
	//accordian data changing simultaneously by clicking buttons
	$('#prev').attr('disabled', true);
	
	//images slider
	$('#next').click(function() {
		x++;
		$('#sliderImage').attr("src", data.allProducts[x].image_path);
		$('#productPrice').html(data.allProducts[x].price);
		$('#productText').html(data.allProducts[x].product_discription);
		$('#shippingText').html(data.allProducts[x].shipping_details);
		$('#custmer_reviews').html(data.allProducts[x].custmer_reviews);
		$('#prev').attr('disabled',false);
		if((x+1)==data.allProducts.length){
			$('#next').attr('disabled',true);
		}
	});
	$('#prev').click(function() {
		x--;
		$('#sliderImage').attr("src", data.allProducts[x].image_path);
		$('#productPrice').html(data.allProducts[x].price);
		$('#productText').html(data.allProducts[x].product_discription);
		$('#shippingText').html(data.allProducts[x].shipping_details);
		$('#custmer_reviews').html(data.allProducts[x].custmer_reviews);
		$('#next').attr('disabled',false);
		if(x==0){
			$('#prev').attr('disabled',true);
		}
	});
});
