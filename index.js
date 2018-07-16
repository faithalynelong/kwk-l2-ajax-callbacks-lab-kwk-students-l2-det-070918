$(document).ready(function (){
});
function(searchRepositories){
  var searchTerms = $('#searchTerms').val()
$.get(`https://api.github.com/search/repositories?q=${searchTerms}`)
  
}