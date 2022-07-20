let digitalClock = () => {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  let hours1= hours % 12 || 12;

  hours1=(hours1<10)?"0"+ hours1 :hours1;
  minutes=(minutes<10)?"0"+ minutes :minutes;
  seconds=(seconds<10)?"0"+ seconds :seconds;
  
  let amOrpm = hours >= 12 ? "PM" : "AM";

  document.getElementById("hours").innerHTML = hours1;
  document.getElementById("munites").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
  document.getElementById("amorpm").innerHTML = amOrpm;

  setTimeout(digitalClock, 1000);
};
digitalClock();

let digitalClock1 = () => {
  let date = new Date();
  let hoursone = date.getHours();
  let minitesone = date.getMinutes();

  let time1 = hoursone;
  let grab1 = document.getElementsByClassName("grab");
  let grab2 = document.getElementsByClassName("goodmorning");
  let grab3 = document.getElementById("box111");

  if (time1 < 12) {
    grab1[0].innerHTML = "GRAB SOME HEALTHY BREAKFAST!!!";
    grab2[0].innerHTML = "GOOD MORNING!! WAKE UP !!";
    grab3.style.backgroundImage = "url('Component 30 – 1.svg')";
  } else if (time1 >= 12 && time1 < 16) {
    grab1[0].innerHTML = "LET'S HAVE SOME LUNCH !!";
    grab2[0].innerHTML = "GOOD AFTERNOON !! TAKE SOME SLEEP";
    grab3.style.backgroundImage = "url('Component 31 – 1.svg')";
  } else if (time1 >= 16 && time1 < 20) {
    grab1[0].innerHTML = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
    grab2[0].innerHTML = "GOOD EVENING !!";
    grab3.style.backgroundImage = "url('lunch_image.png')";
  } else if (time1 >= 20 && time1 < 24) {
    grab1[0].innerHTML = "SCLOSE YOUR EYES AND GO TO SLEEP ";
    grab2[0].innerHTML = "GOOD NIGHT !!";
    grab3.style.backgroundImage = "url('Component 32 – 1.svg')";
  } else {
    grab1[0].innerHTML = "GRAB SOME HEALTHY BREAKFAST!!!";
    grab2[0].innerHTML = "GOOD MORNING!! WAKE UP !!";
    grab3.style.backgroundImage = "url('Component 30 – 1.svg')";
  }
};
digitalClock1();


let grab4 = document.getElementsByClassName("selalarm1");
let grab5 = document.getElementById("box51");

    function setAlarm() {
  

      let grab6 = document.getElementById("goodmorn");
      let grab7 = document.getElementById("goodaftern");
      let grab8 = document.getElementById("goodeven");
      let grab9 = document.getElementById("goodnigh");
      let grab10 = document.getElementById("uptime1");
      let grab11 = document.getElementById("uptime2");
      let grab12 = document.getElementById("uptime3");
      let grab13 = document.getElementById("uptime4");
      let grab14 = document.getElementById("box111");
      let grab15=document.getElementById('uptime1').innerText =grab6.options[grab6.selectedIndex].text;
      let grab16=document.getElementById('uptime2').innerText = grab7.options[grab7.selectedIndex].text;
      let grab17=document.getElementById('uptime3').innerText = grab8.options[grab8.selectedIndex].text;
      let grab18=document.getElementById('uptime4').innerText = grab9.options[grab9.selectedIndex].text;
      let grab19 = document.getElementsByClassName("grab");
      let grab20 = document.getElementsByClassName("goodmorning");
      
      
        if (grab6) {
          grab19[0].innerHTML = "Come Back After Some Time!!!";
          grab20[0].innerHTML = "thank you !!";
          grab10.style.fontSize = "17px";
          grab10.style.fontFamily = "Josefin Sans";
          grab10.style.marginTop = "5px";
          grab14.style.backgroundImage = "url('pexels-vie-studio-4439466.jpg')";
          grab14.style.backgroundSize = "cover";
          grab14.style.backgroundPosition= "center";
          
          grab4[0].innerHTML = "Party time!";
          grab5.style.backgroundImage =" linear-gradient(113deg, #f1a7c5 0%,#fc5eff 40%,#cb52f8 51%,#6e54ec 150%)"
          

          
          }
          }





          //  function setAlarm() {
  

// let grab6 = document.getElementById("goodmorn");
// let grab7 = document.getElementById("goodaftern");
// let grab8 = document.getElementById("goodeven");
// let grab9 = document.getElementById("goodnigh");
// let grab10 = document.getElementById("uptime1");
// let grab11 = document.getElementById("uptime2");
// let grab12 = document.getElementById("uptime3");
// let grab13 = document.getElementById("uptime4");
// let grab14 = document.getElementById("box111");
// let grab15=document.getElementById('uptime1');
// let grab16=document.getElementById('uptime2');
// let grab17=document.getElementById('uptime3');
// let grab18=document.getElementById('uptime4');


//   if (grab6==grab6) {
//     grab15.innerText =grab6.options[grab6.selectedIndex].text;
//     grab10.style.fontSize = "17px";
//     grab10.style.fontFamily = "Josefin Sans";
//     grab10.style.marginTop = "5px";
//     grab14.style.backgroundImage = "url('/images/Component 31 – 1.svg')";
//     grab4[0].innerHTML = "Party time!";
//     grab5.style.backgroundImage =" linear-gradient(113deg, #f1a7c5 0%,#fc5eff 40%,#cb52f8 51%,#6e54ec 150%)"

//   }
//    else {
//     grab4[0].innerHTML = "Party time!";
//     grab5.style.backgroundImage =" linear-gradient(113deg, #f1a7c5 0%,#fc5eff 40%,#cb52f8 51%,#6e54ec 150%)";

//   }
// }
// function setAlarm() {
  

//   let grab6 = document.getElementById("goodmorn");
//   let grab7 = document.getElementById("goodaftern");
//   let grab8 = document.getElementById("goodeven");
//   let grab9 = document.getElementById("goodnigh");
//   let grab10 = document.getElementById("uptime1");
//   let grab11 = document.getElementById("uptime2");
//   let grab12 = document.getElementById("uptime3");
//   let grab13 = document.getElementById("uptime4");
//   let grab14 = document.getElementById("box111");
//   let grab15=document.getElementById('uptime1');
//   let grab16=document.getElementById('uptime2');
//   let grab17=document.getElementById('uptime3');
//   let grab18=document.getElementById('uptime4');
  
  
//     if (grab7==grab7) {
//       grab16.innerText = grab7.options[grab7.selectedIndex].text;
//       grab11.style.fontSize = "17px";
//       grab11.style.fontFamily = "Josefin Sans";
//       grab11.style.marginTop = "5px";
//       grab14.style.backgroundImage = "url('/images/Component 31 – 1.svg')";
//       grab4[0].innerHTML = "Party time!";
//       grab5.style.backgroundImage =" linear-gradient(113deg, #f1a7c5 0%,#fc5eff 40%,#cb52f8 51%,#6e54ec 150%)";
  
//     } else {
//       grab4[0].innerHTML = "Party time!";
//       grab5.style.backgroundImage =" linear-gradient(113deg, #f1a7c5 0%,#fc5eff 40%,#cb52f8 51%,#6e54ec 150%)";
  
//     }
//   }
//   function setAlarm() {
  

//     let grab6 = document.getElementById("goodmorn");
//     let grab7 = document.getElementById("goodaftern");
//     let grab8 = document.getElementById("goodeven");
//     let grab9 = document.getElementById("goodnigh");
//     let grab10 = document.getElementById("uptime1");
//     let grab11 = document.getElementById("uptime2");
//     let grab12 = document.getElementById("uptime3");
//     let grab13 = document.getElementById("uptime4");
//     let grab14 = document.getElementById("box111");
//     let grab15=document.getElementById('uptime1');
//     let grab16=document.getElementById('uptime2');
//     let grab17=document.getElementById('uptime3');
//     let grab18=document.getElementById('uptime4');
    
    
//        if (grab8==grab8) {
//         grab17.innerText = grab8.options[grab8.selectedIndex].text;
//         grab12.style.fontSize = "17px";
//         grab12.style.fontFamily = "Josefin Sans";
//         grab12.style.marginTop = "5px";
//         grab14.style.backgroundImage = "url('/images/lunch_image.png')";
//         grab4[0].innerHTML = "Party time!";
//         grab5.style.backgroundImage =" linear-gradient(113deg, #f1a7c5 0%,#fc5eff 40%,#cb52f8 51%,#6e54ec 150%)";
    
//       }  else {
//         grab4[0].innerHTML = "Party time!";
//         grab5.style.backgroundImage =" linear-gradient(113deg, #f1a7c5 0%,#fc5eff 40%,#cb52f8 51%,#6e54ec 150%)";
    
//       }
//     }
        // } else if (grab7) {
        //   grab11.style.fontSize = "17px";
        //   grab11.style.fontFamily = "Josefin Sans";
        //   grab11.style.marginTop = "5px";
        //   grab14.style.backgroundImage = "url('/images/Component 31 – 1.svg')";
        //   grab4[0].innerHTML = "Party time!";
        //   grab5.style.backgroundImage =" linear-gradient(113deg, #f1a7c5 0%,#fc5eff 40%,#cb52f8 51%,#6e54ec 150%)";
      
        // } else if (grab8) {
        //   grab12.style.fontSize = "17px";
        //   grab12.style.fontFamily = "Josefin Sans";
        //   grab12.style.marginTop = "5px";
        //   grab14.style.backgroundImage = "url('/images/lunch_image.png')";
        //   grab4[0].innerHTML = "Party time!";
        //   grab5.style.backgroundImage =" linear-gradient(113deg, #f1a7c5 0%,#fc5eff 40%,#cb52f8 51%,#6e54ec 150%)";
      
        // } else if (grab9) {
        //   grab13.style.fontSize = "17px";
        //   grab13.style.fontFamily = "Josefin Sans";
        //   grab13.style.marginTop = "5px";
        //   grab14.style.backgroundImage = "url('/images/Component 32 – 1.svg')";
        //   grab4[0].innerHTML = "Party time!";
        //   grab5.style.backgroundImage =" linear-gradient(113deg, #f1a7c5 0%,#fc5eff 40%,#cb52f8 51%,#6e54ec 150%)";
      
        // } else {



// digitalClock3();
//}


// }
// let i=[grab6,grab7,grab8,grab9 ];//grab15,grab16,grab17,grab18
// switch(i=0,i.length,i++) {
//   case "grab6":
//         grab15.innerText =grab6.options[grab6.selectedIndex].text;
//         grab10.style.fontSize = "17px";
//         grab10.style.fontFamily = "Josefin Sans";
//         grab10.style.marginTop = "5px";
//         grab14.style.backgroundImage = "url('/images/Component 31 – 1.svg')";
//         grab4[0].innerHTML = "Party time!";
//         grab5.style.backgroundImage =" linear-gradient(113deg, #f1a7c5 0%,#fc5eff 40%,#cb52f8 51%,#6e54ec 150%)"
    
//     break;
//     case "grab7":
//        grab16.innerText = grab7.options[grab7.selectedIndex].text;
//        grab11.style.fontSize = "17px";
//        grab11.style.fontFamily = "Josefin Sans";
//        grab11.style.marginTop = "5px";
//        grab14.style.backgroundImage = "url('/images/Component 31 – 1.svg')";
//        grab4[0].innerHTML = "Party time!";
//        grab5.style.backgroundImage =" linear-gradient(113deg, #f1a7c5 0%,#fc5eff 40%,#cb52f8 51%,#6e54ec 150%)";
  
//   break;
//   case "grab8":
//     grab17.innerText = grab8.options[grab8.selectedIndex].text;
//     grab12.style.fontSize = "17px";
//     grab12.style.fontFamily = "Josefin Sans";
//     grab12.style.marginTop = "5px";
//     grab14.style.backgroundImage = "url(url('/images/lunch_image.png'))";
//     grab4[0].innerHTML = "Party time!";
//     grab5.style.backgroundImage =" linear-gradient(113deg, #f1a7c5 0%,#fc5eff 40%,#cb52f8 51%,#6e54ec 150%)";
  
//   break;
//   case "grab9":
//     grab18.innerText = grab9.options[grab9.selectedIndex].text;
//     grab13.style.fontSize = "17px";
//     grab13.style.fontFamily = "Josefin Sans";
//     grab13.style.marginTop = "5px";
//     grab14.style.backgroundImage = "url(url('/images/Component 30 – 1.svg')";
//     grab4[0].innerHTML = "Party time!";
//     grab5.style.backgroundImage =" linear-gradient(113deg, #f1a7c5 0%,#fc5eff 40%,#cb52f8 51%,#6e54ec 150%)";
      
//   break;
//   default:
//     grab4[0].innerHTML = "Party time!";
//     grab5.style.backgroundImage =" linear-gradient(113deg, #f1a7c5 0%,#fc5eff 40%,#cb52f8 51%,#6e54ec 150%)";
// }
// }



// let grab4 = document.getElementsByClassName("selalarm1");
// let grab5 = document.getElementById("box51");
// let hover1=()=>{
//     grab4[0].innerHTML="Party time!";
//     grab5.style.backgroundImage=" linear-gradient(113deg, #f1a7c5 0%,#fc5eff 40%,#cb52f8 81%,#6e54ec 200%)"

// }
// let hover2=()=>{
//     grab4[0].innerHTML="Set Alarm"
//     grab5.style.backgroundImage=" linear-gradient(113deg, #6e54ec 0%, #cb52f8 40%, #fc5eff 81%, #f1a7c5 100%)"

// }

// let grab6 = document.getElementById("goodmorn");
// let grab7 = document.getElementById("goodaftern");
// let grab8 = document.getElementById("goodeven");
// let grab9 = document.getElementById("goodnigh");
// let grab10 = document.getElementById("uptime1");
// let grab11 = document.getElementById("uptime2");
// let grab12 = document.getElementById("uptime3");
// let grab13 = document.getElementById("uptime4");
// let grab14 = document.getElementById("box111");
// let grab15=document.getElementById('uptime1').innerText = grab6.options[grab6.selectedIndex].text;
// let grab16=document.getElementById('uptime2').innerText = grab7.options[grab7.selectedIndex].text;
// let grab17=document.getElementById('uptime3').innerText = grab8.options[grab8.selectedIndex].text;
// let grab18=document.getElementById('uptime4').innerText = grab9.options[grab9.selectedIndex].text;
