function mycalcu(n1:number,n2:number,sign:string){

    if(sign == "+"){
        console.log(n1 + n2)
    }else if(sign == "-")
    {
        console.log(n1-n2)
    }
    else if(sign == "*"){
        console.log(n1*n2)
    }
    else if(sign == "/"){
        console.log(n1/n2)
    }
    
    else{
        console.log("invalid")
    }
    
}
    
    mycalcu(10,5,"+")
    mycalcu(30,14,"-")
    mycalcu(2,4, "*")
    mycalcu(8,5,"/")
    mycalcu(8,5,"'")
    