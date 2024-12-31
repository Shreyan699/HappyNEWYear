year = document.getElementsByClassName('year')

let index = 0;
setInterval(() => {
if(index<4){
    year[index].style.backgroundColor = "#F9E6CF"
    year[index].style.color = "#69247C"
    year[index].style.borderRadius = "40px"
    index++
    console.log("hi")
}
   
  
    else if (index >= 3) {
        year[3].innerHTML = "5"
    }



}, 500);

function ShowOtherBox(){
    box=document.querySelector('.box').style.display="None";
    box2= document.querySelector('.box-2').style.display = "flex"
    
}

function ShowOriginalBox(){
    box=document.querySelector('.box').style.display="flex";
    box2= document.querySelector('.box-2').style.display = "None"
}

var i = 0;
var txt = 'Wishing you a Happy New Year Shonaa!! ♥♥, I wish aap pure saal khush raho, aur mere sath raho, aurr boards me bhot acche marks lao, Shonaa, is saal sirf 1 mahine mushkil se aap acche se dekhne miloge, fir to aapki ek jhalak ke liye tarasna padega. Aap pure saal aapna acche se khyal rkhoge, meri baat manoge, mai apki har baat manunga, mai aapko bhot pareshan karunga pr kabhi pareshan ya gussa hokr mat chhorna mujhe, mai na pure saal apko dil me rakhunga, aur kisi ki entry allowed nhi hogi, Sirf Mrs Subhashree Nayak will be permitted Right?, pta hh 3 ghante se bana rha tha ye webpage, btao apne mera suprise adha spoil kr dia :(, is saal 25th april and 6th september became more memorable yrr, is saal na hume 1 saal pure karne hh relationship me,dekhoo I konw aap mujhse bhot jyada deserve krte ho, prr sorry shonaa, mai utna accha nhi hu aapke liye pr aap na mere liye sab kuch ho kasam se, Aap first priority ban gaye ho mere aur aap hi meri first priority rahoge, Mai ye saal kabhi nhi bhul skta, kyuki is saal aap meri zindagi me aayee aurr kya kr dia apne mere sath hayee, pura badal dia apne, btao itna rude insaan tha mai apke liye, kya se kya ho gya shonaa mujhe baat karna aa gya acche se, Thank U Shonaa, dekhna aur better hounga apke liye, aur kisi na kisi din to apkeliye deserving ban jau, To shonaa dekhoo, mai naa aapse bhot bhot bhot jyada pyaar karta hu pr kbhi bhi gusse me bhot kuch bhi bol deta hu shona, dekho gussa krta hu mtlb aapse bhot pyaar krta hu too na gusse se bura mankr chhorne ki bat mt krna, Aurr hnn, is saal aur bhi cheeze banana sikhunga future planning ke taur pr. Dekhoo Agr kbhi bhi low feel kro, gussa aaye, sad ho,mujhe btana mt bhulna, kya pta aapko atleast hasa du,hasane se yaad aaya, sorry shonaa, bhot rulata hu apko, I promise is saal apko km se kam rulane ka try krunga, Mujhe pta hh aap kitna sehte ho mere liye, shonaa Thnk u Itna sehne ke liye. Dekhoo is saal bs ye flaw reh gya ki mere efforts kam the, too is saal pakka badhaunga. Aaap bs mere rehna, aur yu hi pure saal muskurate rehna, kyuki hayeee jb muskurate ho naa kasam se jaan le jate ho. Aapki jo aakhei hai na, woo toooooooooo hayeeeee abhi yad kr rha hu kitna accha lg rha hh, shona in akho me aasuyo ki jagah nhi hh to rona mat, Is bar New Year par meri ek hi wish hh ki bs aapko aapna bana kr rkh pau pure saal , i mean puri zindagi, meri wifeyyy bhi to banna hh apko, dekho mai apko pehle se warning de rha hu bhot pareshan karunga mai, apko tolerate bhi karna padega, okie? Chloo Sunooo Shonaa, Sweetheart, Jaan ji, Wifeeyyy ji , I love youuuuuuu bhottt sara ♥♥♥♥♥♥ Mu Tomaku bahut bhala pauchii ♥♥♥♥♥♥♥♥♥♥♥ aami tomake khub bhalo bashi ♥♥♥♥♥♥♥  '; /* The text */
var speed = 1; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
    console.log("TypeWritted")
  if (i < txt.length) {
    document.getElementById("paragraph").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);

  }
}
