function christmasCountDown(){
    const christmasDate = new Date("December 25, 2023 00:00"); //создали константу для даты Рождества //December 25, 2023 00:00:00 April 24, 2023 14:24
    const now = new Date(); //создали константу для текущего момента времени (оно определяется само благодаря методу new Date())
    
    const difference = christmasDate - now; //создали константу для разницы, чтобы считать сколько дней от сегодня до рождества 
    //console.log(difference); если это вывести на консоль, то увидим эту разницу в милисекундах. JS считает все в них. Дальше переводим =>

    //Создаем константы для перевода всего в милисекунды
    const msInSeconds = 1000;
    const msInMinutes = 1000 * 60 ;
    const msInHours = 1000 * 60 * 60;
    const msInDays = 1000 * 60 * 60 * 24;
    //console.log(msInSeconds, msInMinutes, msInHours, msInDays)

    //Высчитываем количество оставшихся дней
    const displayDay = Math.floor(difference / msInDays);  // Math.floor округляет вниз до ближайщего целого  console.log(displayDay);
    document.querySelector(".days").textContent = displayDay; //помещаем результат в тег с классом .days

    //Высчитываем количество оставшихся часов
    const displayHour = Math.floor( (difference % msInDays) / msInHours ); // Сначала забираем остаток милисекунд от деления с остатком, делим на часы и округляем вниз
    document.querySelector(".hours").textContent = displayHour; 

    //Высчитываем количество оставшихся минут
    const displayMinutes = Math.floor( (difference % msInHours) / msInMinutes ); //по аналогии сверху
    document.querySelector(".minutes").textContent = displayMinutes;

    //Высчитываем количество оставшихся секунд
    const displaySeconds = Math.floor( (difference % msInMinutes) / msInSeconds );
    document.querySelector(".seconds").textContent = displaySeconds;

    //Теперь мы хотим, чтобы время менялось не при обновлении страницы, а ДИНАМИЧНО =>> Применяем метод SetInterval()
    //setInterval(christmasCountDown, 1000);

    //Теперь мы хотим, чтобы после события счетчик остановился и отобразились нули
    if (difference <= 0 ){
        document.querySelector(".days").textContent = 0;
        document.querySelector(".hours").textContent = 0;
        document.querySelector(".minutes").textContent = 0;
        document.querySelector(".seconds").textContent = 0;
        clearInterval(timeID); //очищаем счетчик, когда событие начтупит
        merryChristmas();
    }
}
let timeID = setInterval(christmasCountDown,1000); //ввели вспомогательную переменную


//Меняем заголовок, когда счетчик остановится

function merryChristmas(){
    const heading = document.querySelector("h1");
    heading.textContent = "Merry Christmas!!! Ho! Ho! Ho!";
    heading.classList.add("red");
}

//Привязываем кнопку к музыке
//для того, чтобы кнопка срабатывала без ошибки в консоли, то после     <title>Document</title> помещаем      <link rel="icon" href="data:,">

const button = document.querySelector("#mybutton");
const audio = document.querySelector("#myaudio")
const buttonOff = document.querySelector("#mybuttonOff")
button.addEventListener("click", function(){  //при клике песня будет проигрываться, при повторном нажатии останавливаться
    document.querySelector("#myaudio").play()

   /* if (audio.paused){ //этот код для нажатия на одну и ту же кнопку
        audio.play();
    }
    else{
        audio.pause();
    }*/
})
buttonOff.addEventListener("click", function() { //ставим на паузу песню
    document.querySelector("#myaudio").pause();
})


