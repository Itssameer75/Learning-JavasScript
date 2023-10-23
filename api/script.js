const url = "https://randomuser.me/api/"
const xhr = new XMLHttpRequest()

xhr.open("GET", url)
xhr.onreadystatechange = function(){
    console.log(xhr.readyState);
    if (xhr.readyState === 4) {
        const data = JSON.parse(this.responseText)
        console.log(data.info.page);
    }
}
xhr.send()
