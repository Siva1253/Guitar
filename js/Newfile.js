var index=0;
var value='';
/* For swithching pages */
function loadScreen(nextpage) {
	switch (nextpage) {
	    case 2:
	    	document.getElementById("page1").className = 'hide';
	    	document.getElementById("siva").src=value.allProducts[index].image_path;
			document.getElementById("siva4").innerHTML=value.allProducts[index].price;
	    	document.getElementById("siva1").innerHTML=value.allProducts[index].product_discription;
	    	document.getElementById("siva2").innerHTML=value.allProducts[index].shipping_details;
	    	document.getElementById("siva3").innerHTML=value.allProducts[index].Total_price;    				
	    	document.getElementById("pag2").className = '';
	    	document.getElementById("page3").className = 'hide';
	        break;
	    case 3:
	    	document.getElementById("page1").className = 'hide';
	    	document.getElementById("pag2").className = 'hide';
	    	document.getElementById("confImage").src=value.allProducts[index].image_path;
			document.getElementById("Price").innerHTML=value.allProducts[index].price;
	    	document.getElementById("Info").innerHTML=value.allProducts[index].product_discription;
	    	document.getElementById("Ship").innerHTML=value.allProducts[index].shipping_details;
	    	document.getElementById("Total").innerHTML=value.allProducts[index].Total_price;
	    	document.getElementById("page3").className = '';
	        break;
	}
}
/* form validation */
	function validateForm(){
		var firstName=document.getElementById("firstName").value;
		var lastName=document.getElementById("lastName").value;
		var cardNumber=document.getElementById("cardNumber").value;
		var Cardname=document.getElementById("nameOnCard").value;
		var expiryMonth=document.getElementById("expiryMonth").value;
		var expiryYear=document.getElementById("expiryYear").value;
		var CVV=document.getElementById("cvv").value;
		var email=document.getElementById("email").value;
		if(firstName=="" || !isNaN(firstName)){
			alert("Enter valid Firstname");
			firstName.focus();
			return false;
		}else if(/[^a-zA-Z\-\/]/.test(firstName)){
			alert("Enter valid Firstname");
			firstName.focus();
			return false;		
		}else if(lastName=="" || !isNaN(lastName)){
			alert("Enter valid Lastname");
			lastName.focus();
			return false;
		}else if(/[^a-zA-Z\-\/]/.test(lastName)){
			alert("Enter valid Lasttname");
			lastName.focus();
			return false;
		}else if((cardNumber.length <16 || cardNumber.length >16) || cardNumber=="" || isNaN(cardNumber)){
			alert("Enter 16 digits Cardnumber");
			cardNumber.focus();
			return false;
		}else if(Cardname=="" || !isNaN(Cardname)){
			alert("Enter valid Name on Card");
			Cardname.focus();
			return false;
		}else if(/[^a-zA-Z\-\/]/.test(Cardname)){
			alert("Enter valid Name on Card");
			Cardname.focus();
			return false;
		}else if(expiryMonth==""){
			alert("Select Expiry Month");
			expiryMonth.focus();
			return false;
		}else if(expiryYear==""){
			alert("Select Expiry Year");
			expiryYear.focus();
			return false;
		}else if((CVV.length <3 || CVV.length >4) || CVV=="" || isNaN(CVV)){
			alert("Enter valid CVV");
			CVV.focus();
			return false;
		}else if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
			return true;
		}
			alert("You have entered an invalid email address!");
			email.focus();
			return false;
		return true;
	}
	/* Returns User details those are entered in Purchase form */
	function goReview(){
		validateForm();
		document.getElementById("reviewName").innerHTML = document.getElementById("firstName").value +" "+document.getElementById("lastName").value;
		var cardNumber = document.getElementById("cardNumber").value
		document.getElementById("reviewCardNumber").innerHTML = "XXXXXXXXXXXX" + cardNumber.substring((cardNumber.length-4), cardNumber.length);
		document.getElementById("reviewNameOnCard").innerHTML = document.getElementById("nameOnCard").value;
		document.getElementById("reviewExpirationDate").innerHTML = document.getElementById("expiryMonth").value + "/"+document.getElementById("expiryYear").value;
		document.getElementById("reviewEmail").innerHTML = document.getElementById("email").value;
		document.getElementById("purchaseContainer").className = 'hide';
		document.getElementById("reviewContainer").className = '';
	}
	/* Go back to Form */
	function editReview(){
		document.getElementById("reviewContainer").className = 'hide';
		document.getElementById("purchaseContainer").className = '';
	}
	function goToHome(){
		location.href = "index.html"
	}
	/* This is used for getting data from JSON and fetching to HTML. */
$(function(){
		
		$.ajax({
				type : "GET",
			url: "json/guitar.json",
			contentType: "application/json; charset=utf-8",
			dataType: "json",
					success : function(responseData) {
					value=responseData;
					$('#currentImage').attr('src', value.allProducts[0].image_path);
					$('#prodinfo').html(value.allProducts[0].product_discription);
					$('#prodcost').html(value.allProducts[0].price);
					$('#shipinfo').html(value.allProducts[0].shipping_details);
					$('#review').html(value.allProducts[0].custmer_reviews);
				},
			error: function (xhr, status, error) {
				console.log(error);
			}
		}); 
		
			$('#prev').attr('disabled', true);
			$('#next').click(function(){
				index++;
				$('#currentImage').attr('src', value.allProducts[index].image_path);
				$('#prodinfo').html(value.allProducts[index].product_discription);
				$('#prodcost').html(value.allProducts[index].price);
				$('#shipinfo').html(value.allProducts[index].shipping_details);
				$('#review').html(value.allProducts[index].custmer_reviews);
				$('#prev').attr('disabled', false);
					if((index+1)==value.allProducts.length){
						$('#next').attr('disabled',true);
					}
			});
			$('#prev').click(function(){
				index--;
				$('#currentImage').attr('src', value.allProducts[index].image_path);
				$('#prodinfo').html(value.allProducts[index].product_discription);
				$('#prodcost').html(value.allProducts[index].price);
				$('#shipinfo').html(value.allProducts[index].shipping_details);
				$('#review').html(value.allProducts[index].custmer_reviews);
				$('#next').attr('disabled',false);
					if(index==0){
						$('#prev').attr('disabled', true);
					}
			});
					
	});