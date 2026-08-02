const games = [
  {name:"Game Rummy",image:"gamerummy.png",bonus:"₹300 Bonus",rating:"4.9",downloads:"10M+",trusted:true,link:"https://gamerummyc.com/?code=Q6WD4YVGSKG&t=1783045708"},
  {name:"Go Spin",image:"gospin.png",bonus:"₹400 Bonus",rating:"4.8",downloads:"8M+",trusted:true,link:"https://www.gospin.bet/?code=498S6EMARN5&t=1783045757"},
  {name:"Hindi777",image:"Hindi777.png",bonus:"₹500 Bonus",rating:"4.9",downloads:"12M+",trusted:true,link:"https://www.hindi777agent5.com/?code=7LFCL9PJ516&t=1783045793"},
  {name:"Hi Rummy",image:"HiRummy.png",bonus:"₹500 Bonus",rating:"4.9",downloads:"9M+",trusted:true,link:"https://joinhirummy.cc/?code=RX3HPNUFL1W&t=1783045895"},
  {name:"Ind Club",image:"indclub.png",bonus:"₹250 Bonus",rating:"4.8",downloads:"7M+",trusted:true,link:"https://indclub36.com/?code=34UGAHJAEGU&t=1783045944"},
  {name:"Ind Slots",image:"indslots.png",bonus:"₹400 Bonus",rating:"4.8",downloads:"6M+",trusted:true,link:"https://www.indslotsgame.com/?code=T2Q18VEZGLG&t=1783045984"},
  {name:"MQM Bet",image:"mqmbet.png",bonus:"₹500 Bonus",rating:"4.7",downloads:"5M+",trusted:true,link:"https://6mqmshare.vip?pid=337905532&channel=2030000&pkg=com.mqmbet3001.app"},
  {name:"INR Rummy",image:"inrrummy.png",bonus:"₹500 Bonus",rating:"4.9",downloads:"11M+",trusted:true,link:"https://inrrummysvip2.net/?code=JMQKAVX7KWE&t=1783046109"},
  {name:"Jaiho Arcade",image:"jaihoarcade.png",bonus:"₹350 Bonus",rating:"4.8",downloads:"7M+",trusted:true,link:"https://www.jaihoarcade34.com/?code=AZDCZKW7BNV&t=1783046145"},
  {name:"Jaiho Slots",image:"jaihoslots.png",bonus:"₹450 Bonus",rating:"4.8",downloads:"6M+",trusted:true,link:"https://www.jaihoslots18.com/?code=EGP7RY4XTDY&t=1783046174"},
  {name:"Jaiho Spin",image:"jaihospin.png",bonus:"₹400 Bonus",rating:"4.8",downloads:"6M+",trusted:true,link:"https://1jaihospinslot.com/?code=7TA6DT11LF3&t=1783046216"},
  {name:"Jaiho Win",image:"jaihowin.png",bonus:"₹500 Bonus",rating:"4.9",downloads:"8M+",trusted:true,link:"https://www.jaihowin16.com/?code=1XN5PLDRBGJ&t=1783046440"},
  {name:"Jaiho777",image:"jaiho777.png",bonus:"₹300 Bonus",rating:"4.8",downloads:"5M+",trusted:true,link:"https://jaiho77792.com/?code=GC2PL1RSXZD&t=1783046484"},
  {name:"91 Jaiho",image:"91jaiho.png",bonus:"₹350 Bonus",rating:"4.8",downloads:"5M+",trusted:true,link:"https://91jaihoapp.com/?code=C422BB6Y941&t=1783046532"},
  {name:"Joy Rummy",image:"joyrummy.png",bonus:"₹400 Bonus",rating:"4.8",downloads:"6M+",trusted:true,link:"https://www.joyrummylux.com/?code=J5KY29TE89Q&t=1783046573"},
  {name:"Love Rummy",image:"loverummy.png",bonus:"₹300 Bonus",rating:"4.7",downloads:"4M+",trusted:true,link:"https://www.loverummy1.com/?code=AFCJ9HGB44A&t=1783046624"},
  {name:"Maha Games",image:"mahagames.png",bonus:"₹500 Bonus",rating:"4.9",downloads:"7M+",trusted:true,link:"https://on-mahagames.com/?code=J24LM8HUX75&t=1783046672"},
  {name:"MBM Bet",image:"mbmbet.png",bonus:"₹450 Bonus",rating:"4.8",downloads:"5M+",trusted:true,link:"https://www.mbmbet28.com/?code=UPH8J9BHY9Q&t=1783046724"},
  {name:"789 Jackpots",image:"789jackpots.png",bonus:"₹500 Bonus",rating:"4.9",downloads:"8M+",trusted:true,link:"https://join789jackpots1.com/?code=J7ZRKV1ELHS&t=1783046769"},
  {name:"777 OKOK",image:"777okok.png",bonus:"₹350 Bonus",rating:"4.8",downloads:"6M+",trusted:true,link:"https://www.777okok.com/?code=H53V3D3M674"}
];

const gameList=document.getElementById("gameList");
const searchInput=document.getElementById("searchInput");

function renderGames(list){
  gameList.innerHTML="";
  list.forEach(game=>{
    const card=document.createElement("div");
    card.className="game-card";
    card.innerHTML=`
      <img src="images/${game.image}" alt="${game.name}">
      <h3>${game.name}</h3>
      <div class="meta">
        <span>⭐ ${game.rating}</span>
        <span>📥 ${game.downloads}</span>
      </div>
      <p class="bonus">${game.bonus}</p>
      ${game.trusted ? '<div class="trusted">✔ Trusted</div>' : ''}

      <a href="${game.link}"
         target="_blank"
         rel="noopener noreferrer nofollow"
         class="download-btn">
         Download
      </a>
    `;
    gameList.appendChild(card);
  });
}

renderGames(games);

searchInput.addEventListener("input",function(){
  const value=this.value.toLowerCase();
  const filtered=games.filter(g=>g.name.toLowerCase().includes(value));
  renderGames(filtered);
});
