Webcam.set({
    width:300,
    height:300,
    image_format:'png',
    png_quality:'90',
    constraints:{
  facingMode:'environment'
    }
});

Webcam.attach("#camera");

function capture (){
  Webcam.snap(function(pic){
  document.getElementById("snapshot").innerHTML=`<img id="snap" src=${pic}>`;
  })


}

console.log("ml5 version=",ml5.version);

Identifier=ml5.imageClassifier("MobileNet",modelloaded);

function modelloaded(){
  console.log("modelloaded");
}

function Identify() {
  img=document.getElementById("snap");
 Identifier.classify(img,getresults);
}

function getresults(error,results){
  if(error){
    console.log(error);
  
  }

  else{
    console.log(results);
    document.getElementById("output").innerHTML=results[0].label;
  }
}

