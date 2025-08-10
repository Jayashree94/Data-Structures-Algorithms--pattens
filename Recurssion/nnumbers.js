const sumoffirstnnumbers =(num) =>{

    if (num===0) return 0;
    return num + sumoffirstnnumbers(num-1);


}


sumoffirstnnumbers(10);