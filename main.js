       
          // change navbar color on scroll

 window.onscroll = function() {scrollFunction()};

       	    function scrollFunction() {
       	    	if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
       	    		document.getElementById("navbar").style.backgroundColor = "#000";
       	    	}else{
       	    	document.getElementById("navbar").style.backgroundColor = "#000";	
       	    	}
       	    }

			   function sendMail() {

				const subject = document.getElementById('subject'.value);
				
				const name = document.getElementById('exampleFormControlInput1').value;
				
				const body = document.getElementById('exampleFormControlTextarea1').value;
				
				window.open(`mailto: ceciliaorji@yahoo.com.com?subject=${subject}&body=${body}`);
				
				}