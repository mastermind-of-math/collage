var SpeechRecognition = window.webkitSpeechRecognition;
var recognize = new SpeechRecognition();
var number = 1;
function start(){
        document.getElementById("textbox").innerHTML = "";
        recognize.start()
}
camera = document.getElementById("camera");
recognize.onresult = function(event){
    console.log(event)
    var result = event.results[0][0].transcript;
    console.log(result);
    document.getElementById("textbox").innerHTML = result;
    if(result == "take my selfie"){
        Webcam.set({
            width:500,
            height:400,
            image_format : 'jpeg',
            jpeg_quality:90
        });
        Webcam.attach(camera);
        speak();
    }
} 

function speak(){
    var synth = window.speechSynthesis;
    speak_data = "Taking your next Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    setTimeout(take_snapshot(), 5000);
}

function take_snapshot(){
    Webcam.snap(function(data_uri){
            document.getElementById("result1").innerHTML = '<img id="RESULTONE" src="' + data_uri + '">';
    })
    window.speechSynthesis.speak(new SpeechSynthesisUtterance("Taking your next Selfie in 5 seconds"));
    setTimeout(take_snapshot2(), 5000);
}

function take_snapshot2(){
    Webcam.snap(function(data_uri){
            document.getElementById("result2").innerHTML = '<img id="RESULTTWO" src="' + data_uri + '">';
    })
    window.speechSynthesis.speak(new SpeechSynthesisUtterance("Taking your next Selfie in 5 seconds"));
    setTimeout(take_snapshot3(), 5000);
}

function take_snapshot3(){
    Webcam.snap(function(data_uri){
            document.getElementById("result3").innerHTML = '<img id="RESULTTHREE" src="' + data_uri + '">';
    })
    
}