let mycalc = (n1:number,n2:number,sign:string) => {
    if(sign=="+"){
console.log(n1+n2)
    }else if(sign=="-"){
console.log(n1-n2)
    }else if(sign=="*"){
        console.log(n1*n2)
    }else if(sign=="/"){
        console.log(n1/n2)
    }else{console.log("incorrect sign")
    }
}
mycalc(10,5,"")