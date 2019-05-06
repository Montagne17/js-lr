
function Mont() { 
    return new Promise((resolve,reject)=>{ 
    var req = new XMLHttpRequest(); 
    req.open('GET', 'http://www.omdbapi.com/?&apikey=202de9b6&s=star+wars', false); 
    req.send(null); 
    if(req.status!=200) ()=>reject(()=>console.log("Ошибка")); 
    let result = JSON.parse(req.responseText).Search; 
    resolve(result); 
    console.log(result); 
    }); 
    } 
    Mont() 
    .then(result=>render(result)) 
    .catch(e => console.log(e)); 
    
    function render(movieList) { 
    let movie = document.getElementById('movies'); 
    movieList.forEach(item => { 
    let img = document.createElement('img'); 
    img.src = item.Poster; 
    movie.appendChild(img); 
    }); 
    }