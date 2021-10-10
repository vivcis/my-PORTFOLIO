       
          // change navbar color on scroll

 window.onscroll = function() {scrollFunction()};

       	    function scrollFunction() {
       	    	if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
       	    		document.getElementById("navbar").style.backgroundColor = "#000";
       	    	}else{
       	    	document.getElementById("navbar").style.backgroundColor = "#000";	
       	    	}
       	    }