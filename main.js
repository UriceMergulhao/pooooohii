function preload(){

}
function setup(){
    canvas=createCnavas(300,300);
    canvas.createcenter();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on('pose,'gotPoses);


    
}
function modelloaded(){
    console.log('posenet is stared')



}
 
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        console.log("nose x= "+ results[0].pose.nose.x);
        console.log("nose y= "+ results[0].pose.nose.y);
    }
        
    
    
}



function draw(){
    image(video,0,0,300,300);


}



function takesnapshot(){
    save('imgfiltered.jpeg');
}