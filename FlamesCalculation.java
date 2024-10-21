import java.util.*;
public class FlamesCalculation {
    public static void main(String [] args){
        Scanner x=new Scanner(System.in);
        System.out.println("Enter 1 st person name");
        String first=x.nextLine();
        System.out.println("Enter 2 st person name");
        String sec=x.nextLine();
        int count=0;
        char ch1[]=first.toCharArray();
        char ch2[]=sec.toCharArray();
        for(int i=0;i<ch1.length;i++){
            for(int j=0;j<ch2.length;j++){
                if(ch1[i]==ch2[j]){
                    ch1[i]='%';
                    ch2[j]='^';
                    count++;
                    break;
                }
            }
        }
        int c1=(ch1.length-count)+(ch2.length-count);
        char f[]={'f','l','a','m','e','s'};
        int v=0;
        for(int i=0;i<5;i++){
            for(int j=1;j<=c1;j++){
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
        char ch='1';
        for(int i=0;i<6;i++){
            if(f[i]!='^'){
                ch=f[i];
                break;
            }
        }
        switch(ch){
            case 'f':
                System.out.println("Friend");
                break;
            
            case 'l':
                System.out.println("Love");
                break;
            
            case 'a':
                System.out.println("Affection");
                break;
            
            case 'm':
                System.out.println("Marriage");
                break;
            
            case 'e':
                System.out.println("Enemy");
                break;
            
            case 's':
                System.out.println("Friend");
                break;
        }
    }
}
