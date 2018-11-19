$(document).ready(function(){
    let httpRequest;
    let searchBtn = $("#lookup");
    // let lookup_word = $("#country");
    let results = $("#result");
    let checkbox = $("#checkbox");
    var lookup = document.getElementById("country");
    var response;
    var url;
    var searchWord;
    
    results.html("<h2>RESULTS<h2>");
    checkbox.prop('checked', false);
    
    searchBtn.click(function(element){
        element.preventDefault();
        if(checkbox.prop("checked")==true){
            lookup.value="";
            url=`world.php?all=true`;
            
        }else{
            
            searchWord=lookup.value.toLocaleLowerCase().trim();
            url= `world.php/?country=${searchWord}`;
        }
        
        httpRequest = new XMLHttpRequest();
        httpRequest.onreadystatechange = getCountryInfo;
        httpRequest.open("GET", url);
        httpRequest.send();
        
    });
    
    function getCountryInfo(){
        if (httpRequest.readyState === httpRequest.DONE){
            if(httpRequest.status  === 200){
                 $(results).empty();
                response = httpRequest.responseText;
                if(response.includes("<ul></ul>")){
                    results.html("<h2>NO RESULTS FOUND!<h2>");
                }else{
                    results.html(`<h2>RESULTS</h2>${response}`);
                }
            } else {
                alert('There was a problem with the request.');
            }
        }
    }
    
    

    
})