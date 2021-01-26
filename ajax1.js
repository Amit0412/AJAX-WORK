<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AJAX PRACTISE</title>
</head>
<body>
    <h1>Sample ajax example</h1>
    <p id="s"></p>
    <button id="a" class="b">Click me</button>
    <script>
        //ALL ABOUT GET REQUEST
        let r=document.getElementById("a")
        r.addEventListener('click',clicked)
        function clicked()
        {
            //Step 1 create xhr object.
            let xhr=new XMLHttpRequest();

            //Describe the request
            xhr.open('GET',"sample.java",true)

            //Try various xhr functions.
            xhr.onprogress=function()
            {
                console.log("process under going")
            }
            
            //When response ready
            xhr.onload=function()
            {
                if(this.status==200)
                {
                    let fc=this.responseText;
                    console.log(fc)
                    let fd=document.getElementById("s")
                    fd.innerHTML=fc;
                }
                
                
            }
            //send the request.
            xhr.send()
        }
    </script>
</body>
</html>
