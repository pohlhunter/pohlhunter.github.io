window.onload = function () {
  const phraseLIST = [
    "elephant in the room", // 5 june
    "what in the world", // 6 june
    "wait that's my car", // 7 june
    "down for the count", // 8 june
    "pb and j sandwich", // 9 june
    "soccer is so boring", // 10 june
    "down to the wire", // 11 june
    "you're on the ropes", // 12 june
    "right off the bat", // 13 june
    "let's have a bbq", // 14 june
    "keep your eyes open", // 15 june
    "bite at the cherry", // 16 june
    "big bowl of cereal", // 17 june
    "no do not do that", // 18 june
    "go out on a limb", // 19 june
    "quick on the draw", // 20 june
    "swing for the fences", // 21 june
    "dropping like flies", // 22 june
    "give a man a fish", // 23 june
    "the yard is one acre", // 24 june
    "let's break the ice", // 25 june
    "i'm better than you", // 26 june
    "big red clown shoes", // 27 june
    "left high and dry", // 28 june
    "drink more water", // 29 june
    "why are you here", // 30 june
        
    "fire burnt me bad", // 1 july
    "we must win now", // 2 july
    "opening the door", // 3 july
    "skating is so fun", // 4 july
    "i love my friends", // 5 july
    "shirt has a stain", // 6 july
    "i never work alone", // 7 july
    "any day will do now", // 8 july
    "could change my life", // 9 july
    "bad smelly cheese", // 10 july
    "okay that will do", // 11 july
    "please get serious", // 12 july
    "i forgot my laundry", // 13 july
    "cream in my coffee", // 14 july
    "was a close call", // 15 july
    "like to play sports", // 16 july
    "who let the dogs out", // 17 july
    "fish out of water", //18 july
    "out in the road", // 19 july
    "how are you doing", // 20 july
    "wild goose chase", // 21 july
    "it smells like poop", // 22 july
    
    "life goes up & down", // 23 july
    "it's do or die now", // 24 july
    "stinky old sock", // 25 july
    "when is it due", // 26 july
    "not the front side", // 27 july
    "cold pillow side", // 28 july
    "it's too hot for me", // 29 july
    "a very weird toe", // 30 july
    "is it inside out", // 31 july
    
    "it smells like feet", // 1 august
    "i lost my keys", // 2 august
    "a difficult quiz", // 3 august
    "glued it on good", // 4 august
    "no thank you sir", // 5 august
    "the way i like it", // 6 august
    "the dress won't fit", // 7 august
    "repeating myself", // 8 august
    "raining cats & dogs", // 9 august
    "holding onto you", // 10 august
    "flying a kite alone", // 11 august
    "quickly get in now", // 12 august
    "get the wood sled", // 13 august
    
    "five dollar bill", // 14 august
    "old mining town", // 15 august
    "get me the shovel", // 16 august
    "actually not true", // 17 august
    "my battery is dead", // 18 august
    "sounds fine to me", // 19 august
    "new season is out", // 20 august
    "a red background", // 21 august
    "i am not ready", // 22 august
    "are you stupid", // 23 august
    "moved into a house", // 24 august
    "empty bank vault", // 25 august
    "holy smokes dude", // 26 august
    "can't afford that", // 27 august
    "get me my phone", // 28 august
    "i need a towel now", // 29 august
    "full trophy room", // 30 august
    "really like to go", // 31 august
                        //
    "you hear the echo", // 1 sept
    "music is on repeat", // 2 sept
    "i woke up so late", // 3 sept
    "leaking all over", // 4 sept
    "the zoo was busy", // 5 sept
    "faking injuries", // 6 sept
    "thank you for that", // 7 sept
    "let me move in", // 8 sept
    "turn that down", // 9 sept
    "no way that works", // 10 sept
    
    "party all day long", // 11 sept
    "hi where you from", // 12 sept
    "just vibing here", // 13 sept
    "i'm getting wrecked", // 14 sept
    "she said no and yes", // 15 sept
    "no fun allowed now", // 16 sept
    "what are the rules", // 17 sept
    "the good old days", // 18 sept
    "i was stressed a lot", // 19 sept
    "flying far away", // 20 sept
    
    "wait not that bad", // 21 sept
    "let's head out now", // 22 sept
    "restart the computer", // 23 sept
    "and then what dude", // 24 sept
    "rare elements here", // 25 sept
    "keep an eye out", // 26 sept
    "just waiting here", // 27 sept
    "last stop right now", // 28 sept
    "it's for the crowds", // 29 sept
    "just quit right now", // 30 sept
    
    "it's so boring", // 1 oct
    "what's the problem", // 2 oct
    "batman & superman", // 3 oct
    "i'm in limbo now", // 4 oct
    "what about this", // 5 oct
    "can i get milk", // 6 oct
    "so true though", // 7 oct
    "at a crossroad", // 8 oct
    "a regular flight", // 9 oct
    "all about us now", // 10 oct
    
    "got out voted", // 11 oct
    "it's so slow now", // 12 oct
    "they go crazy", // 13 oct
    "don't share this", // 14 oct
    "nobody can hear", // 15 oct
    "who's on the phone", // 16 oct
    "this or that", // 17 oct
    "you can't play", // 18 oct
    "i don't know", // 19 oct
    "that's about right", // 20 oct
    
    "all in your head", // 21 oct
    "cannot do that now", // 22 oct
    "is it better yet", // 23 oct
    "home from school", // 24 oct
    "very sweet dude", // 25 oct
    "getting chased now", // 26 oct
    "in thirty minutes", // 27 oct
    "you're so friendly", // 28 oct
    "this game is boring", // 29 oct
    "gambling addicts", // 30 oct
    "it's really bad", // 31 oct
    
    
    "how about this", // 1 nov
    "please let me in", // 2 nov
    "there's no shame", // 3 nov
    "i changed my mind", // 4 nov
    "whatever it takes", // 5 nov
    "what is this", // 6 nov
    "time is all up", // 7 nov
    "look at the car", // 8 nov
    "it'll be over soon", // 9 nov
    "that doesn't work", // 10 nov
    
    "it's time to go", // 11 nov
    "nice of you to ask", // 12 nov
    "how about this", // 13 nov
    "cleaning your teeth", // 14 nov
    "nothing to do now", // 15 nov
    "how much money", // 16 nov
    "thanks for watching", // 17 nov
    "after taco bell", // 18 nov
    "insane moments", // 19 nov
    "stubborn as a mule", // 20 nov
    
    "surrender it all", // 21 nov
    "wave the white flag", // 22 nov
    "nothing to fear", // 23 nov
    "embracing the now", // 24 nov
    "first moon landing", // 25 nov
    "longest trip ever", // 26 nov
    "when it is over", // 27 nov
    "open the door now", // 28 nov
    "wasting the chance", // 29 nov
    "you are incredible", // 30 nov
    
    "hard math functions", // 1 dec
    "waste of time", // 2 dec
    "thanks for watching", // 3 dec
    "mute the video", // 4 dec
    "water pump station", // 5 dec
    "wait to retire", // 6 dec
    "turn down the radio", // 7 dec
    "stepping away now", // 8 dec
    "inside the house", // 9 dec
    "looking ahead to it", // 10 dec
    
    "messy winter time", // 11 dec
    "time me please", // 12 dec
    "first and ten", // 13 dec
    "add each together", // 14 dec
    "no more money", // 15 dec
    "need more help", // 16 dec
    "let's test it", // 17 dec
    "call your cousin", // 18 dec
    "honking the horn", // 19 dec
    "how in the world", // 20 dec
    
    "smells like beef", // 21 dec
    "puppy breath", // 22 dec
    "on the phone", // 23 dec
    "do things right", // 24 dec
    "someone wants to", // 25 dec
    "one more month", // 26 dec
    "nonstop clock", // 27 dec
    "open the door", // 28 dec
    "land value up", // 29 dec
    "now you know", // 30 dec
    "live to the max", // 31 dec
    
    
    
    "help me with it", // 1 jan
    "home cooked meal", // 2 jan
    "are you hungry", // 3 jan
    "i am scared", // 4 jan
    "small prop plane", // 5 jan
    "lost my car keys", // 6 jan
    "a good offer", // 7 jan
    "got this for you", // 8 jan
    "because of you", // 9 jan
    "told you i knew", // 10 jan
    
    "getting a call", // 11 jan
    "i'll be home soon", // 12 jan
    "sending you home", // 13 jan
    "can't trust you", // 14 jan
    "ripped blue jeans", // 15 jan
    "monopoly money", // 16 jan
    "house on a beach", // 17 jan
    "give you a choice", // 18 jan
    "trail goes cold", // 19 jan
    "they burned me", // 20 jan
    
    "easy does it now", // 21 jan
    "you know what man", // 22 jan
    "do i have to guess", // 23 jan
    "texting on phone", // 24 jan
    "now go back home", // 25 jan
    "whoever they are", // 26 jan
    "bottles clinking", // 27 jan
    "wolf among sheep", // 28 jan
    "lost headphones", // 29 jan
    "big water bottle", // 30 jan
    "start the movie", // 31 jan
    
    
    "shovel the snow", // 1 feb
    "yes i do actually", // 2 feb
    "writing a book", // 3 feb
    "shopping for you", // 4 feb
    "printing money", // 5 feb
    "shooting a blank", // 6 feb
    "i don't know now", // 7 feb
    "if you mess up", // 8 feb
    "i came in third", // 9 feb
    "that is spicy", // 10 feb
    
    "please stay away", // 11 feb
    "a rising star", // 12 feb
    "ouch that hurt", // 13 feb
    "under no pressure", // 14 feb
    "that is precious", // 15 feb
    "not going now", // 16 feb
    "two free shirts", // 17 feb
    "long guest list", // 18 feb
    "it looks faulty", // 19 feb
    "i'm rhyming a lot", // 20 feb
    
    "free backstage pass", // 21 feb
    "just want to rock", // 22 feb
    "school field trips", // 23 feb
    "hulu subscription", // 24 feb
    "burnt fried chicken", // 25 feb
    "tomorrow at two", // 26 feb
    "that's a good one", // 27 feb
    "okay no worries", // 28 feb
    
    
    "what's going on now", // 1 mar
    "i wasn't listening", // 2 mar
    "cross your fingers", // 3 mar
    "things can happen", // 4 mar
    "wait a minute now", // 5 mar
    "where were you tim", // 6 mar
    "good for my friend", // 7 mar
    "cheer me up please", // 8 mar
    "keep up the effort", // 9 mar
    "end of the world", // 10 mar
    
    "text you later okay", // 11 mar
    "you're so annoying", // 12 mar
    "go the extra mile", // 13 mar
    "found its way in", // 14 mar
    "means that it's bad", // 15 mar
    "inform your boss", // 16 mar
    "do not really care", // 17 mar
    "it's used at court", // 18 mar
    "is it that common", // 19 mar
    "it's extraordinary", // 20 mar
    
    "ordinary in a way", // 21 mar
    "you screwed it up", // 22 mar
    "bear any fruits", // 23 mar
    "confidence is key", // 24 mar
    "enticed & induced", // 25 mar
    "others do exist", // 26 mar
    "a restful weekend", // 27 mar
    "driving me nuts", // 28 mar
    "means what now", // 29 mar
    "colleague at work", // 30 mar
    "to let them know", // 31 mar
    
    "tiny white clouds", // 1 apr
    "wet slippery soap", // 2 apr
    "hot sizzling bacon", // 3 apr
    "slimy green snail", // 4 apr
    "ripe juicy apple", // 5 apr
    "gentle purring cat", // 6 apr
    "tall slender tree", // 7 apr
    "crispy and fresh", // 8 apr
    "soft cold pillow", // 9 apr
    "a big wildfire", // 10 apr
    
    "one crunchy leaf", // 11 apr
    "sharp & pointy", // 12 apr
    "cold clean water", // 13 apr
    "sleek shiny car", // 14 apr
    "fierce old lion", // 15 apr
    "two ripe pears", // 16 apr
    "warm morning sun", // 17 apr
    "laughing together", // 18 apr
    "cozy blanket fort", // 19 apr
    "whistle a tune", // 20 apr
    
    "garden in bloom", // 21 apr
    "fresh baked bread", // 22 apr
    "catching fireflies", // 23 apr
    "dance in the rain", // 24 apr
    "lights are bright", // 25 apr
    "sunset at a beach", // 26 apr
    "a friendly hug", // 27 apr
    "homemade lemonade", // 28 apr
    "finding a treasure", // 29 apr
    "songbirds in spring", // 30 apr
    
    
    
    "fumbling for words", // 1 may
    "couch potato life", // 2 may
    "bittersweet memory", // 3 may
    "jumping thru hoops", // 4 may
    "craving for pizza", // 5 may
    "shower singing", // 6 may
    "a cup of tea", // 7 may
    "pencil and paper", // 8 may
    "lost in translation", // 9 may
    "ripping papers", // 10 may
    
    "sunrise or sunset", // 11 may
    "friends or family", // 12 may
    "don't look back", // 13 may
    "road less traveled", // 14 may
    "chasing waterfalls", // 15 may
    "sweeter than honey", // 16 may
    "where the heart is", // 17 may
    "slow and steady", // 18 may
    "sun is bright", // 19 may
    "a pinch of salt", // 20 may
    
    "the early bird", // 21 may
    "on cloud nine", // 22 may
    "moment in time", // 23 may
    "walk on the moon", // 24 may
    "hit the road", // 25 may
    "walk in the park", // 26 may
    "color me surprised", // 27 may
    "silent as a grave", // 28 may
    "breath of fresh air", // 29 may
    "juggle priorities", // 30 may
    "dreams take flight", // 31 may
    
    
    
    "love at first sight", // 1 june
    "habits die hard", // 2 june
    "head in the clouds", // 3 june
    "over the moon", // 4 june
    "food for thought", // 5 june
    "bottle of lightning", // 6 june
    "racing the clock", // 7 june
    "a stained heart", // 8 june
    "hush of midnight", // 9 june
    "touch of luck", // 10 june
    
    "echoes of past", // 11 june
    "tales of twilight", // 12 june
    "autumn's breath", // 13 june
    "moonlight dance", // 14 june
    "silver linings", // 15 june
    "inner strength", // 16 june
    "beneath waves", // 17 june
    "hidden smiles", // 18 june
    "rising phoenix", // 19 june
    "small wonders", // 20 june
    
    "butterfly kisses", // 21 june
    "whispers in wind", // 22 june
    "crying in the rain", // 23 june
    "a glimmer of hope", // 24 june
    "tides of change", // 25 june
    "paint the sky", // 26 june
    "lost in thought", // 27 june
    "the morning dew", // 28 june
    "a dream chaser", // 29 june
    "the ocean secrets", // 30 june
    
    
    
    
    "road less taken", // 1 july
    "endless horizon", // 2 july
    "some summer fun", // 3 july
    "sky full of stars", // 4 july
    "picnic in the sun", // 5 july
    "beach walks await", // 6 july
    "music with friends", // 7 july
    "weekend at a park", // 8 july
    "on a bike ride", // 9 july
    "tasty bbq with pals", // 10 july
    
    "sunset watching", // 11 july
    "outdoor movie", // 12 july
    "camping in a tent", // 13 july
    "ice cream melted", // 14 july
    "road trip memories", // 15 july
    "flowers bloomings", // 16 july
    "the farmers market", // 17 july
    "relaxing by a pool", // 18 july
    "summer reading time", // 19 july
    "water balloon fight", // 20 july
    
    "a small fiesta", // 21 july
    "bike rides in town", // 22 july
    "board game nights", // 23 july
    "friends cooking", // 24 july
    "trying new recipes", // 25 july
    "i'm eating healthy", // 26 july
    "reading good books", // 27 july
    "learning to dance", // 28 july
    "movie marathons", // 29 july
    "exploring new job", // 30 july
    "visiting you soon" // 30 july

  ];

  var isMobile = false; //initiate as false
  // device detection
  if (
    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
      navigator.userAgent
    ) ||
    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
      navigator.userAgent.substr(0, 4)
    )
  ) {
    isMobile = true;
  }

  //count amount of days since 'day 0'
  var given = moment("2022-06-05, 12:00 AM", "YYYY-MM-DD, hh:mm a");
  var current = moment().startOf("day");

  //Difference in number of days
  var dayCount = Math.floor(moment.duration(current.diff(given)).asDays());

  //set the phrase of today based on list[x]
  var phrase = phraseLIST[dayCount];

  var todayLA = moment();

  document.querySelector(".popup").style.display = "block";
  document.querySelector(".wrapper").style.display = "none";


  var correctOfTotal;
  // timer
  var timer;
  var ele = document.getElementById("clock");

  var sec = 0;
  var min = 0;

  function clockTimer() {
    timer = setInterval(() => {
      ++sec;
      if (sec == 60) {
        ++min;
        sec = 0;
      }
      if (sec < 10) {
        clock.innerHTML = "&#9203; " + min + ":0" + sec;
      } else {
        clock.innerHTML = "&#9203; " + min + ":" + sec;
      }
      if (min > 99) {
        window.location.reload();
      }
    }, 1000); // each 1 second
  }

  document.querySelector("#close1").addEventListener("click", function () {
    document.querySelector(".popup").style.display = "none";
    document.querySelector(".wrapper").style.display = "initial";
    clockTimer();
  });
  document.querySelector("#close2").addEventListener("click", function () {
    document.querySelector(".popup").style.display = "none";
    document.querySelector(".wrapper").style.display = "initial";
    clockTimer();
  });
  document.querySelector("#close3").addEventListener("click", function () {
    document.querySelector(".popup").style.display = "none";
    document.querySelector(".wrapper").style.display = "initial";
    clockTimer();
  });

  function darkMode() {
    var element = document.body;
    element.className = "dark-mode";
  }

  function greyMode() {
    var element = document.body;
    element.className = "grey-mode";
  }

  function lightMode() {
    var element = document.body;
    element.className = "light-mode";
  }

  var guess; // Geuss
  var geusses = []; // Stored geusses
  var lives = 5; // Lives
  var counter; // Count correct geusses
  var space; // Number of spaces or dashes in phrase
  var playing = true;
  var letterCount = 0;

  // Get elements
  // let showLives = document.getElementById("mylives");
  let showAnswer = document.getElementById("correctAnswer");

  function unhide() {
    document.getElementById('pr-popupResult').classList.remove('pr-hidden');
    var hid = document.getElementsByClassName("theCopyButton");

    if (hid[0].offsetWidth > 0 && hid[0].offsetHeight > 0) {
      hid[0].style.visibility = "visible";
    }
    
    document.getElementById("val").style.visibility = "visible";
  } 


  function pauseL() {
    playing = false;
    clearInterval(timer);
    if (sec < 10) {
      clock.textContent = min + ":0" + sec + " 💔 " + correctOfTotal;
      clock.innerHTML = min + ":0" + sec + " &#128148; " + correctOfTotal;
      unhide();
    } else {
      clock.textContent = min + ":" + sec + " 💔 " + correctOfTotal;
      clock.innerHTML = min + ":" + sec + " &#128148; " + correctOfTotal;
      unhide();
    }
  }

  function pauseW() {
    playing = false;
    clearInterval(timer);
    if (sec < 10) {
      clock.textContent = min + ":0" + sec + " 🎉 Solved";
      clock.innerHTML = min + ":0" + sec + " &#127881; Solved";
      unhide();
    } else {
      clock.textContent = min + ":" + sec + " 🎉 Solved";
      clock.innerHTML = min + ":" + sec + " &#127881; Solved";
      unhide();
    }
  }

  var alphabet = [
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",

    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",

    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m"
  ];

  // create alphabet ul
  var buttons1 = function () {
    myButtons = document.getElementById("buttons1");
    letters = document.createElement("ul");

    letters.id = "alphabet";
    list = document.createElement("li");
    list.id = "letter0";
    list.innerHTML = alphabet[0];
    check();
    myButtons.appendChild(letters);
    letters.appendChild(list);

    letters.id = "alphabet";
    list = document.createElement("li");
    list.id = "letter1";
    list.innerHTML = alphabet[1];
    check();
    myButtons.appendChild(letters);
    letters.appendChild(list);

    letters.id = "alphabet";
    list = document.createElement("li");
    list.id = "letter2";
    list.innerHTML = alphabet[2];
    check();
    myButtons.appendChild(letters);
    letters.appendChild(list);

    letters.id = "alphabet";
    list = document.createElement("li");
    list.id = "letter3";
    list.innerHTML = alphabet[3];
    check();
    myButtons.appendChild(letters);
    letters.appendChild(list);

    letters.id = "alphabet";
    list = document.createElement("li");
    list.id = "letter4";
    list.innerHTML = alphabet[4];
    check();
    myButtons.appendChild(letters);
    letters.appendChild(list);

    letters.id = "alphabet";
    list = document.createElement("li");
    list.id = "letter5";
    list.innerHTML = alphabet[5];
    check();
    myButtons.appendChild(letters);
    letters.appendChild(list);

    letters.id = "alphabet";
    list = document.createElement("li");
    list.id = "letter6";
    list.innerHTML = alphabet[6];
    check();
    myButtons.appendChild(letters);
    letters.appendChild(list);

    letters.id = "alphabet";
    list = document.createElement("li");
    list.id = "letter7";
    list.innerHTML = alphabet[7];
    check();
    myButtons.appendChild(letters);
    letters.appendChild(list);

    letters.id = "alphabet";
    list = document.createElement("li");
    list.id = "letter8";
    list.innerHTML = alphabet[8];
    check();
    myButtons.appendChild(letters);
    letters.appendChild(list);

    letters.id = "alphabet";
    list = document.createElement("li");
    list.id = "letter9";
    list.innerHTML = alphabet[9];
    check();
    myButtons.appendChild(letters);
    letters.appendChild(list);
  };

  // create alphabet ul
  var buttons2 = function () {
    myButtons = document.getElementById("buttons2");
    letters = document.createElement("ul");

    letters.id = "alphabet";
    list = document.createElement("li");
    list.id = "letter10";
    list.innerHTML = alphabet[10];
    check();
    myButtons.appendChild(letters);
    letters.appendChild(list);

    letters.id = "alphabet";
    list = document.createElement("li");
    list.id = "letter11";
    list.innerHTML = alphabet[11];
    check();
    myButtons.appendChild(letters);
    letters.appendChild(list);

    letters.id = "alphabet";
    list = document.createElement("li");
    list.id = "letter12";
    list.innerHTML = alphabet[12];
    check();
    myButtons.appendChild(letters);
    letters.appendChild(list);

    letters.id = "alphabet";
    list = document.createElement("li");
    list.id = "letter13";
    list.innerHTML = alphabet[13];
    check();
    myButtons.appendChild(letters);
    letters.appendChild(list);

    letters.id = "alphabet";
    list = document.createElement("li");
    list.id = "letter14";
    list.innerHTML = alphabet[14];
    check();
    myButtons.appendChild(letters);
    letters.appendChild(list);

    letters.id = "alphabet";
    list = document.createElement("li");
    list.id = "letter15";
    list.innerHTML = alphabet[15];
    check();
    myButtons.appendChild(letters);
    letters.appendChild(list);

    letters.id = "alphabet";
    list = document.createElement("li");
    list.id = "letter16";
    list.innerHTML = alphabet[16];
    check();
    myButtons.appendChild(letters);
    letters.appendChild(list);

    letters.id = "alphabet";
    list = document.createElement("li");
    list.id = "letter17";
    list.innerHTML = alphabet[17];
    check();
    myButtons.appendChild(letters);
    letters.appendChild(list);

    letters.id = "alphabet";
    list = document.createElement("li");
    list.id = "letter18";
    list.innerHTML = alphabet[18];
    check();
    myButtons.appendChild(letters);
    letters.appendChild(list);
  };

  // create alphabet ul
  var buttons3 = function () {
    myButtons = document.getElementById("buttons3");
    letters = document.createElement("ul");

    letters.id = "alphabet";
    list = document.createElement("li");
    list.id = "letter19";
    list.innerHTML = alphabet[19];
    check();
    myButtons.appendChild(letters);
    letters.appendChild(list);

    letters.id = "alphabet";
    list = document.createElement("li");
    list.id = "letter20";
    list.innerHTML = alphabet[20];
    check();
    myButtons.appendChild(letters);
    letters.appendChild(list);

    letters.id = "alphabet";
    list = document.createElement("li");
    list.id = "letter21";
    list.innerHTML = alphabet[21];
    check();
    myButtons.appendChild(letters);
    letters.appendChild(list);

    letters.id = "alphabet";
    list = document.createElement("li");
    list.id = "letter22";
    list.innerHTML = alphabet[22];
    check();
    myButtons.appendChild(letters);
    letters.appendChild(list);

    letters.id = "alphabet";
    list = document.createElement("li");
    list.id = "letter23";
    list.innerHTML = alphabet[23];
    check();
    myButtons.appendChild(letters);
    letters.appendChild(list);

    letters.id = "alphabet";
    list = document.createElement("li");
    list.id = "letter24";
    list.innerHTML = alphabet[24];
    check();
    myButtons.appendChild(letters);
    letters.appendChild(list);

    letters.id = "alphabet";
    list = document.createElement("li");
    list.id = "letter25";
    list.innerHTML = alphabet[25];
    check();
    myButtons.appendChild(letters);
    letters.appendChild(list);
  };

  // Create geusses ul
  result = function () {
    phraseHolder = document.getElementById("hold");
    correct = document.createElement("ul");

    for (var i = 0; i < phrase.length; i++) {
      correct.setAttribute("id", "my-phrase");
      guess = document.createElement("li");
      guess.setAttribute("class", "guess");
      if (phrase[i] === "-") {
        guess.innerHTML = "-";
        space += 1;
      } else if (phrase[i] === " ") {
        guess.innerHTML = "&ensp;";
        space += 1;
      } else if (phrase[i] === "'") {
        guess.innerHTML = "'";
        space += 1;
      } else if (phrase[i] === "&") {
        guess.innerHTML = "&";
        space += 1;
      } else {
        guess.innerHTML = "_";
      }

      geusses.push(guess);
      phraseHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  };

  // Show lives
  comments = function () {
    if (playing == true) {
      //playing conditions 5,4,3,2,1 lives left
      if (lives == 5 && counter + space !== geusses.length) {
        mylives.textContent = "✅✅✅✅✅";
        mylives.innerHTML = "&#9989;&#9989;&#9989;&#9989;&#9989;";
      }
      if (lives == 4 && counter + space !== geusses.length) {
        mylives.textContent = "❌✅✅✅✅";
        mylives.innerHTML = "&#10060;&#9989;&#9989;&#9989;&#9989;";
      }
      if (lives == 3 && counter + space !== geusses.length) {
        mylives.textContent = "❌❌✅✅✅";
        mylives.innerHTML = "&#10060;&#10060;&#9989;&#9989;&#9989;";
      }
      if (lives == 2 && counter + space !== geusses.length) {
        mylives.textContent = "❌❌❌✅✅";
        mylives.innerHTML = "&#10060;&#10060;&#10060;&#9989;&#9989;";
      }
      if (lives == 1 && counter + space !== geusses.length) {
        mylives.textContent = "❌❌❌❌✅";
        mylives.innerHTML = "&#10060;&#10060;&#10060;&#10060;&#9989;";
      }

      //loss condition
      if (lives < 1) {
        for (var ix = 0; ix < phrase.length; ix++) {
          if (phrase[ix] !== " ") {
            letterCount++;
          }
        }

        mylives.textContent = "❌❌❌❌❌";
        mylives.innerHTML = "&#10060;&#10060;&#10060;&#10060;&#10060;";
        correctOfTotal = counter + "/" + letterCount;
        // const finalLives = document.getElementById("mylives").textContent;
        showAnswer.innerHTML = "Phrase was: " + "'" + phrase + "'";
        pauseL();
      }

      //win conditions
      for (var i = 0; i < geusses.length; i++) {
        if (counter + space === geusses.length && lives == 5) {
          mylives.textContent = "✅✅✅✅✅";
          mylives.innerHTML = "&#9989;&#9989;&#9989;&#9989;&#9989;";
          // const finalLives = document.getElementById("mylives").textContent;
          pauseW();
        }
        if (counter + space === geusses.length && lives == 4) {
          mylives.textContent = "❌✅✅✅✅";
          mylives.innerHTML = "&#10060;&#9989;&#9989;&#9989;&#9989;";
          // const finalLives = document.getElementById("mylives").textContent;
          pauseW();
        }
        if (counter + space === geusses.length && lives == 3) {
          mylives.textContent = "❌❌✅✅✅";
          mylives.innerHTML = "&#10060;&#10060;&#9989;&#9989;&#9989;";
          // const finalLives = document.getElementById("mylives").textContent;
          pauseW();
        }
        if (counter + space === geusses.length && lives == 2) {
          mylives.textContent = "❌❌❌✅✅";
          mylives.innerHTML = "&#10060;&#10060;&#10060;&#9989;&#9989;";
          // const finalLives = document.getElementById("mylives").textContent;
          pauseW();
        }
        if (counter + space === geusses.length && lives == 1) {
          mylives.textContent = "❌❌❌❌✅";
          mylives.innerHTML = "&#10060;&#10060;&#10060;&#10060;&#9989;";
          // const finalLives = document.getElementById("mylives").textContent;
          pauseW();
        }
      }
    }
  };

  let aUsed = false;
  let bUsed = false;
  let cUsed = false;
  let dUsed = false;
  let eUsed = false;
  let fUsed = false;
  let gUsed = false;
  let hUsed = false;
  let iUsed = false;
  let jUsed = false;
  let kUsed = false;
  let lUsed = false;
  let mUsed = false;
  let nUsed = false;
  let oUsed = false;
  let pUsed = false;
  let qUsed = false;
  let rUsed = false;
  let sUsed = false;
  let tUsed = false;
  let uUsed = false;
  let vUsed = false;
  let wUsed = false;
  let xUsed = false;
  let yUsed = false;
  let zUsed = false;

  // Keypressed Function
  document.addEventListener("keydown", getLetterPress);
  let keyPressed;
  let legitKey = false;

  function getLetterPress(e) {
    if (playing == true && lives > 0 && counter + space !== geusses.length) {
      switch (`${e.code}`) {
        case "KeyA":
          if (aUsed == false) {
            keyPressed = "a";
            legitKey = true;
            break;
          } else {
            break;
          }
        case "KeyB":
          if (bUsed == false) {
            keyPressed = "b";
            legitKey = true;
            break;
          } else {
            break;
          }
        case "KeyC":
          if (cUsed == false) {
            keyPressed = "c";
            legitKey = true;
            break;
          } else {
            break;
          }
        case "KeyD":
          if (dUsed == false) {
            keyPressed = "d";
            legitKey = true;
            break;
          } else {
            break;
          }
        case "KeyE":
          if (eUsed == false) {
            keyPressed = "e";
            legitKey = true;
            break;
          } else {
            break;
          }
        case "KeyF":
          if (fUsed == false) {
            keyPressed = "f";
            legitKey = true;
            break;
          } else {
            break;
          }
        case "KeyG":
          if (gUsed == false) {
            keyPressed = "g";
            legitKey = true;
            break;
          } else {
            break;
          }
        case "KeyH":
          if (hUsed == false) {
            keyPressed = "h";
            legitKey = true;
            break;
          } else {
            break;
          }
        case "KeyI":
          if (iUsed == false) {
            keyPressed = "i";
            legitKey = true;
            break;
          } else {
            break;
          }
        case "KeyJ":
          if (jUsed == false) {
            keyPressed = "j";
            legitKey = true;
            break;
          } else {
            break;
          }
        case "KeyK":
          if (kUsed == false) {
            keyPressed = "k";
            legitKey = true;
            break;
          } else {
            break;
          }
        case "KeyL":
          if (lUsed == false) {
            keyPressed = "l";
            legitKey = true;
            break;
          } else {
            break;
          }
        case "KeyM":
          if (mUsed == false) {
            keyPressed = "m";
            legitKey = true;
            break;
          } else {
            break;
          }
        case "KeyN":
          if (nUsed == false) {
            keyPressed = "n";
            legitKey = true;
            break;
          } else {
            break;
          }
        case "KeyO":
          if (oUsed == false) {
            keyPressed = "o";
            legitKey = true;
            break;
          } else {
            break;
          }
        case "KeyP":
          if (pUsed == false) {
            keyPressed = "p";
            legitKey = true;
            break;
          } else {
            break;
          }
        case "KeyQ":
          if (qUsed == false) {
            keyPressed = "q";
            legitKey = true;
            break;
          } else {
            break;
          }
        case "KeyR":
          if (rUsed == false) {
            keyPressed = "r";
            legitKey = true;
            break;
          } else {
            break;
          }
        case "KeyS":
          if (sUsed == false) {
            keyPressed = "s";
            legitKey = true;
            break;
          } else {
            break;
          }
        case "KeyT":
          if (tUsed == false) {
            keyPressed = "t";
            legitKey = true;
            break;
          } else {
            break;
          }
        case "KeyU":
          if (uUsed == false) {
            keyPressed = "u";
            legitKey = true;
            break;
          } else {
            break;
          }
        case "KeyV":
          if (vUsed == false) {
            keyPressed = "v";
            legitKey = true;
            break;
          } else {
            break;
          }
        case "KeyW":
          if (wUsed == false) {
            keyPressed = "w";
            legitKey = true;
            break;
          } else {
            break;
          }
        case "KeyX":
          if (xUsed == false) {
            keyPressed = "x";
            legitKey = true;
            break;
          } else {
            break;
          }
        case "KeyY":
          if (yUsed == false) {
            keyPressed = "y";
            legitKey = true;
            break;
          } else {
            break;
          }
        case "KeyZ":
          if (zUsed == false) {
            keyPressed = "z";
            legitKey = true;
            break;
          } else {
            break;
          }
        default:
          legitKey = false;
          break;
      }

      if (keyPressed == "q" && qUsed == false) {
        if (legitKey && lives > 0 && counter + space !== geusses.length) {
          letter0.setAttribute("class", "active");
          letter0.onclick = null;
          qUsed = true;
          // letterPressed.textContent = keyPressed;
          for (var i = 0; i < phrase.length; i++) {
            if (phrase[i] == keyPressed) {
              geusses[i].innerHTML = keyPressed;
              counter += 1;
            }
          }
        }
        var j = phrase.indexOf(keyPressed);
        if (j === -1 && lives > 0) {
          lives -= 1;
          comments();
        } else {
          comments();
        }
      }

      if (keyPressed == "w" && wUsed == false) {
        if (legitKey && lives > 0 && counter + space !== geusses.length) {
          letter1.setAttribute("class", "active");
          letter1.onclick = null;
          wUsed = true;
          // letterPressed.textContent = keyPressed;
          for (var i = 0; i < phrase.length; i++) {
            if (phrase[i] == keyPressed) {
              geusses[i].innerHTML = keyPressed;
              counter += 1;
            }
          }
        }
        var j = phrase.indexOf(keyPressed);
        if (j === -1 && lives > 0) {
          lives -= 1;
          comments();
        } else {
          comments();
        }
      }

      if (keyPressed == "e" && eUsed == false) {
        if (legitKey && lives > 0 && counter + space !== geusses.length) {
          letter2.setAttribute("class", "active");
          letter2.onclick = null;
          eUsed = true;
          // letterPressed.textContent = keyPressed;
          for (var i = 0; i < phrase.length; i++) {
            if (phrase[i] == keyPressed) {
              geusses[i].innerHTML = keyPressed;
              counter += 1;
            }
          }
        }
        var j = phrase.indexOf(keyPressed);
        if (j === -1 && lives > 0) {
          lives -= 1;
          comments();
        } else {
          comments();
        }
      }

      if (keyPressed == "r" && rUsed == false) {
        if (legitKey && lives > 0 && counter + space !== geusses.length) {
          letter3.setAttribute("class", "active");
          letter3.onclick = null;
          rUsed = true;
          // letterPressed.textContent = keyPressed;
          for (var i = 0; i < phrase.length; i++) {
            if (phrase[i] == keyPressed) {
              geusses[i].innerHTML = keyPressed;
              counter += 1;
            }
          }
        }
        var j = phrase.indexOf(keyPressed);
        if (j === -1 && lives > 0) {
          lives -= 1;
          comments();
        } else {
          comments();
        }
      }

      if (keyPressed == "t" && tUsed == false) {
        if (legitKey && lives > 0 && counter + space !== geusses.length) {
          letter4.setAttribute("class", "active");
          letter4.onclick = null;
          tUsed = true;
          // letterPressed.textContent = keyPressed;
          for (var i = 0; i < phrase.length; i++) {
            if (phrase[i] == keyPressed) {
              geusses[i].innerHTML = keyPressed;
              counter += 1;
            }
          }
        }
        var j = phrase.indexOf(keyPressed);
        if (j === -1 && lives > 0) {
          lives -= 1;
          comments();
        } else {
          comments();
        }
      }

      if (keyPressed == "y" && yUsed == false) {
        if (legitKey && lives > 0 && counter + space !== geusses.length) {
          letter5.setAttribute("class", "active");
          letter5.onclick = null;
          yUsed = true;
          // letterPressed.textContent = keyPressed;
          for (var i = 0; i < phrase.length; i++) {
            if (phrase[i] == keyPressed) {
              geusses[i].innerHTML = keyPressed;
              counter += 1;
            }
          }
        }
        var j = phrase.indexOf(keyPressed);
        if (j === -1 && lives > 0) {
          lives -= 1;
          comments();
        } else {
          comments();
        }
      }

      if (keyPressed == "u" && uUsed == false) {
        if (legitKey && lives > 0 && counter + space !== geusses.length) {
          letter6.setAttribute("class", "active");
          letter6.onclick = null;
          uUsed = true;
          // letterPressed.textContent = keyPressed;
          for (var i = 0; i < phrase.length; i++) {
            if (phrase[i] == keyPressed) {
              geusses[i].innerHTML = keyPressed;
              counter += 1;
            }
          }
        }
        var j = phrase.indexOf(keyPressed);
        if (j === -1 && lives > 0) {
          lives -= 1;
          comments();
        } else {
          comments();
        }
      }

      if (keyPressed == "i" && iUsed == false) {
        if (legitKey && lives > 0 && counter + space !== geusses.length) {
          letter7.setAttribute("class", "active");
          letter7.onclick = null;
          iUsed = true;
          // letterPressed.textContent = keyPressed;
          for (var i = 0; i < phrase.length; i++) {
            if (phrase[i] == keyPressed) {
              geusses[i].innerHTML = keyPressed;
              counter += 1;
            }
          }
        }
        var j = phrase.indexOf(keyPressed);
        if (j === -1 && lives > 0) {
          lives -= 1;
          comments();
        } else {
          comments();
        }
      }

      if (keyPressed == "o" && oUsed == false) {
        if (legitKey && lives > 0 && counter + space !== geusses.length) {
          letter8.setAttribute("class", "active");
          letter8.onclick = null;
          oUsed = true;
          // letterPressed.textContent = keyPressed;
          for (var i = 0; i < phrase.length; i++) {
            if (phrase[i] == keyPressed) {
              geusses[i].innerHTML = keyPressed;
              counter += 1;
            }
          }
        }
        var j = phrase.indexOf(keyPressed);
        if (j === -1 && lives > 0) {
          lives -= 1;
          comments();
        } else {
          comments();
        }
      }

      if (keyPressed == "p" && pUsed == false) {
        if (legitKey && lives > 0 && counter + space !== geusses.length) {
          letter9.setAttribute("class", "active");
          letter9.onclick = null;
          pUsed = true;
          // letterPressed.textContent = keyPressed;
          for (var i = 0; i < phrase.length; i++) {
            if (phrase[i] == keyPressed) {
              geusses[i].innerHTML = keyPressed;
              counter += 1;
            }
          }
        }
        var j = phrase.indexOf(keyPressed);
        if (j === -1 && lives > 0) {
          lives -= 1;
          comments();
        } else {
          comments();
        }
      }

      if (keyPressed == "a" && aUsed == false) {
        if (legitKey && lives > 0 && counter + space !== geusses.length) {
          letter10.setAttribute("class", "active");
          letter10.onclick = null;
          aUsed = true;
          // letterPressed.textContent = keyPressed;
          for (var i = 0; i < phrase.length; i++) {
            if (phrase[i] == keyPressed) {
              geusses[i].innerHTML = keyPressed;
              counter += 1;
            }
          }
        }
        var j = phrase.indexOf(keyPressed);
        if (j === -1 && lives > 0) {
          lives -= 1;
          comments();
        } else {
          comments();
        }
      }

      if (keyPressed == "s" && sUsed == false) {
        if (legitKey && lives > 0 && counter + space !== geusses.length) {
          letter11.setAttribute("class", "active");
          letter11.onclick = null;
          sUsed = true;
          // letterPressed.textContent = keyPressed;
          for (var i = 0; i < phrase.length; i++) {
            if (phrase[i] == keyPressed) {
              geusses[i].innerHTML = keyPressed;
              counter += 1;
            }
          }
        }
        var j = phrase.indexOf(keyPressed);
        if (j === -1 && lives > 0) {
          lives -= 1;
          comments();
        } else {
          comments();
        }
      }

      if (keyPressed == "d" && dUsed == false) {
        if (legitKey && lives > 0 && counter + space !== geusses.length) {
          letter12.setAttribute("class", "active");
          letter12.onclick = null;
          dUsed = true;
          // letterPressed.textContent = keyPressed;
          for (var i = 0; i < phrase.length; i++) {
            if (phrase[i] == keyPressed) {
              geusses[i].innerHTML = keyPressed;
              counter += 1;
            }
          }
        }
        var j = phrase.indexOf(keyPressed);
        if (j === -1 && lives > 0) {
          lives -= 1;
          comments();
        } else {
          comments();
        }
      }

      if (keyPressed == "f" && fUsed == false) {
        if (legitKey && lives > 0 && counter + space !== geusses.length) {
          letter13.setAttribute("class", "active");
          letter13.onclick = null;
          fUsed = true;
          // letterPressed.textContent = keyPressed;
          for (var i = 0; i < phrase.length; i++) {
            if (phrase[i] == keyPressed) {
              geusses[i].innerHTML = keyPressed;
              counter += 1;
            }
          }
        }
        var j = phrase.indexOf(keyPressed);
        if (j === -1 && lives > 0) {
          lives -= 1;
          comments();
        } else {
          comments();
        }
      }

      if (keyPressed == "g" && gUsed == false) {
        if (legitKey && lives > 0 && counter + space !== geusses.length) {
          letter14.setAttribute("class", "active");
          letter14.onclick = null;
          gUsed = true;
          // letterPressed.textContent = keyPressed;
          for (var i = 0; i < phrase.length; i++) {
            if (phrase[i] == keyPressed) {
              geusses[i].innerHTML = keyPressed;
              counter += 1;
            }
          }
        }
        var j = phrase.indexOf(keyPressed);
        if (j === -1 && lives > 0) {
          lives -= 1;
          comments();
        } else {
          comments();
        }
      }

      if (keyPressed == "h" && hUsed == false) {
        if (legitKey && lives > 0 && counter + space !== geusses.length) {
          letter15.setAttribute("class", "active");
          letter15.onclick = null;
          hUsed = true;
          // letterPressed.textContent = keyPressed;
          for (var i = 0; i < phrase.length; i++) {
            if (phrase[i] == keyPressed) {
              geusses[i].innerHTML = keyPressed;
              counter += 1;
            }
          }
        }
        var j = phrase.indexOf(keyPressed);
        if (j === -1 && lives > 0) {
          lives -= 1;
          comments();
        } else {
          comments();
        }
      }

      if (keyPressed == "j" && jUsed == false) {
        if (legitKey && lives > 0 && counter + space !== geusses.length) {
          letter16.setAttribute("class", "active");
          letter16.onclick = null;
          jUsed = true;
          // letterPressed.textContent = keyPressed;
          for (var i = 0; i < phrase.length; i++) {
            if (phrase[i] == keyPressed) {
              geusses[i].innerHTML = keyPressed;
              counter += 1;
            }
          }
        }
        var j = phrase.indexOf(keyPressed);
        if (j === -1 && lives > 0) {
          lives -= 1;
          comments();
        } else {
          comments();
        }
      }

      if (keyPressed == "k" && kUsed == false) {
        if (legitKey && lives > 0 && counter + space !== geusses.length) {
          letter17.setAttribute("class", "active");
          letter17.onclick = null;
          kUsed = true;
          // letterPressed.textContent = keyPressed;
          for (var i = 0; i < phrase.length; i++) {
            if (phrase[i] == keyPressed) {
              geusses[i].innerHTML = keyPressed;
              counter += 1;
            }
          }
        }
        var j = phrase.indexOf(keyPressed);
        if (j === -1 && lives > 0) {
          lives -= 1;
          comments();
        } else {
          comments();
        }
      }

      if (keyPressed == "l" && lUsed == false) {
        if (legitKey && lives > 0 && counter + space !== geusses.length) {
          letter18.setAttribute("class", "active");
          letter18.onclick = null;
          lUsed = true;
          // letterPressed.textContent = keyPressed;
          for (var i = 0; i < phrase.length; i++) {
            if (phrase[i] == keyPressed) {
              geusses[i].innerHTML = keyPressed;
              counter += 1;
            }
          }
        }
        var j = phrase.indexOf(keyPressed);
        if (j === -1 && lives > 0) {
          lives -= 1;
          comments();
        } else {
          comments();
        }
      }

      if (keyPressed == "z" && zUsed == false) {
        if (legitKey && lives > 0 && counter + space !== geusses.length) {
          letter19.setAttribute("class", "active");
          letter19.onclick = null;
          zUsed = true;
          // letterPressed.textContent = keyPressed;
          for (var i = 0; i < phrase.length; i++) {
            if (phrase[i] == keyPressed) {
              geusses[i].innerHTML = keyPressed;
              counter += 1;
            }
          }
        }
        var j = phrase.indexOf(keyPressed);
        if (j === -1 && lives > 0) {
          lives -= 1;
          comments();
        } else {
          comments();
        }
      }

      if (keyPressed == "x" && xUsed == false) {
        if (legitKey && lives > 0 && counter + space !== geusses.length) {
          letter20.setAttribute("class", "active");
          letter20.onclick = null;
          xUsed = true;
          // letterPressed.textContent = keyPressed;
          for (var i = 0; i < phrase.length; i++) {
            if (phrase[i] == keyPressed) {
              geusses[i].innerHTML = keyPressed;
              counter += 1;
            }
          }
        }
        var j = phrase.indexOf(keyPressed);
        if (j === -1 && lives > 0) {
          lives -= 1;
          comments();
        } else {
          comments();
        }
      }

      if (keyPressed == "c" && cUsed == false) {
        if (legitKey && lives > 0 && counter + space !== geusses.length) {
          letter21.setAttribute("class", "active");
          letter21.onclick = null;
          cUsed = true;
          // letterPressed.textContent = keyPressed;
          for (var i = 0; i < phrase.length; i++) {
            if (phrase[i] == keyPressed) {
              geusses[i].innerHTML = keyPressed;
              counter += 1;
            }
          }
        }
        var j = phrase.indexOf(keyPressed);
        if (j === -1 && lives > 0) {
          lives -= 1;
          comments();
        } else {
          comments();
        }
      }

      if (keyPressed == "v" && vUsed == false) {
        if (legitKey && lives > 0 && counter + space !== geusses.length) {
          letter22.setAttribute("class", "active");
          letter22.onclick = null;
          vUsed = true;
          // letterPressed.textContent = keyPressed;
          for (var i = 0; i < phrase.length; i++) {
            if (phrase[i] == keyPressed) {
              geusses[i].innerHTML = keyPressed;
              counter += 1;
            }
          }
        }
        var j = phrase.indexOf(keyPressed);
        if (j === -1 && lives > 0) {
          lives -= 1;
          comments();
        } else {
          comments();
        }
      }

      if (keyPressed == "b" && bUsed == false) {
        if (legitKey && lives > 0 && counter + space !== geusses.length) {
          letter23.setAttribute("class", "active");
          letter23.onclick = null;
          bUsed = true;
          // letterPressed.textContent = keyPressed;
          for (var i = 0; i < phrase.length; i++) {
            if (phrase[i] == keyPressed) {
              geusses[i].innerHTML = keyPressed;
              counter += 1;
            }
          }
        }
        var j = phrase.indexOf(keyPressed);
        if (j === -1 && lives > 0) {
          lives -= 1;
          comments();
        } else {
          comments();
        }
      }

      if (keyPressed == "n" && nUsed == false) {
        if (legitKey && lives > 0 && counter + space !== geusses.length) {
          letter24.setAttribute("class", "active");
          letter24.onclick = null;
          nUsed = true;
          // letterPressed.textContent = keyPressed;
          for (var i = 0; i < phrase.length; i++) {
            if (phrase[i] == keyPressed) {
              geusses[i].innerHTML = keyPressed;
              counter += 1;
            }
          }
        }
        var j = phrase.indexOf(keyPressed);
        if (j === -1 && lives > 0) {
          lives -= 1;
          comments();
        } else {
          comments();
        }
      }

      if (keyPressed == "m" && mUsed == false) {
        if (legitKey && lives > 0 && counter + space !== geusses.length) {
          letter25.setAttribute("class", "active");
          letter25.onclick = null;
          mUsed = true;
          // letterPressed.textContent = keyPressed;
          for (var i = 0; i < phrase.length; i++) {
            if (phrase[i] == keyPressed) {
              geusses[i].innerHTML = keyPressed;
              counter += 1;
            }
          }
        }
        var j = phrase.indexOf(keyPressed);
        if (j === -1 && lives > 0) {
          lives -= 1;
          comments();
        } else {
          comments();
        }
      }
    }
  }

  // OnClick Function
  check = function () {
    if (playing == true && lives > 0 && counter + space !== geusses.length) {
      list.onclick = function () {
        var geuss = this.textContent;

        var letterCheck = geuss;
        // letterPressed.textContent = letterCheck;

        if (letterCheck === "a" && aUsed === false) {
          // letterPressed.textContent = "aa";
          aUsed = true;
          if (lives > 0 && counter + space !== geusses.length) {
            this.setAttribute("class", "active");
            this.onclick = null;
            for (var i = 0; i < phrase.length; i++) {
              if (phrase[i] === geuss) {
                geusses[i].innerHTML = geuss;
                counter += 1;
              }
            }
          }
          var j = phrase.indexOf(geuss);
          if (j === -1 && lives > 0) {
            lives -= 1;
            comments();
          } else {
            comments();
          }
        }

        if (letterCheck === "b" && bUsed === false) {
          // letterPressed.textContent = "bb";
          bUsed = true;
          if (lives > 0 && counter + space !== geusses.length) {
            this.setAttribute("class", "active");
            this.onclick = null;
            for (var i = 0; i < phrase.length; i++) {
              if (phrase[i] === geuss) {
                geusses[i].innerHTML = geuss;
                counter += 1;
              }
            }
          }
          var j = phrase.indexOf(geuss);
          if (j === -1 && lives > 0) {
            lives -= 1;
            comments();
          } else {
            comments();
          }
        }

        if (letterCheck === "c" && cUsed === false) {
          // letterPressed.textContent = "cc";
          cUsed = true;
          if (lives > 0 && counter + space !== geusses.length) {
            this.setAttribute("class", "active");
            this.onclick = null;
            for (var i = 0; i < phrase.length; i++) {
              if (phrase[i] === geuss) {
                geusses[i].innerHTML = geuss;
                counter += 1;
              }
            }
          }
          var j = phrase.indexOf(geuss);
          if (j === -1 && lives > 0) {
            lives -= 1;
            comments();
          } else {
            comments();
          }
        }

        if (letterCheck === "d" && dUsed === false) {
          // letterPressed.textContent = "dd";
          dUsed = true;
          if (lives > 0 && counter + space !== geusses.length) {
            this.setAttribute("class", "active");
            this.onclick = null;
            for (var i = 0; i < phrase.length; i++) {
              if (phrase[i] === geuss) {
                geusses[i].innerHTML = geuss;
                counter += 1;
              }
            }
          }
          var j = phrase.indexOf(geuss);
          if (j === -1 && lives > 0) {
            lives -= 1;
            comments();
          } else {
            comments();
          }
        }

        if (letterCheck === "e" && eUsed === false) {
          // letterPressed.textContent = "ee";
          eUsed = true;
          if (lives > 0 && counter + space !== geusses.length) {
            this.setAttribute("class", "active");
            this.onclick = null;
            for (var i = 0; i < phrase.length; i++) {
              if (phrase[i] === geuss) {
                geusses[i].innerHTML = geuss;
                counter += 1;
              }
            }
          }
          var j = phrase.indexOf(geuss);
          if (j === -1 && lives > 0) {
            lives -= 1;
            comments();
          } else {
            comments();
          }
        }

        if (letterCheck === "f" && fUsed === false) {
          // letterPressed.textContent = "ff";
          fUsed = true;
          if (lives > 0 && counter + space !== geusses.length) {
            this.setAttribute("class", "active");
            this.onclick = null;
            for (var i = 0; i < phrase.length; i++) {
              if (phrase[i] === geuss) {
                geusses[i].innerHTML = geuss;
                counter += 1;
              }
            }
          }
          var j = phrase.indexOf(geuss);
          if (j === -1 && lives > 0) {
            lives -= 1;
            comments();
          } else {
            comments();
          }
        }

        if (letterCheck === "g" && gUsed === false) {
          // letterPressed.textContent = "gg";
          gUsed = true;
          if (lives > 0 && counter + space !== geusses.length) {
            this.setAttribute("class", "active");
            this.onclick = null;
            for (var i = 0; i < phrase.length; i++) {
              if (phrase[i] === geuss) {
                geusses[i].innerHTML = geuss;
                counter += 1;
              }
            }
          }
          var j = phrase.indexOf(geuss);
          if (j === -1 && lives > 0) {
            lives -= 1;
            comments();
          } else {
            comments();
          }
        }

        if (letterCheck === "h" && hUsed === false) {
          // letterPressed.textContent = "hh";
          hUsed = true;
          if (lives > 0 && counter + space !== geusses.length) {
            this.setAttribute("class", "active");
            this.onclick = null;
            for (var i = 0; i < phrase.length; i++) {
              if (phrase[i] === geuss) {
                geusses[i].innerHTML = geuss;
                counter += 1;
              }
            }
          }
          var j = phrase.indexOf(geuss);
          if (j === -1 && lives > 0) {
            lives -= 1;
            comments();
          } else {
            comments();
          }
        }

        if (letterCheck === "i" && iUsed === false) {
          // letterPressed.textContent = "ii";
          iUsed = true;
          if (lives > 0 && counter + space !== geusses.length) {
            this.setAttribute("class", "active");
            this.onclick = null;
            for (var i = 0; i < phrase.length; i++) {
              if (phrase[i] === geuss) {
                geusses[i].innerHTML = geuss;
                counter += 1;
              }
            }
          }
          var j = phrase.indexOf(geuss);
          if (j === -1 && lives > 0) {
            lives -= 1;
            comments();
          } else {
            comments();
          }
        }

        if (letterCheck === "j" && jUsed === false) {
          // letterPressed.textContent = "jj";
          jUsed = true;
          if (lives > 0 && counter + space !== geusses.length) {
            this.setAttribute("class", "active");
            this.onclick = null;
            for (var i = 0; i < phrase.length; i++) {
              if (phrase[i] === geuss) {
                geusses[i].innerHTML = geuss;
                counter += 1;
              }
            }
          }
          var j = phrase.indexOf(geuss);
          if (j === -1 && lives > 0) {
            lives -= 1;
            comments();
          } else {
            comments();
          }
        }

        if (letterCheck === "k" && kUsed === false) {
          // letterPressed.textContent = "kk";
          kUsed = true;
          if (lives > 0 && counter + space !== geusses.length) {
            this.setAttribute("class", "active");
            this.onclick = null;
            for (var i = 0; i < phrase.length; i++) {
              if (phrase[i] === geuss) {
                geusses[i].innerHTML = geuss;
                counter += 1;
              }
            }
          }
          var j = phrase.indexOf(geuss);
          if (j === -1 && lives > 0) {
            lives -= 1;
            comments();
          } else {
            comments();
          }
        }

        if (letterCheck === "l" && lUsed === false) {
          // letterPressed.textContent = "ll";
          lUsed = true;
          if (lives > 0 && counter + space !== geusses.length) {
            this.setAttribute("class", "active");
            this.onclick = null;
            for (var i = 0; i < phrase.length; i++) {
              if (phrase[i] === geuss) {
                geusses[i].innerHTML = geuss;
                counter += 1;
              }
            }
          }
          var j = phrase.indexOf(geuss);
          if (j === -1 && lives > 0) {
            lives -= 1;
            comments();
          } else {
            comments();
          }
        }

        if (letterCheck === "m" && mUsed === false) {
          // letterPressed.textContent = "mm";
          mUsed = true;
          if (lives > 0 && counter + space !== geusses.length) {
            this.setAttribute("class", "active");
            this.onclick = null;
            for (var i = 0; i < phrase.length; i++) {
              if (phrase[i] === geuss) {
                geusses[i].innerHTML = geuss;
                counter += 1;
              }
            }
          }
          var j = phrase.indexOf(geuss);
          if (j === -1 && lives > 0) {
            lives -= 1;
            comments();
          } else {
            comments();
          }
        }

        if (letterCheck === "n" && nUsed === false) {
          // letterPressed.textContent = "nn";
          nUsed = true;
          if (lives > 0 && counter + space !== geusses.length) {
            this.setAttribute("class", "active");
            this.onclick = null;
            for (var i = 0; i < phrase.length; i++) {
              if (phrase[i] === geuss) {
                geusses[i].innerHTML = geuss;
                counter += 1;
              }
            }
          }
          var j = phrase.indexOf(geuss);
          if (j === -1 && lives > 0) {
            lives -= 1;
            comments();
          } else {
            comments();
          }
        }

        if (letterCheck === "o" && oUsed === false) {
          // letterPressed.textContent = "oo";
          oUsed = true;
          if (lives > 0 && counter + space !== geusses.length) {
            this.setAttribute("class", "active");
            this.onclick = null;
            for (var i = 0; i < phrase.length; i++) {
              if (phrase[i] === geuss) {
                geusses[i].innerHTML = geuss;
                counter += 1;
              }
            }
          }
          var j = phrase.indexOf(geuss);
          if (j === -1 && lives > 0) {
            lives -= 1;
            comments();
          } else {
            comments();
          }
        }

        if (letterCheck === "p" && pUsed === false) {
          // letterPressed.textContent = "pp";
          pUsed = true;
          if (lives > 0 && counter + space !== geusses.length) {
            this.setAttribute("class", "active");
            this.onclick = null;
            for (var i = 0; i < phrase.length; i++) {
              if (phrase[i] === geuss) {
                geusses[i].innerHTML = geuss;
                counter += 1;
              }
            }
          }
          var j = phrase.indexOf(geuss);
          if (j === -1 && lives > 0) {
            lives -= 1;
            comments();
          } else {
            comments();
          }
        }

        if (letterCheck === "q" && qUsed === false) {
          // letterPressed.textContent = "qq";
          qUsed = true;
          if (lives > 0 && counter + space !== geusses.length) {
            this.setAttribute("class", "active");
            this.onclick = null;
            for (var i = 0; i < phrase.length; i++) {
              if (phrase[i] === geuss) {
                geusses[i].innerHTML = geuss;
                counter += 1;
              }
            }
          }
          var j = phrase.indexOf(geuss);
          if (j === -1 && lives > 0) {
            lives -= 1;
            comments();
          } else {
            comments();
          }
        }

        if (letterCheck === "r" && rUsed === false) {
          // letterPressed.textContent = "rr";
          rUsed = true;
          if (lives > 0 && counter + space !== geusses.length) {
            this.setAttribute("class", "active");
            this.onclick = null;
            for (var i = 0; i < phrase.length; i++) {
              if (phrase[i] === geuss) {
                geusses[i].innerHTML = geuss;
                counter += 1;
              }
            }
          }
          var j = phrase.indexOf(geuss);
          if (j === -1 && lives > 0) {
            lives -= 1;
            comments();
          } else {
            comments();
          }
        }

        if (letterCheck === "s" && sUsed === false) {
          // letterPressed.textContent = "ss";
          sUsed = true;
          if (lives > 0 && counter + space !== geusses.length) {
            this.setAttribute("class", "active");
            this.onclick = null;
            for (var i = 0; i < phrase.length; i++) {
              if (phrase[i] === geuss) {
                geusses[i].innerHTML = geuss;
                counter += 1;
              }
            }
          }
          var j = phrase.indexOf(geuss);
          if (j === -1 && lives > 0) {
            lives -= 1;
            comments();
          } else {
            comments();
          }
        }

        if (letterCheck === "t" && tUsed === false) {
          // letterPressed.textContent = "tt";
          tUsed = true;
          if (lives > 0 && counter + space !== geusses.length) {
            this.setAttribute("class", "active");
            this.onclick = null;
            for (var i = 0; i < phrase.length; i++) {
              if (phrase[i] === geuss) {
                geusses[i].innerHTML = geuss;
                counter += 1;
              }
            }
          }
          var j = phrase.indexOf(geuss);
          if (j === -1 && lives > 0) {
            lives -= 1;
            comments();
          } else {
            comments();
          }
        }

        if (letterCheck === "u" && uUsed === false) {
          // letterPressed.textContent = "uu";
          uUsed = true;
          if (lives > 0 && counter + space !== geusses.length) {
            this.setAttribute("class", "active");
            this.onclick = null;
            for (var i = 0; i < phrase.length; i++) {
              if (phrase[i] === geuss) {
                geusses[i].innerHTML = geuss;
                counter += 1;
              }
            }
          }
          var j = phrase.indexOf(geuss);
          if (j === -1 && lives > 0) {
            lives -= 1;
            comments();
          } else {
            comments();
          }
        }

        if (letterCheck === "v" && vUsed === false) {
          // letterPressed.textContent = "vv";
          vUsed = true;
          if (lives > 0 && counter + space !== geusses.length) {
            this.setAttribute("class", "active");
            this.onclick = null;
            for (var i = 0; i < phrase.length; i++) {
              if (phrase[i] === geuss) {
                geusses[i].innerHTML = geuss;
                counter += 1;
              }
            }
          }
          var j = phrase.indexOf(geuss);
          if (j === -1 && lives > 0) {
            lives -= 1;
            comments();
          } else {
            comments();
          }
        }

        if (letterCheck === "w" && wUsed === false) {
          // letterPressed.textContent = "ww";
          wUsed = true;
          if (lives > 0 && counter + space !== geusses.length) {
            this.setAttribute("class", "active");
            this.onclick = null;
            for (var i = 0; i < phrase.length; i++) {
              if (phrase[i] === geuss) {
                geusses[i].innerHTML = geuss;
                counter += 1;
              }
            }
          }
          var j = phrase.indexOf(geuss);
          if (j === -1 && lives > 0) {
            lives -= 1;
            comments();
          } else {
            comments();
          }
        }

        if (letterCheck === "x" && xUsed === false) {
          // letterPressed.textContent = "xx";
          xUsed = true;
          if (lives > 0 && counter + space !== geusses.length) {
            this.setAttribute("class", "active");
            this.onclick = null;
            for (var i = 0; i < phrase.length; i++) {
              if (phrase[i] === geuss) {
                geusses[i].innerHTML = geuss;
                counter += 1;
              }
            }
          }
          var j = phrase.indexOf(geuss);
          if (j === -1 && lives > 0) {
            lives -= 1;
            comments();
          } else {
            comments();
          }
        }

        if (letterCheck === "y" && yUsed === false) {
          // letterPressed.textContent = "yy";
          yUsed = true;
          if (lives > 0 && counter + space !== geusses.length) {
            this.setAttribute("class", "active");
            this.onclick = null;
            for (var i = 0; i < phrase.length; i++) {
              if (phrase[i] === geuss) {
                geusses[i].innerHTML = geuss;
                counter += 1;
              }
            }
          }
          var j = phrase.indexOf(geuss);
          if (j === -1 && lives > 0) {
            lives -= 1;
            comments();
          } else {
            comments();
          }
        }

        if (letterCheck === "z" && zUsed === false) {
          // letterPressed.textContent = "zz";
          zUsed = true;
          if (lives > 0 && counter + space !== geusses.length) {
            this.setAttribute("class", "active");
            this.onclick = null;
            for (var i = 0; i < phrase.length; i++) {
              if (phrase[i] === geuss) {
                geusses[i].innerHTML = geuss;
                counter += 1;
              }
            }
          }
          var j = phrase.indexOf(geuss);
          if (j === -1 && lives > 0) {
            lives -= 1;
            comments();
          } else {
            comments();
          }
        }
      };
    }
  };

  // Play
  play = function () {
    buttons1();
    buttons2();
    buttons3();

    geusses = [];
    counter = 0;
    space = 0;
    result();
    comments();
  };

  play();

   function buttonNameChange() {
    copyText.textContent = "Copied!";
  }

  function copy() {
    var copyText =
      "Phrased " +
      dayCount +
      "\n" +
      mylives.textContent +
      "\n" +
      clock.textContent +
      "\n" +
      "valhunner.com/phrased";

    var el2 = document.createElement("textarea");
    el2.value = copyText;
    el2.setAttribute("readonly", "");
    el2.style = {
      position: "absolute",
      left: "-9999px"
    };
    document.body.appendChild(el2);
    el2.select();
    document.execCommand("copy");
    document.body.removeChild(el2);
    buttonNameChange();
  }

  // function for web share api
  function webShareAPI(description) {
    navigator
      .share({
        text: description
      })
      .then(() => console.log("Successful share"))
      .catch((error) => console.log("Error sharing", error));
  }

  if (navigator.share && isMobile) {
    copyText.style.display = "block";
    copyText.addEventListener("click", () =>
      webShareAPI(
          "Phrased " +
          dayCount +
          "\n" +
          mylives.textContent +
          "\n" +
          clock.textContent +
          "\n" +
          "valhunner.com/phrased"
      )
    );
  } else {
    // doesn't support webShareAPI
    copyText.style.display = "block";
    copyText.textContent = "Copy Results";
    copyText.addEventListener("click", copy);
  }
};
