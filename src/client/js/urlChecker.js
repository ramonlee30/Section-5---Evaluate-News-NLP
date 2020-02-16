function checkForURL(inputText) {
    let Rgex = RegExp('^(http|https):\/\/')
    if(Rgex.test(inputText)) {
        return true
    } else {
        alert("Enter valid url. Site must start with http(s)://");
        return false
    }
}

export { checkForURL }