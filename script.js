
let pageIndex = 0;


let videoGallery = [ 

  {videos: `<div class="grid">
        <div class="span-row-2"><iframe class="gallery-item" src="https://www.youtube.com/embed/hTdbgse6vmY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div><iframe class="gallery-item" src="https://www.youtube.com/embed/-xOZBDVtnQQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div class="span-row-2"><iframe class="gallery-item" src="https://www.youtube.com/embed/bda3CRfBco0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div class="span-row-3"><iframe class="gallery-item" src="https://www.youtube.com/embed/nz5hqRFiC5g" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div><iframe class="gallery-item" src="https://www.youtube.com/embed/VM38MhKMsow" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div>I<iframe class="gallery-item" src="https://giphy.com/embed/Yn5kbYq4OHxEHH3uJc" frameborder="0"  allowfullscreen></iframe></div>
        <div><iframe class="gallery-item" src="https://giphy.com/embed/Yn5kbYq4OHxEHH3uJc" frameborder="0"  allowfullscreen></iframe></div>
        <div class="span-row-2"><iframe class="gallery-item" src="https://www.youtube.com/embed/LDAedz0R7LU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div class="span-row-2"><iframe class="gallery-item" src="https://www.youtube.com/embed/cvu15plmGMc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div><iframe class="gallery-item" src="https://www.youtube.com/embed/Ysv0ViDSQlA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div><iframe class="gallery-item" src="https://www.youtube.com/embed/jSAyuoAtBcQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div class="span-row-2"><iframe class="gallery-item" src="https://www.youtube.com/embed/b6cejUHWZqM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div><iframe class="gallery-item" src="https://www.youtube.com/embed/UstpqZe24Rg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div><iframe class="gallery-item" src="https://giphy.com/embed/Yn5kbYq4OHxEHH3uJc" frameborder="0" allowfullscreen></iframe></div>}`,
				
		color: '#51ff0d'
	},
				
	{ videos: `</div>
      <div class="grid">
        <div class="span-row-2"><iframe class="gallery-item" src="https://www.youtube.com/embed/nRBB65H6Tr0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div><iframe class="gallery-item" src="https://www.youtube.com/embed/P-ZE_xHCtIQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div class="span-row-2"><iframe class="gallery-item" src="https://www.youtube.com/embed/G34hxH_Viyg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div class="span-row-3"><iframe class="gallery-item" src="https://www.youtube.com/embed/WAdnLJYfXbs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div><iframe class="gallery-item" src="https://www.youtube.com/embed/S3wMe3Idmd4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div>I<iframe class="gallery-item" src="https://giphy.com/embed/Yn5kbYq4OHxEHH3uJc" frameborder="0"  allowfullscreen></iframe></div>
        <div><iframe class="gallery-item" src="https://giphy.com/embed/Yn5kbYq4OHxEHH3uJc" frameborder="0"  allowfullscreen></iframe></div>
        <div class="span-row-2"><iframe class="gallery-item" src="https://www.youtube.com/embed/YOTzah0tBjI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div class="span-row-2"><iframe class="gallery-item" src="https://www.youtube.com/embed/U7NK1i-cxtg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div><iframe class="gallery-item" src="https://www.youtube.com/embed/mBvKv-D-w9w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div><iframe class="gallery-item" src="https://www.youtube.com/embed/SDbBztfFhbA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div class="span-row-2"><iframe class="gallery-item" src="https://www.youtube.com/embed/csBKqyfEr5Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div><iframe class="gallery-item" src="https://www.youtube.com/embed/QDQTqrC9wBQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div><iframe class="gallery-item" src="https://giphy.com/embed/Yn5kbYq4OHxEHH3uJc" frameborder="0"  allowfullscreen></iframe></div>
        
				</div>`,
		
		color: '#ffe700'
	},
	{videos: `</div>
      <div class="grid">
        <div class="span-row-2"><iframe class="gallery-item" src="https://www.youtube.com/embed/zUv2KO3X598" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div><iframe class="gallery-item" src="https://www.youtube.com/embed/eBgSgnUm7e4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div class="span-row-2"><iframe class="gallery-item" src="https://www.youtube.com/embed/jHpHyeFUXqo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div class="span-row-3"><iframe class="gallery-item" src="https://www.youtube.com/embed/oFB6OGofpFk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div><iframe class="gallery-item" src="https://www.youtube.com/embed/bJDyCxVbod4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div>I<iframe class="gallery-item" src="https://giphy.com/embed/Yn5kbYq4OHxEHH3uJc" frameborder="0"  allowfullscreen></iframe></div>
        <div><iframe class="gallery-item" src="https://giphy.com/embed/Yn5kbYq4OHxEHH3uJc" frameborder="0"  allowfullscreen></iframe></div>
        <div class="span-row-2"><iframe class="gallery-item" src="https://www.youtube.com/embed/lsnr5q1_TbU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div class="span-row-2"><iframe class="gallery-item" src="https://www.youtube.com/embed/CCNBuH_OL9o"  frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div><iframe class="gallery-item" src="https://www.youtube.com/embed/OAtzto2ARM0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div><iframe class="gallery-item" src="https://www.youtube.com/embed/kA8YmxLWkQk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div class="span-row-2"><iframe class="gallery-item" src="https://www.youtube.com/embed/9yhKfmHB1rY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div><iframe class="gallery-item" src="https://www.youtube.com/embed/f2AkoOzEG6E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div><iframe class="gallery-item" src="https://giphy.com/embed/Yn5kbYq4OHxEHH3uJc" frameborder="0"  allowfullscreen></iframe></div>
        
				</div>`,
				
		color: '#ff0000'
	
	},
	{videos:`<div class="grid">
        <div class="span-row-2"><iframe class="gallery-item" src="https://www.youtube.com/embed/mK7qUClyq-U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div><iframe class="gallery-item" src="https://www.youtube.com/embed/u7_8gYqYeYU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div class="span-row-2"><iframe class="gallery-item" src="https://www.youtube.com/embed/aWur1Z0Wpc8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div class="span-row-3"><iframe class="gallery-item" src="https://www.youtube.com/embed/5QlRKqJ-Bkc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div><iframe class="gallery-item" src="https://www.youtube.com/embed/CcMbewvMYkQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div>I<iframe class="gallery-item" src="https://giphy.com/embed/Yn5kbYq4OHxEHH3uJc" frameborder="0" allowfullscreen></iframe></div>
        <div><iframe class="gallery-item" src="https://giphy.com/embed/Yn5kbYq4OHxEHH3uJc" frameborder="0"  allowfullscreen></iframe></div>
        <div class="span-row-2"><iframe class="gallery-item" src="https://www.youtube.com/embed/7NWQK03X4e4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div class="span-row-2"><iframe class="gallery-item" src="https://www.youtube.com/embed/X9L5UKl4B4M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div><iframe class="gallery-item" src="https://www.youtube.com/embed/kOQsdYyW3OA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div><iframe class="gallery-item" src="https://www.youtube.com/embed/2NWHArJavOc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div class="span-row-2"><iframe class="gallery-item" src="https://www.youtube.com/embed/F2vuiNpA6qg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div><iframe class="gallery-item" src="https://www.youtube.com/embed/xMlgTjoTuOI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div><iframe class="gallery-item" src="https://giphy.com/embed/Yn5kbYq4OHxEHH3uJc" frameborder="0" allowfullscreen></iframe></div>
        
				</div>`,
		
	 color: '#9D00FF'
	
	},
	{videos:`<div class="grid">
        <div class="span-row-2"><iframe class="gallery-item" src="https://www.youtube.com/embed/MO-dU4JaVyo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div><iframe class="gallery-item" src="https://www.youtube.com/embed/JzXia1pXwPk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div class="span-row-2"><iframe class="gallery-item" src="https://www.youtube.com/embed/jGlvROBYdlI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div class="span-row-3"><iframe class="gallery-item" src="https://www.youtube.com/embed/HL6rYIY21Mo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div><iframe class="gallery-item" src="https://www.youtube.com/embed/0oGH0IgF7FY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div>I<iframe class="gallery-item" src="https://giphy.com/embed/Yn5kbYq4OHxEHH3uJc" frameborder="0" allowfullscreen></iframe></div>
        <div><iframe class="gallery-item" src="https://giphy.com/embed/Yn5kbYq4OHxEHH3uJc" frameborder="0"  allowfullscreen></iframe></div>
        <div class="span-row-2"><iframe class="gallery-item" src="https://www.youtube.com/embed/JF6K9KmbDYU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div class="span-row-2"><iframe class="gallery-item" src="https://www.youtube.com/embed/mDkhSFLfpsE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div><iframe class="gallery-item" src="https://www.youtube.com/embed/FF6uQazy9ok" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div><iframe class="gallery-item" src="https://www.youtube.com/embed/ZKJx1n0l8cE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div class="span-row-2"><iframe class="gallery-item" src="https://www.youtube.com/embed/TwAyaWBslPo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div><iframe class="gallery-item" src="https://www.youtube.com/embed/gVdNHF-1gNc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div><iframe class="gallery-item" src="https://giphy.com/embed/Yn5kbYq4OHxEHH3uJc" frameborder="0"  allowfullscreen></iframe></div>
        
				</div>`,
		
		color: '#ff6600'
	
	},
	{videos:`<div class="grid">
        <div class="span-row-2"><iframe class="gallery-item" src="https://www.youtube.com/embed/oRNBXtriQ_I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div><iframe class="gallery-item" src="https://www.youtube.com/embed/xmqSJ5someY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div class="span-row-2"><iframe class="gallery-item" src="https://www.youtube.com/embed/4KK2U8jTF6o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div class="span-row-3"><iframe class="gallery-item" src="https://www.youtube.com/embed/YtL9zadI0d8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div><iframe class="gallery-item" src="https://www.youtube.com/embed/JoFjTzJNJM4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div>I<iframe class="gallery-item" src="https://giphy.com/embed/Yn5kbYq4OHxEHH3uJc" frameborder="0"  allowfullscreen></iframe></div>
        <div><iframe class="gallery-item" src="https://giphy.com/embed/Yn5kbYq4OHxEHH3uJc" frameborder="0"  allowfullscreen></iframe></div>
        <div class="span-row-2"><iframe class="gallery-item" src="https://www.youtube.com/embed/jV_BAzIb9LI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div class="span-row-2"><iframe class="gallery-item" src="https://www.youtube.com/embed/O__GKtlGazU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div><iframe class="gallery-item" src="https://www.youtube.com/embed/p4HvCEgAz2M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div><iframe class="gallery-item" src="https://www.youtube.com/embed/Hb3r0MWSdo4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div class="span-row-2"><iframe class="gallery-item" src="https://www.youtube.com/embed/Huq-KtStc5I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div><iframe class="gallery-item" src="https://www.youtube.com/embed/jZPMOZH5ibc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div><iframe class="gallery-item" src="https://giphy.com/embed/Yn5kbYq4OHxEHH3uJc" frameborder="0"  allowfullscreen></iframe></div>
        
				</div>`,
		
		color: '#4deeaa'
	
	},
	{videos:`<div class="grid">
        <div class="span-row-2"><iframe class="gallery-item" src="https://www.youtube.com/embed/Axj8M3gZCVo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div><iframe class="gallery-item" src="https://www.youtube.com/embed/jI_UJyPqx38" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div class="span-row-2"><iframe class="gallery-item" src="https://www.youtube.com/embed/TusU1PbJXLQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div class="span-row-3"><iframe class="gallery-item" src="https://www.youtube.com/embed/AG-ijqm_GyI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div><iframe class="gallery-item" src="https://www.youtube.com/embed/pdRXp61TiCc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div>I<iframe class="gallery-item" src="https://giphy.com/embed/Yn5kbYq4OHxEHH3uJc" frameborder="0" allowfullscreen></iframe></div>
        <div><iframe class="gallery-item" src="https://giphy.com/embed/Yn5kbYq4OHxEHH3uJc" frameborder="0" allowfullscreen></iframe></div>
        <div class="span-row-2"><iframe class="gallery-item" src="https://www.youtube.com/embed/FINQ84FabeM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div class="span-row-2"><iframe class="gallery-item" src="https://www.youtube.com/embed/z6C4NkI-JMA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div><iframe class="gallery-item" src="https://www.youtube.com/embed/uxfLkNZaUlQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div><iframe class="gallery-item" src="https://www.youtube.com/embed/TOM8bZZq09Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div class="span-row-2"><iframe class="gallery-item" src="https://www.youtube.com/embed/INszHVgL1KY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div><iframe class="gallery-item" src="https://www.youtube.com/embed/4dNBsid6MX0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div><iframe class="gallery-item" src="https://giphy.com/embed/Yn5kbYq4OHxEHH3uJc" frameborder="0" allowfullscreen></iframe></div>
        
				</div>`,
		
		color: '#fec763'
	
	},
	
				
				];




const gallery = document.querySelector(".video-container");
const next = document.getElementById("nextbutton");
const prev = document.getElementById("prevbutton");

next.addEventListener("click", (event) => {
	pageIndex += 1;
	
	if (pageIndex < videoGallery.length) //videos.length
	{
		gallery.innerHTML = '';
		gallery.innerHTML = videoGallery[pageIndex].videos;
		document.body.style.backgroundColor = videoGallery[pageIndex].color;
		
	

	}
	
	else {
		pageIndex = 0;
		gallery.innerHTML = '';
		gallery.innerHTML = videoGallery[pageIndex].videos;
		document.body.style.backgroundColor = videoGallery[pageIndex].color;
	}
	
	
});

prev.addEventListener("click", (event) => {
	
	pageIndex -= 1;
	if (pageIndex > 0) //videos.length
	{
		
		gallery.innerHTML = '';
		gallery.innerHTML = videoGallery[pageIndex].videos;
		
		document.body.style.backgroundColor = videoGallery[pageIndex].color;
		
	}
	
	else {
		
		pageIndex = (videoGallery.length - 1);
		gallery.innerHTML = '';
		gallery.innerHTML = videoGallery[pageIndex].videos;
		document.body.style.backgroundColor = videoGallery[pageIndex].color;
	}
	
	
	
});



function invert() { 
    var css = 'html {-webkit-filter: invert(100%);' + '-moz-filter: invert(100%);' + '-o-filter: invert(100%);' + '-ms-filter: invert(100%); }';
    var head = document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    if (!window.counter) { 
        window.counter = 1;
    } else { 
        window.counter++;
        if (window.counter % 2 == 0) { 
            var css = 'html {-webkit-filter: invert(0%); -moz-filter: invert(0%); -o-filter: invert(0%); -ms-filter: invert(0%); }'
        } 
    }
    style.type = 'text/css';
    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
    head.appendChild(style);
	};
	
	//set timeout 
	
	
	function newTimer(aFunction) {
  
	

	intervId = setInterval(aFunction, 6000);
}


function blink() {
	invert();
  myVar = setTimeout(invert, 200);
}


function blinkTimer(invert) {
  intervId = setInterval(invert, 300);
	
}


function longBlink(invert) {
  invert();
  myVar = setTimeout(invert, 300);
	
}

newTimer(blink);

