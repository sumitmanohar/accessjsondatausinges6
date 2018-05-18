//tvShow is variable of json data
// Write a function that takes Season number and episode number as input
// and gives all the information about that particular episode as output.
let episodeInfo=(seasonNumber,episodeNumber)=>{
  for(x of tvShow._embedded.episodes){
    if(x.season==seasonNumber && x.number==episodeNumber){
    console.log(x)
    seasonData=true
    break
     }
  }
  if(seasonData==false){
    console.log(`no data present for seasonNumber= ${seasonNumber} and episodeNumber= ${episodeNumber}`)
  }

}
// Write a function that can take any number of episode ids as input and
// returns all the information about those episodes.
let episodeINformation=(id)=>{
  for(x of tvShow._embedded.episodes){
    if(x.id==id){
      console.log(x)
      idData=true
      break
    }
  }
  if(idData==false){
    console.log(`no data present for id= ${id}`)
  }
}
 // Write a function to search episode by its name.
let episodeSearch=(name)=>{
for(x of tvShow._embedded.episodes){
  if(x.name==name){
    console.log(`episode number is ${x.number}`)
    nameData=true
    break
  
  }
}
if(nameData==false){
  console.log(`no data present for this movies= ${name}`)
}
}

let seasonData=false
let idData=false
let nameData=false
let seasonNumber=prompt('enter season number')
let episodeNumber=prompt('enter episode number')
let episodeId=prompt('enter episode id')
let name=prompt('enter name of tv show')
episodeInfo(seasonNumber,episodeNumber)
episodeINformation(episodeId)
episodeSearch(name)
