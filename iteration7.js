document.addEventListener('DOMContentLoaded', () =>{
    
    fetch('https://avatars.githubusercontent.com/u/2?v=4')
    .then(response => {
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    } else {
        return response.blob();
    }
    })
    .then(photo => {
    let place = document.getElementById("repos");
    console.log(place);
    let src = URL.createObjectURL(photo);
    place.innerHTML = `<img src = ${src}>`;
    })
    .catch(e => {
    console.log('There was a problem with fetch: ' + e.message);
    });
    

    (async () => {
        try {
            const response = await fetch('https://api.github.com/users/defunkt/repos', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            const content = await response.json();
            const repos = document.getElementById("repos");
            for (let i = 0; i < content.length; i++) {
                let el = content[i];
                
                let name = el.full_name;
                let update = el.updated_at;
                let description = el.description;
                
                repos.innerHTML += `<h3 >${name}</h3>
                                <p>Ссылка на репозиторий: <a href="https://github.com/${name}">https://github.com/${name}</a> <br/>
                                Описание: ${description} <br/>
                                Последнее обновление: ${update}</p><br>` ;
            }
        }
        catch(err) { console.log('err:', err); }
     })();

        
     

});
