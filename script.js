var pop;
var freddy;
var haloAmb = new Audio('/audio/Unforgotten.mp3');
var minecraftAmb = new Audio('/audio/WetHands.mp3');
var oldKirbyAmb = new Audio('/audio/RainbowResort.mp3');
var epicAmb = new Audio('/audio/four-brave-champions.mp3');
var depressionAmb = new Audio('/audio/BlackWhite-Emotion.mp3');
var segaSfx = new Audio('/audio/SEGA.mp3');
var doom = new Audio('/audio/Doom.mp3');

function setup() {
	pop = new Audio('ba-ding.ogg');
  chatbot.replyDelay = 500;
  chatbot.getDB('https://docs.google.com/spreadsheets/d/e/2PACX-1vTX1G1C80I1MufDWH56dTMKTyFQ8ppt71byi-jwIa_RKB-_581TU9GLPDF2gnWlvJ_m3K5wSQGlOxUl/pub?output=csv').then(data => {
  chatbot.getDB('https://docs.google.com/spreadsheets/d/e/2PACX-1vT1rV047D63aETXB1FATtD683VNLGaV8biIsrHeFdDUkaD_bO-qaK6eKbni-VkPz74hxplT0AusDhEC/pub?output=csv').then(data => chatbot.db2 = data); 
  chatbot.db = data;
    chatbot.loadFiles(['bot.rive', 'bot-topic-1.rive', 'bot-topic-2.rive', 'bot-topic-3.rive']);  
  });
}	
window.onload = setup;




function closeTab() {
	setTimeout(function() {
		window.close()
	}, 2000);
  }

  function rickroll(url) {
	var win = window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
	win.focus();
  return "  "
  }

  function freddy() {
	setTimeout(function() {
	var freddyaud = new Audio('freddy.wav');
	freddyaud.play();
	}, 2000);
	setTimeout(function() {
		var win = window.open('https://media.tenor.com/ZO1_WS7f-4YAAAAC/fnaf-freddy.gif', '_blank');
		var jumpaud = new Audio('jump.mp3');
	jumpaud.play();
	}, 36100);
  return "  "
  }

async function getIPAddress() {
const response = await fetch('https://api.ipify.org?format=json');
const data = await response.json();
return data.ip;
  }
  
	
  function haloAmbience() {
    if (minecraftAmb.play(), epicAmb.play(), oldKirbyAmb.play(), epicAmb.play(),  depressionAmb.play()) {
      minecraftAmb.pause();
      oldKirbyAmb.pause();
      epicAmb.pause();
      depressionAmb.pause();
  haloAmb.play();
  haloAmb.loop=true;
  return "[Now Playing]"
  }
}

  function minecraftAmbience(){
    if (haloAmb.play(), epicAmb.play(), oldKirbyAmb.play(), epicAmb.play(),  depressionAmb.play()) {
      haloAmb.pause();
      oldKirbyAmb.pause();
      epicAmb.pause();
      depressionAmb.pause();
	minecraftAmb.play();
  minecraftAmb.loop=true;
  return "[Now Playing]"
  }
  }

  function oldKirbyAmbience(){
    if (haloAmb.play(), epicAmb.play(), minecraftAmb.play(), epicAmb.play(),  depressionAmb.play()) {
      haloAmb.pause();
      minecraftAmb.pause();
      epicAmb.pause();
      depressionAmb.pause();
	oldKirbyAmb.play(); 
  oldKirbyAmb.loop=true;
  return "[Now Playing]"
  }
  }

  function epicAmbience(){
    if (minecraftAmb.play(), haloAmb.play(), oldKirbyAmb.play(), epicAmb.play(),  depressionAmb.play()) {
      minecraftAmb.pause();
      oldKirbyAmb.pause();
      haloAmb.pause();
      depressionAmb.pause();
    epicAmb.play();
    epicAmb.loop=true;
    return "[Now Playing]"
  }
}

  function depressionAmbience(){
    if (minecraftAmb.play(), epicAmb.play(), oldKirbyAmb.play(), epicAmb.play(),  haloAmb.play()) {
      minecraftAmb.pause();
      oldKirbyAmb.pause();
      epicAmb.pause();
      haloAmb.pause();
    depressionAmb.play();
    depressionAmb.loop=true;
    return "[Now (sadly) Playing]"
  }
}


  function pauseAudio() {
  haloAmb.pause();
	minecraftAmb.pause();
	oldKirbyAmb.pause();
  epicAmb.pause();
  depressionAmb.pause();
  return "[Music Paused]"
  }


  function sourceData() {
    var win = window.open('https://gayme-jsondata.000webhostapp.com/data.json', '_blank');
    return "Redirecting..."
    }

    function segafx(){
      segaSfx.play();
      return "SEEEEGAAAA!"
    }

  function bossMusic(){
    doom.play();
    return "¯\_(ツ)_/¯"
  }

