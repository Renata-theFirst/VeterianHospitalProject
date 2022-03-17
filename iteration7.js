document.addEventListener('DOMContentLoaded', () =>{
    
    // let response = fetch('https://api.github.com/users/defunkt');
    // if (!response.ok) {
    //     console.log(response.body);
    // }

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
                
                repos.innerHTML += `<h5>${name}</h5>
                                <p>Ссылка на репозиторий: <a href="https://github.com/${name}">https://github.com/${name}</a> <br/>
                                Описание: ${description} <br/>
                                Последнее обновление: ${update}</p> <br>` ;
            }
        }
        catch(err) { console.log('err:', err); }
     })();

        
     

});
