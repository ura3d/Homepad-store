window.addEventListener('scroll', function() {
  var scrollCoef = 0.0020;
  var opacity = 0 + (window.scrollY * scrollCoef);
  if(opacity < 0.5){
    opacity = 0;
  }
  document.getElementById('product').style.opacity = opacity.toString();
});

console_price = 1;
time_price = time_price = document.getElementById("t1").querySelector(".price").textContent;
gamepad_price = document.getElementById("one_pad").querySelector(".price").textContent;
acces_price = 0;
games_count = 0;

function changeConsole(id){
  document.getElementById(id).classList.add("_active");

  var text = document.getElementById(id).querySelector('.fat-name').textContent;
  var img = document.getElementById(id).querySelector(".fat-img").style.backgroundImage;
  document.getElementById('console_img').style.backgroundImage = img;
  document.getElementById('console_text').textContent = text;

  switch(id){
    case 'fat':
      document.getElementById('slim').classList.remove("_active");
      document.getElementById('pro').classList.remove("_active");
      console_price = 1;
      return price(console_price, time_price, gamepad_price, acces_price, games_count);
    case 'slim':
      document.getElementById('fat').classList.remove("_active");
      document.getElementById('pro').classList.remove("_active");
      console_price = 1.2;
      return price(console_price, time_price, gamepad_price, acces_price, games_count);
    case 'pro':
      document.getElementById('slim').classList.remove("_active");
      document.getElementById('fat').classList.remove("_active");
      console_price = 1.4;
      return price(console_price, time_price, gamepad_price, acces_price, games_count);
  }
}

function changeGamepad(id){
  switch(id){
    case 'one_pad':
      document.getElementById('two_pad').classList.remove("_active");
      document.getElementById('three_pad').classList.remove("_active");
      document.getElementById('four_pad').classList.remove("_active");
    case 'two_pad':
      document.getElementById('one_pad').classList.remove("_active");
      document.getElementById('three_pad').classList.remove("_active");
      document.getElementById('four_pad').classList.remove("_active");
    case 'three_pad':
      document.getElementById('two_pad').classList.remove("_active");
      document.getElementById('one_pad').classList.remove("_active");
      document.getElementById('four_pad').classList.remove("_active");
    case 'four_pad':
      document.getElementById('two_pad').classList.remove("_active");
      document.getElementById('three_pad').classList.remove("_active");
      document.getElementById('one_pad').classList.remove("_active");
  }
  document.getElementById(id).classList.add("_active");

  var text = document.getElementById(id).querySelector('.pad_text').textContent;
  var photo = document.getElementById(id).style.backgroundImage;
  document.getElementById('gamepad_photo').style.backgroundImage = photo;
  document.getElementById('gamepad_text').textContent = text;

  gamepad_price = document.getElementById(id).querySelector(".price").textContent;
  price(console_price, time_price, gamepad_price, acces_price, games_count);
}

function changeTime(id){
  i_txt = document.getElementById(id).querySelector(".t_text").textContent;
  el = document.getElementsByClassName("time_block");

  for(var i = 0; i<el.length; i++){
    txt = el[i].querySelector(".t_text").textContent;
    if(txt == i_txt){
      el[i].classList.add("_active");
      document.getElementById('time_text1').textContent = txt;
      document.getElementById('time_text2').textContent = txt;

      time_price = el[i].querySelector(".price").textContent;
      price(console_price, time_price, gamepad_price, acces_price, games_count);
    }
    else{
      el[i].classList.remove("_active");
    }
  }
}

function changeAcces(id){
  if(document.getElementById(id).classList[2] == "_active"){
    return cancelAcces();
  }
  else{
    document.getElementById(id).classList.add("_active");
    img = document.getElementById(id).style.backgroundImage;
    txt = document.getElementById(id).querySelector(".a_t").textContent;


    el = document.getElementsByClassName("big-block");
    for(var i = 0; i<el.length; i++){
      if(el[i].id != id){
        el[i].classList.remove("_active");
      }
      else{
        el[i].classList.add("_active");

        if(document.getElementById("acces").classList[0] != null){
          document.getElementById("acces_img").style.backgroundImage = img;
          document.getElementById("acces_text").textContent = txt;
        }
        else{
          var div_a = document.getElementById("acces");
          div_a.classList.add("acces-h", "pr");

          var div_i = document.createElement("div");
          div_i.id = "acces_img";
          div_i.style.backgroundImage = img;
          div_i.classList.add("img");

          var div_c = document.createElement("div");
          div_c.classList.add("cancel");
          div_c.onclick = cancelAcces;

          var div_t = document.createElement("h4");
          div_t.id = "acces_text";
          div_t.innerText = txt;

          var b = 0;
          var b_m = 0;

          function spawn_block(div_1, div_2, div_3, div_4){
            div_2.appendChild(div_3);
            div_1.appendChild(div_2);
            div_1.appendChild(div_4);
          }

          function anim_acces(div){
            div_a.style.height = b + "px";
            div_a.style.margin = "0px";
            if(b_m <= 20){
              b_m = b;
              div_a.style.margin = b_m + "px";
            }
            else{
              div_a.style.margin = "20px";
            }
            console.log(b);
            b = b+3;
            if(b<=99){
                setTimeout(anim_acces, 10);
            }
            else{
              div_a.style.removeProperty("height");
              div_a.style.removeProperty("margin");
              spawn_block(div_a, div_i, div_c, div_t);
            }
          }
          anim_acces();
        }
      }
    }
  }
  acces_price = document.getElementById(id).querySelector(".price").textContent;
  price(console_price, time_price, gamepad_price, acces_price, games_count);
}

function changeGame(id, b){
  game = document.getElementById(id);
  games_count = 0;

  if(game.classList[1] == "_active"){
    game.classList.remove("_active");
    game.firstElementChild.classList.remove("_active");
  }
  else{
    game.classList.add("_active");
    game.firstElementChild.classList.add("_active");
  }

  games = document.getElementsByClassName("game-block");
  for(var i = 0; i < games.length; i++){
    if(games[i].classList[1] == "_active"){
      games_count++;
    }
  }
  if(document.getElementById("game_count").classList[0] != null){
    if(games_count > 0){
      document.getElementById("games_counts1").textContent = games_count;
    }
    else{
      document.getElementById("games_counts2").remove();
      document.getElementById("games_counts1").remove();
      document.getElementById("game_count").querySelector(".img").remove();
      document.getElementById("game_count").classList.remove("games-h","pr");
    }
  }
  else{
    var game_block = document.getElementById("game_count")
    game_block.classList.add("games-h", "pr");

    var i_block = document.createElement("div")
    i_block.classList.add("img");

    var g_c1 = document.createElement("h2");
    g_c1.id = "games_counts1";
    g_c1.textContent = games_count;

    var g_c2 = document.createElement("h4");
    g_c2.id = "games_counts2";
    g_c2.textContent = "Total games";

    var b = 0;
    var b_m = 0;

    function anim_acces(div){
      game_block.style.height = b + "px";
      game_block.style.margin = "0px";
      if(b_m <= 20){
        b_m = b;
        game_block.style.margin = b_m + "px";
      }
      else{
        game_block.style.margin = "20px";
      }
      console.log(b);
      b = b+3;
      if(b<=99){
          setTimeout(anim_acces, 10);
      }
      else{
        game_block.style.removeProperty("height");
        game_block.style.removeProperty("margin");

        i_block.appendChild(g_c1);
        game_block.appendChild(i_block);
        game_block.appendChild(g_c2);
      }
    }
    anim_acces();
  }
  price(console_price, time_price, gamepad_price, acces_price, games_count);
}

function cancelAcces(){
  document.getElementById("acces").classList.remove("acces-h", "pr")
  document.getElementById("acces_img").remove();
  document.getElementById("acces_text").remove();
  el = document.getElementsByClassName("big-block");
  for(var i = 0; i<el.length; i++){
    if(el[i].classList[2] == "_active"){
      el[i].classList.remove("_active");
    }
  }
  acces_price = 0;
  price(console_price, time_price, gamepad_price, acces_price, games_count);
}

function price(c_price, t_price, g_price, a_price, ga_price){
  console.log("--------------");
  console.log(+c_price);
  console.log(+t_price + 0.99);
  console.log(+g_price);
  console.log(+a_price);
  console.log(+ga_price);

  total = +c_price * +t_price + +g_price + +a_price + ga_price * 0.5 + 0.99;

  document.getElementById("total-price").textContent = +total.toFixed(2) + "€";
  document.getElementById("total_price-h").textContent = +total.toFixed(2) + "€";
}

price(console_price, time_price, gamepad_price, acces_price, games_count);
