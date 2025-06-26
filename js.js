    var start = new Date().getTime();
                 function randomColor(){
                var hex = '0123456789ABCDEF'; //hex colors range
                var color = '#';
                for(let i=0;i<6;i++){
                    color += hex[Math.floor(Math.random()*16)];
                }
                return color;
                }
                function m(){
                    var l=Math.random()*300;
                    var t=Math.random()*300;
                    var wh=Math.random()*300;
                    document.getElementById("d").style.left=l;
                    document.getElementById("d").style.top=t;
                    document.getElementById("d").style.width=wh;
                    document.getElementById("d").style.height=wh;
                    document.getElementById("d").style.display="block";
                    document.getElementById("d").style.backgroundColor=randomColor();
                    start = new Date().getTime();
                }
                m();
               
                document.getElementById("d").onclick=function(){
                    document.getElementById("d").style.display="none";
                    var end = new Date().getTime();
                    var time = (end - start)/1000;
                    alert(time);
                    m();
                }