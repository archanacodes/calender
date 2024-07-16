function achu(){
    var a=document.getElementById("o").value
var x=document.getElementById("q").value
var xx=document.getElementById("l").value

        var b=x-1;
           var c=xx-1;    
        var d=parseInt(c)%400;
        var e=parseInt(d)%100;
        var f=parseInt(d)-parseInt(e);
        var h=parseInt(e);
        
        var m=[3,0,3,2,3,2,3,3,2,3,2,3];
        var day=["Sunday","Monday","Tuesady","Wednesday","Thursday","Friday","Saturday"];
        
        
        if(parseInt(xx)%4==0 && parseInt(xx)%100!=0){
            m[1]=1;
        }
        else if(parseInt(xx)%400==0){
            m[1]=1;
        }
        else{
            m[1]=0;
        }
        
        
        var g=0;
        if(parseInt(f)==100){
            g=5;
        }
        else if(parseInt(f)==200){
            g=3;
        }
        else if(parseInt(f)==300){
            g=1;
        }
        else{}
        
        
        var i=parseInt(h)/4;
        var j=parseInt(h)-parseInt(i);
        var k=(parseInt(i)*2)+(parseInt(j)*1);
        
        
        var sum=0;
        for(var p=0;p<b;p++){
            sum=sum+m[parseInt(p)];
        }
        
        var y=(parseInt(g)+parseInt(k)+parseInt(sum)+parseInt(a))%7;
        
      
        var w=day[parseInt(y)];
       
        document.getElementById("xe").innerHTML=w
    }   
        
    
