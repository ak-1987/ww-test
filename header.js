window.hamburger_menu_show = function() {
	document.querySelector('div#main_overlay').style.display = 'block';
	document.querySelector('body').style.overflow = 'hidden';
	document.querySelector('div#header_hamburger_menu > i:nth-child(1)').style.display = 'none';
	document.querySelector('div#header_hamburger_menu > i:nth-child(2)').style.display = 'block';
	document.querySelector("div#hamburger_menu").style.top = 0;
	if(document.documentElement.clientWidth < 400) {
		document.querySelector('div#hamburger_menu').style.width = '90%';
		$("div#hamburger_menu").animate({"right": "10%"}, "slow" );
	} else if(document.documentElement.clientWidth < 500) {
		document.querySelector('div#hamburger_menu').style.width = '80%';
		$("div#hamburger_menu").animate({"right": "20%"}, "slow" );
	} else {
		document.querySelector('div#hamburger_menu').style.width = '75%';
		$("div#hamburger_menu").animate({"right": "25%"}, "slow" );    
  }
	document.querySelector('div#hamburger_menu').classList.add('shadow');
	setTimeout(function() {
		document.body.addEventListener('click', hamburger_menu_event, false);
	}, 100);
}

window.hamburger_menu_hide = function() {      
	document.querySelector('div#main_overlay').style.display = 'none';
	document.querySelector('body').style.overflow = '';
	document.querySelector('div#header_hamburger_menu > i:nth-child(1)').style.display = 'block';
	document.querySelector('div#header_hamburger_menu > i:nth-child(2)').style.display = 'none';
	$("div#hamburger_menu").animate({"right": "100%"}, "slow" );
	document.querySelector('div#hamburger_menu').classList.remove('shadow');
}

function hamburger_menu_event(event) {
	if (document.querySelector("div#hamburger_menu").contains(event.target)) {
	//
	} else {
		document.body.removeEventListener('click', hamburger_menu_event, false);
		hamburger_menu_hide();
	}			
}

function header_search_box_event(event) {
	if (document.querySelector("div#header_search_box").contains(event.target)) {
	//
	} else {
    	document.querySelector('div#main_overlay').style.display = 'none';
		document.body.removeEventListener('click', header_search_box_event, false);
		document.querySelector("div#header_search_box").style.display = '';
	}
}

function popup1_event(event) {
  console.log("popup1_event()");
	if (document.querySelector("div.popup1").contains(event.target)) {
	//
	} else {		
    	popup1_close();
	}
}

if(window.innerWidth < 1024) {
	var popup1_timeout = 30 * 1000;
} else {
	var popup1_timeout = 3 * 60 * 1000;
}		
var popup1_shown    = false;
var popup1_interval = 24*60;
var INTWindowActive = true;
	
window.popup1_show = function() {
	if(INTWindowActive == false && popup1_shown == false && document.querySelector('div#main_overlay').style.display == "" && document.cookie.match(/^(.*;)?\s*INTPopup1\s*=\s*[^;]+(.*)?$/) == null && document.cookie.match(/^(.*;)?\s*INTContact\s*=\s*[^;]+(.*)?$/) == null) {
		dataLayer.push({'event': 'LAD Event', 'eventCategory': 'Exit Intent Pop-up', 'eventAction': 'Open', 'eventLabel': ''});
		popup1_shown = true;
		document.querySelector('div#main_overlay').style.display = 'block';
    	document.querySelector('div#popup').style.marginLeft     = '-1000px';
		document.querySelector('div#popup').style.display        = 'block';
		document.querySelector('body').style.overflow            = 'hidden';
		var hDiff = document.querySelector('div#popup > div > form[id="hsForm_e425514f-2da9-48e0-b3ed-a46ac3a1e736"] > div.hs_email > div > a').offsetHeight - document.querySelector('div#popup > div > form[id="hsForm_e425514f-2da9-48e0-b3ed-a46ac3a1e736"] > div.hs_email > div > input').offsetHeight;
		if(hDiff > 0) {
		} else if(hDiff == 0) {
		} else if(hDiff < 0) {
			hDiff = hDiff*-1;
			document.querySelector('div#popup > div > form[id="hsForm_e425514f-2da9-48e0-b3ed-a46ac3a1e736"] > div.hs_email > div > a').style.paddingTop = hDiff/2+'px';
			document.querySelector('div#popup > div > form[id="hsForm_e425514f-2da9-48e0-b3ed-a46ac3a1e736"] > div.hs_email > div > a').style.paddingBottom = hDiff/2+'px';
		}
	    document.querySelector('div#popup').style.marginLeft     = 'auto';

	    setTimeout(function() {
			document.body.addEventListener('click', popup1_event, false);
			document.body.addEventListener('focusout', popup1_event, false);
	    }, 100);
    
	}				
}

window.popup1_close = function() {
	document.querySelector('div#main_overlay').style.display = '';
	document.querySelector('div#popup').style.display        = '';
	document.querySelector('body').style.overflow            = '';	
	dataLayer.push({'event': 'LAD Event', 'eventCategory': 'Exit Intent Pop-up', 'eventAction': 'Close', 'eventLabel': ''});
	//
  	var date = new Date();
  	date.setTime(date.getTime()+(popup1_interval*60*1000));
	document.cookie = name+"INTPopup1=1; expires="+date.toGMTString()+"; path=/";
	document.body.removeEventListener('click', popup1_event, false);
	//
} 

window.popup1_submit2 = function() {
	document.querySelector('div#popup > div > form').style.display = 'none'; 
	document.querySelector('div#popup > h4').style.display = 'none';
	document.querySelector('div#popup > p').style.display = 'none';
	document.querySelector('div#popup > p > a').style.display = 'none';
	document.querySelector('div#popup > img').style.display = 'none';
	document.querySelector('div#popup > p.center').style.display = 'none';
	document.querySelector('div#popup > p:nth-child(8)').style.display = 'none';
	document.querySelector('div#popup > button').style.display = 'none';
	document.querySelector('div#popup > p.thank').style.display = 'block';
	dataLayer.push({'event': 'LAD Event', 'eventCategory': 'Exit Intent Pop-up', 'eventAction': 'Submit', 'eventLabel': ''});
	//
  	var date = new Date();
  	date.setTime(date.getTime()+(365*24*60*1000));
	document.cookie = name+"INTContact=1; expires="+date.toGMTString()+"; path=/";
	document.body.removeEventListener('click', popup1_event, false);
	//	
	setTimeout(function() { popup1_close() }, 3000 );	  
}

window.popup1_submit1 = function() {	
	document.querySelector("form[id='hsForm_e425514f-2da9-48e0-b3ed-a46ac3a1e736']").submit(); 
	popup1_submit1();
}

var INTInterval1 = null;
(function() {
	// Header Width
	document.querySelector('div#header').style.width = document.documentElement.clientWidth+'px';  
	// Search Icon & Bar
	document.querySelector('div#header_search').addEventListener('click', function() {
		document.querySelector('div#main_overlay').style.display = 'block';
        document.querySelector("div#header_search_box").style.display = 'block';
        if(document.documentElement.clientWidth < 500 ) {
			document.querySelector('div#header_search_box').style.width = document.documentElement.clientWidth/4*3+'px';	
        } else {
        	document.querySelector('div#header_search_box').style.width = document.documentElement.clientWidth/2+'px';	
        }
		//       
        document.querySelector('div#header_search_box').style.left  = (document.documentElement.clientWidth-document.querySelector('div#header_search_box').offsetWidth)/2+'px';
        document.querySelector("div#header_search_box").style.top   = (document.querySelector('div#header_hamburger_menu').parentNode.offsetHeight+5)+'px';
        document.querySelector("div#header_search_box").classList.remove("active");
        //
        document.querySelector('div#header_search_box').addEventListener('click', function() {
          if(document.querySelector('div#header_search_box > input').value == "Search...") {
            document.querySelector('div#header_search_box > input').value = "";
          }
        });
        //
        document.querySelector('div#header_search_box > i').addEventListener('click', function() {
          if(document.querySelector('div#header_search_box > input').value.length > 0)
            document.location = 'https://www.wedgewoodweddings.com/hs-search-results?term='+document.querySelector('div#header_search_box > input').value;
        });
        //
        document.querySelector('div#header_search_box').addEventListener("keyup", function(event) {
          event.preventDefault();
          if (event.keyCode === 13) {
            if(document.querySelector('div#header_search_box > input').value.length > 0)
              document.location = 'https://www.wedgewoodweddings.com/hs-search-results?term='+document.querySelector('div#header_search_box > input').value;
          }
        });
        //
		setTimeout(function() {
			document.body.addEventListener('click', header_search_box_event, false);
			document.body.addEventListener('focusout', header_search_box_event, false);
    	}, 100);
	});

	// Search, Click-to-Call, CTA Spacing
	// document.querySelector('div#header_logo').offsetHeight
	document.querySelector('div#header_search').style.marginTop = (document.querySelector('div#header_logo').offsetHeight - document.querySelector('div#header_search').offsetHeight-6)/2+'px'
	document.querySelector('div#header_phone').style.marginTop = (document.querySelector('div#header_logo').offsetHeight - document.querySelector('div#header_phone').offsetHeight-6)/2+'px'
	document.querySelector('div#header_cta').style.marginTop = (document.querySelector('div#header_logo').offsetHeight - document.querySelector('div#header_cta').offsetHeight-6)/2+3+'px'

	// Desktop Menu Spacing
	if(window.innerWidth >= 1040) {
		document.querySelector('div#header_desktop_menu').style.marginTop = (document.querySelector('div#header_logo').offsetHeight - document.querySelector('div#header_desktop_menu').offsetHeight-6)/2+6+'px'
		var INTDesktopMenuWidth  = document.querySelector('div#header_desktop_menu').offsetWidth;
		var INTAvailableSpace    = (window.innerWidth - document.querySelector('div#header_logo').offsetWidth - document.querySelector('div#header_search').offsetWidth - document.querySelector('div#header_phone').offsetWidth - document.querySelector('div#header_cta').offsetWidth - INTDesktopMenuWidth - 0.1*window.innerWidth);
		var INTDesktopMenuItems  = document.querySelectorAll('div#header_desktop_menu > span > div > ul > li');
		var INTDesktopMenuMargin = INTAvailableSpace/INTDesktopMenuItems.length;
		if(INTDesktopMenuMargin > 50) INTDesktopMenuMargin = 50;
		if(INTDesktopMenuMargin < 10) INTDesktopMenuMargin = 10;
		for(n=0, m=INTDesktopMenuItems.length; n<m; n++) {
			INTDesktopMenuItems[n].style.marginLeft  = Math.round(INTDesktopMenuMargin/2)+'px';
			INTDesktopMenuItems[n].style.marginRight = Math.round(INTDesktopMenuMargin/2)+'px';
		}			
	} else {
		// Hamburger Menu Switch
		document.querySelector('div#header_hamburger_menu > i:nth-child(1)').addEventListener('click', function() { hamburger_menu_show(); });    		
		document.querySelector('div#header_hamburger_menu > i:nth-child(2)').addEventListener('click', function() { hamburger_menu_hide(); });		
		// Hamburger Menu Icon Spacing
		document.querySelector('div#header_hamburger_menu').style.marginTop = (document.querySelector('div#header_logo').offsetHeight - document.querySelector('div#header_hamburger_menu').offsetHeight-6)/2+'px';
	}
	//
	var INTInterval1 = window.setInterval(function() {
		if(document.querySelector('body > div.body-container-wrapper')) {
			document.querySelector('body > div.body-container-wrapper').style.marginTop = document.querySelector('div#header').offsetHeight+'px';
			clearInterval(INTInterval1);
		}
	}, 100);		
	//
	function inactivity_tracker() {
		var inactivity_timeout;

	    window.onload       = reset_tracker;
	    window.onmousemove  = reset_tracker;
	    window.onmousedown  = reset_tracker;
	    window.ontouchstart = reset_tracker;
	    window.onclick      = reset_tracker;
	    window.onkeypress   = reset_tracker;   
	    window.addEventListener('scroll', reset_tracker, true);

	    function reset_tracker() {
	        clearTimeout(inactivity_timeout);
          popup1_interval = 24*60;
	        inactivity_timeout = setTimeout(popup1_show, popup1_timeout);
	    }		    
	}
	//
	// <Exit Intent Pop-up Init>
	inactivity_tracker();
	setTimeout(function() {
		document.addEventListener("mouseleave", function(event) {
			if(event.clientY <= 0) {
        popup1_interval = 5;
				popup1_show();
			}
		});
	}, 30000);

	// INTWindowActive
	window.onfocus = function () { INTWindowActive = true; }; 
	window.onblur  = function () { INTWindowActive = false; }; 	
	// </Exit Intent Pop-up Init>
	
	//
})();