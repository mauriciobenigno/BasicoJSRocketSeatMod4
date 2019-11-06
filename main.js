function checaIdade(idade)
{
    return new Promise(function(resolve, reject)
    {
        if(idade > 18)
        {
            resolve();
        }
        else{
            reject();
        }
    });
}


checaIdade(17)
    .then(function(response) {
        console.log("Maior que 18");
    })
    .catch(function(error) {
        console.warn("Menor que 18");
    });
