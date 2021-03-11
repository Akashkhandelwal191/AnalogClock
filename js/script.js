 
 var audio = new Audio('./Morning Alarm.mp3');
 i = 0;
 function changeBackground() {
     if (i == 0) {
         document.body.style.backgroundColor = "black";
         document.getElementById('clockContainer').style.filter = "invert(100%)";
         change(i);

         i = 1;
     }
     else {
         document.body.style.backgroundColor = "#e91e63";
         document.getElementById('clockContainer').style.filter = "invert(0%)";
         change(i);
         document.getElementById('btn').backgroundColor = "black";
         i = 0;
     }
 }
 function change(index) {
     if (index == 0) {
         document.getElementById('text').innerText = " Normal Mode";
     }
     else {
         document.getElementById('text').innerText = "Dark Mode";
     }

 }

 j = 0;
 function changeBackgroundimage() {
     if (j == 0) {
         document.getElementById('clockContainer').style.backgroundImage = "url('./images/Clock23.png')";
         j = 1;
     }
     else {
         document.getElementById('clockContainer').style.backgroundImage = "url('./images/Clock.png')";
         j = 0;
     }

 }

 hour = document.getElementById("hour");
 minute = document.getElementById("minute");
 second = document.getElementById("second");
 setInterval(() => {
     d = new Date();
     htime = d.getHours();
     mtime = d.getMinutes();
     stime = d.getSeconds();
     hrotation = 30 * htime + mtime / 2;
     mrotation = 6 * mtime;
     srotation = 6 * stime;

     hour.style.transform = `rotate(${hrotation}deg)`;
     minute.style.transform = `rotate(${mrotation}deg)`;
     second.style.transform = `rotate(${srotation}deg)`;


 }, 1000);


 if(screen.width > 900)
 {
    var user = prompt("Please Enter Your Name");
    
 }
 if(screen.width <= 900)
 {  var user = undefined;
    document.getElementById("main").innerHTML = `<h1>This Site is Only For Desktop</h1>
                                                 <h1>Sorry For Inconvenience &#128519</h1>
                                                 <h3 class="text-center">Design By Akash Khandelwal &#128526</h3>
                                                 <hr>`;
 }
 
 function realtimeClock() {
     
     var greeting;
     var rtClock = new Date();
     var hours = rtClock.getHours();
     var minutes = rtClock.getMinutes();
     var seconds = rtClock.getSeconds();

     var amPm = (hours < 12) ? "AM" : "PM";
     if(hours<12)
     {
        greeting = "Good Morning";
     }
     else if(hours>=12 && hours<=18)
     {
         greeting = "Good AfternNoon";
     }
     else{
         greeting = "Good Evening";
     }
     if(user == undefined)
     {
         user = " ";
     }
     document.getElementById('showgreeting').innerText = greeting +" "+user;
     document.getElementById('showgreeting2').innerText = greeting +" "+user;

     hours = (hours > 12) ? hours - 12 : hours;

     
    
     hours = ("0" + hours).slice(-2);
     minutes = ("0" + minutes).slice(-2);
     seconds = ("0" + seconds).slice(-2);

     //  Display the Clock
     document.getElementById('time').innerHTML = hours + " : " + minutes + " : " + seconds + " " + amPm;
    
     var arr1 = ["january", "Febuaray", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
     var arr2 = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];

     var date = rtClock.getDate();
     var dayname = rtClock.getDay();
     var month = rtClock.getMonth();
     var Fullyear = rtClock.getFullYear();

     document.getElementById('date').innerHTML = arr2[dayname] + "," + date + " " + arr1[month] + " " + Fullyear;


     var t = setTimeout(realtimeClock, 500);


 }
 
 k = 0;
 let save = document.getElementById('save');
 save.addEventListener("click",function(e){
    
     let ShowAlarmDialog = document.getElementById("ShowAlarmDialog");
     let title = document.getElementById("addtitle").value;
     document.getElementById("ShowTitle").innerText = title;
     let detail = document.getElementById("adddate").value;
     let alarmDate = new Date(detail);
     document.getElementById("currentTime").innerText = alarmDate;
     let nowDate = new Date();
     
     let diff = alarmDate - nowDate;
     document.getElementById('btn2').removeAttribute("data-bs-target");
     document.getElementById('text2').innerText = "Clear Alarm";
     k = 1;
    //  checkAlarm();
    alert("Alarm has been Set");
     if(diff>0)
     {
      myAlarm =  setTimeout(()=>{
         
         document.getElementById("main").style.filter = "blur(5px)";
         ShowAlarmDialog.classList.remove("ShowAlarmDialogArea");
         audio.play();
         audio.loop = true;
         k = 0;

        

        },diff);
     }
      
     
     
 })

 function checkAlarm(){
     if(k == 1)
     {
         let confirmdel  = confirm("Are You Sure Want to Clear Alarm?");
         if(confirmdel == 1)
         {
         k = 0;
         clearTimeout(myAlarm);
         document.getElementById('text2').innerText = "Set Alarm";
         document.getElementById('btn2').setAttribute("data-bs-target","#SetRem");
         }
     }
     
 }