var nasaPictures = JSON.parse(localStorage.getItem("nasaPicture"))
const APIKey = "6AIGbj4jHFCcD7ChEiWMreQx3wbVgxowEsvyWVjz"
var apiURL = `https://api.nasa.gov/planetary/apod?api_key=6AIGbj4jHFCcD7ChEiWMreQx3wbVgxowEsvyWVj`



var titleInput = document.getElementById("title")
var dateInput = document.getElementById("date")
var descriptionInput = document.getElementById("title")


var searchImage = function (data) {
    event.preventDefault()
    $("#main-image").empty()
    var inputNasaVal = titleInput.value
    
}