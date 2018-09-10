var avengers = [
   {image:"http://los40es00.epimg.net/los40/imagenes/2018/01/25/cinetv/1516896997_177677_1516897112_noticia_normal.jpg", name:"Natasha", age:25, occupation:"Skilled tactician, martial artist and secret agent", distance:19 +" KM away"},

   {image:"https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/6/6f/CW_Textless_Shield_Poster_02.jpg/revision/latest/scale-to-width-down/310?cb=20180417151836", name:"Barton", age:35, occupation:"Master archer and marksman", distance:12 +" KM away"},

   {image:"https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/2/2f/Vision_AIW_Profile.jpg/revision/latest/scale-to-width-down/310?cb=20180518212532", name:"Vision", age:22, occupation:"Superhuman strength and speed", distance:10 +" KM away"},

   {image:"https://pre00.deviantart.net/787d/th/pre/f/2017/186/e/9/scarlet_witch_by_erlanarya-dallcmw.jpg", name:"Wanda", age:20, occupation:"Mystic magician", distance:1 +" KM away"},

   {image:"https://i.pinimg.com/originals/4e/08/09/4e0809c5e0e9cbca177dac99614cdff7.jpg", name:"Steve", age:30, occupation:"Peak human strength, speed, durability, agility, reflexes, senses, and mental processing", distance:5 +" KM away"},

   {image:"https://vignette.wikia.nocookie.net/marvelcentral/images/4/4a/Tony-Stark-iron-man-11234572-1485-2061.jpg/revision/latest?cb=20110219055106", name:"Tony", age:28, occupation:"Genius, Billionaire, Playboy, Philanthrophist", distance:15 +" KM away"},

   {image:"https://i.pinimg.com/originals/85/52/6a/85526a13f22c582a636b75af983a2627.jpg", name:"Banner", age:33, occupation:"Superhuman strength, stamina and durability", distance: 17+" KM"},

   {image:"https://i.kym-cdn.com/photos/images/original/000/795/277/f44.jpg", name:"Thor", age:32, occupation:"God of Thunder, Son of Odin", distance:13 +" KM away"},

   {image:"https://i.pinimg.com/originals/95/1f/eb/951feb1543d4bc23f36e1a960aa93495.jpg", name:"Peter", age:27, occupation:"Superhuman strength, speed, durability, and agility", distance:8 +" KM away"},

   {image:"https://vignette.wikia.nocookie.net/marvelmovies/images/1/1a/Avengers_Infinity_War_Black_Panther_Poster.jpg/revision/latest/scale-to-width-down/280?cb=20180404210412", name:"T'Challa", age:36, occupation:"King of Kings", distance:2 +" KM away"}
];

var image = document.getElementById('profImg');
var profileName = document.getElementById('nameAge');
var ability = document.getElementById('cv');
var card = document.getElementById('card-id');
var dist = document.getElementById('distance');
var infoIcon = '<i class="far fa-id-card" style="float:right"></i>';
var counter = 1;

var imgSrcIndex = (Math.floor(Math.random() * 10) + 1)-1;
var currentIndex = imgSrcIndex;

var imgSrc =  avengers[imgSrcIndex].image.toString();
image.setAttribute('src', imgSrc);

profileName.innerHTML = avengers[imgSrcIndex].name +", "+ avengers[imgSrcIndex].age +" "+ infoIcon;
ability.innerText = avengers[imgSrcIndex].occupation;
dist.innerText = avengers[imgSrcIndex].distance;

var nextButton = document.getElementById('next');
nextButton.addEventListener('click', chooseNext)

function chooseNext(e){
   
    imgSrcIndex = (Math.floor(Math.random() * 10) + 1)-1;
    if(avengers[imgSrcIndex]==undefined){
        chooseNext();
    }
    imgSrc =  avengers[imgSrcIndex].image.toString();
    image.setAttribute('src', imgSrc);
    profileName.innerHTML = avengers[imgSrcIndex].name +", "+ avengers[imgSrcIndex].age +" "+ infoIcon;
    dist.innerHTML = "2 KM";
    ability.innerText = avengers[imgSrcIndex].occupation;
    dist.innerText = avengers[imgSrcIndex].distance;

    currentIndex = imgSrcIndex;

    return currentIndex;
}

var delButton = document.getElementById('del');
delButton.addEventListener('click', removeUser);

function removeUser(e){

    delete avengers[currentIndex];
    chooseNext(e);

}
