var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var repos = [];

function renderRepos(){
    listElement.innerHTML = '';
    for (repo of repos){
        console.log(repo['name']);
        var repoElement = document.createElement('li');
        var repoText = document.createTextNode(repo['name']);
        repoElement.appendChild(repoText);
        listElement.appendChild(repoElement);
    }
}


function buscarUsuario(){
    var usuario = inputElement.value;
    inputElement.value='';

    axios.get('https://api.github.com/users/'+usuario+'/repos')
    .then(function(response) {
        repos = response['data'];
        renderRepos();
    })
    .catch(function(error) {
        console.warn(error);
    });

}
    
buttonElement.onclick = buscarUsuario;
    