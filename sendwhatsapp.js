function setLink(){
    var phonenumber = ''; //insert phone number (no +), example: 5411123456789
    var txt = document.getElementById('form-text'); // text area id;
    txt = txt.value;
    var txtencoded = encodeURIComponent(txt);
    var link = `https://wa.me/${phonenumber}?text=${txtencoded}`;
    var button = document.getElementById("whatsappLink");// 'send' link id
    button.setAttribute("href", link);
}
