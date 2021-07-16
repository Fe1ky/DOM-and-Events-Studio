// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load', function(){
    console.log('the page has loaded!');
    takeoff.addEventListener("click", function(){
        //console.log('takeoff!');
        if(window.confirm("Confirm that the shuttle is ready for takeoff.")){
            console.log('Ready!')
            document.getElementById('flightStatus').innerHTML = "Shuttle in flight."
            document.getElementById('shuttleBackground').style.backgroundColor = 'blue'
            document.getElementById('spaceShuttleHeight').innerHTML = Number(document.getElementById('spaceShuttleHeight').innerText)
 + 10000
        }

    });
    landing.addEventListener("click", function(){
        window.alert("The shuttle is landing. Landing gear engaged.")
        document.getElementById('flightStatus').innerHTML = "The shuttle has landed."
        document.getElementById('shuttleBackground').style.backgroundColor = 'green'
        document.getElementById('spaceShuttleHeight').innerHTML = Number(document.getElementById('spaceShuttleHeight').innerText)
        - 10000
    });

    missionAbort.addEventListener("click", function(){
        if(window.confirm("Confirm that you want to abort the mission.")){
            document.getElementById('flightStatus').innerHTML = "Mission aborted."
            document.getElementById('shuttleBackground').style.backgroundColor = 'green'
            document.getElementById('spaceShuttleHeight').innerHTML = 0

        }
    });
  
    let bottom = 0
    up.addEventListener("click", function(){
        bottom = bottom+10
        document.getElementById('rocket').style.bottom = `${bottom}px`; 
        document.getElementById('spaceShuttleHeight').innerHTML = Number(document.getElementById('spaceShuttleHeight').innerText) + 10000
    });
    down.addEventListener("click", function(){
        bottom = bottom-10
        document.getElementById('rocket').style.bottom = `${bottom}px`; 
        document.getElementById('spaceShuttleHeight').innerHTML = Number(document.getElementById('spaceShuttleHeight').innerText) - 10000
    });
    let side = 0 
    right.addEventListener("click", function(){
        side = side+10
        document.getElementById('rocket').style.right = `${side}px`; 
        
    });
    left.addEventListener("click", function(){
        side = side-10
        document.getElementById('rocket').style.right = `${side}px`; 
        
    });

});