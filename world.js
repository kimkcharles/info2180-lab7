$(document).ready(function(){
    let httpRequest;
    let searchButton  = $("#lookup");
    let searchBar     = $("#country");
    let resultDiv     = $("#result");
    var lookup=document.getElementById("country");
    
    
    searchButton.click(function(element){
        element.preventDefault();
        
        var searchWord=lookup.value.toLocaleLowerCase().trim();
        var url= `world.php/?country=${searchWord}`;
        
        console.log(searchWord);
        httpRequest = new XMLHttpRequest();
        httpRequest.onreadystatechange = getCountryInfo;
        httpRequest.open("GET", url);
        httpRequest.send();
        
    });
    
    function getCountryInfo(){
        if (httpRequest.readyState === httpRequest.DONE){
            if(httpRequest.status  === 200){
                //var res=striptags(response);
                response = httpRequest.responseText;
                //var res=response.replace(/(<([^>]+)>)/ig,"");
                //alert(res);
            
                result.innerHTML=response;
            
            } else {
                alert('There was a problem with the request.');
            }
            }
        }
    
    
    // function striptags(str){
    //     str = str.replace("<p>","");
    //     str = str.replace("</p>","\n");
    //     str = str.replace("<h3>","");
    //     str = str.replace("</h3>","\n");
    //     return str;
    // }
    
})