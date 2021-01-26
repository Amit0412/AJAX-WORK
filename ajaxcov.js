<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1 id="a">This is Ajax.</h1>
    <p id="b"></p>
    <button id="c">Click me</button>
    <script>
        let d = document.getElementById("c")
        d.addEventListener('click', clicked)
        function clicked() {
            let xhr = new XMLHttpRequest()
            xhr.open('GET', "https://api.covid19api.com/summary", true)
            //xhr.getResponseHeader('Content-type', 'application/json');
            xhr.onprogress = function () {
                console.log("on going process")
            }
            xhr.onload = function () {
                if (xhr.status == 200) {
                    let mp = this.responseText
                    console.log(mp)
                    document.getElementById("b").innerHTML = mp;
                }
                else {
                    console.log("error")
                }
            }
            //let param=`{"name":"OS","salary":"740","age":"25"}`
        xhr.send()
        }
    

    </script>
</body>
</html>
