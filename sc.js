function check(){
    let n1=document.getElementById("name1").value
    let n2=document.getElementById("name2").value
    let ch1=[];
    for(let i=0;i<n1.length;i++){
        ch1.push(n1.charAt(i));
    }
    let ch2=[];
    for(let i=0;i<n2.length;i++){
        ch2.push(n2.charAt(i));
    }
    let count=0;
    for(let i=0;i<n1.length;i++){
        for(let j=0;j<n2.length;j++){
            if(ch1[i]===ch2[j]){
                ch1[i]='%';
                ch2[j]='^';
                count++;
            }
        }
    }
    let c1=(n1.length-count)+(n2.length-count);
    let f=['f','l','a','m','e','s'];
        let v=0;
        for(let i=0;i<5;i++){
            for(let j=1;j<=c1;j++){
                if(f[v]!='^'){
                    if(j==c1){
                        f[v]='^';
                    }
                    v++;
                }
                else{
                    j--;
                    v++;
                }
                if(v==6){
                    v=0;
                }
            }
        }
        let ch='9';
        for(let i=0;i<6;i++){
            if(f[i]!='^'){
                ch=f[i];
                break;
            }
        }
        switch(ch){
            case 'f':
                document.getElementById("res").textContent="friend😍";
                break;
            
            case 'l':
                document.getElementById("res").textContent="love❤️";
                break;
            
            case 'a':
                document.getElementById("res").textContent="affection🥰";
                break;
            
            case 'm':
                document.getElementById("res").textContent="Marrige😍";
                break;
            
            case 'e':
                document.getElementById("res").textContent="enemy👹";
                break;
            
            case 's':
                document.getElementById("res").textContent="sister👨‍👩‍👧‍👦";
                break;
        }
        document.getElementById("res").style.backgroundColor="#ff81e8"
    
}
