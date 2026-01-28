let lyrics = ["Kayar jo the", "Vo shayer bane", "Ab kya kya karain", "Ye Ishq me", "Na Kehte the kuch jo", "lage khoj me", "Kya lafz chune naya ashiq ye", "Ishq me tere hai faiz bane", "Arz kiya hai", "hamne bhi", "Likha kuch tere baare me", "Aise tu lage ki gulaab hai", "Aur aise tu lage ki gulaab hai", "Baghon me dilke khilke in fizaon mein", "Chhaye ho", "Hayy"]

const btn = document.getElementById("start")
const lyricsDiv = document.querySelector(".lyrics")
const border = document.querySelector(".border")
const audio = new Audio("audio.mp3");


const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function ShowLyrics(){
  let index = 0;
  await sleep(800)
  lyricsDiv.innerHTML = "";
  for(let e of lyrics){
    console.log(e, index)
    e += "...";
    let para = document.createElement("p")
    lyricsDiv.append(para)
    let line = "";
    for(let c of e) {
      line += c;
      para.innerText = line;
      await sleep(100)
      lyricsDiv.scrollTop = lyricsDiv.scrollHeight;

    }
    if(index == 7){
      await sleep(1400)
    }
    else if(index == 12){
      await sleep(1000)
    }
    else if (index == 14){
      await sleep(1400)
    }
    else{
      await sleep(700)
    }
    index++;
  }
}

btn.addEventListener("click", async ()=>{
  btn.classList.add("hidden")
  lyricsDiv.classList.remove("hidden")
  border.classList.remove("hidden")
  audio.play()
  await ShowLyrics()
})

audio.addEventListener("ended", ()=>{
  btn.classList.remove("hidden")
  lyricsDiv.classList.add("hidden")
  border.classList.add("hidden")
})