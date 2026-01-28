const lyricsDiv = document.querySelector(".lyrics");
const btn = document.querySelector(".start");
const audio = new Audio("audio.mp3");

let lyrics = ["Na Koi Aap Jaisa Hai", "Na koi app jaisa tha", "Koi Ye Sab Se Poochay", "Mustufa Ka Husn Kaisa Tha", "Zameen O Asmaan Mein Koi Misaal Na Mili", "Maula Ya Salli Wasallim Daeeman Abadan", "Ala Habibi Ka Kher-E-Khalq-E Kulli Heemi"]

const sleep = async (ms) =>{
  return new Promise(resolve =>{
    setTimeout(resolve, ms)
  })
}

async function showLyrics() {
  let index = 0;
  for(let line of lyrics){
    console.log(line, index)
    await sleep(1000)
    lyricsDiv.innerHTML = `<div class="border"></div>`;
    let str = "";
    line += "..."
    const para = document.createElement("p");
    lyricsDiv.append(para)
    for(let c of line){
      str += c;
      para.innerText = str;
      if(index >= 4){
        await sleep(160)
      }
      else{
        await sleep(100)
      }
    }
    index++;
  }
}

btn.addEventListener("click", ()=>{
  btn.classList.add("hidden");
  audio.play()
  showLyrics()
})

audio.addEventListener("ended", ()=>{
  btn.classList.remove("hidden");
})