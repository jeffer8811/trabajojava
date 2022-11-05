let figura=prompt("Elija la Figura que decea el AREA:  triangulo, paralelogramo, rectangulo, cuadrado, rombo, cometa, trapecio, circulo");

    let base;
    let altura;
    let radio;
    let diagonalMenor;
    let diagonalMayor;
    let baseAlta;

    switch(figura){
        case "triangulo":
        altura = parseInt(prompt("Altura: "))
        base = parseInt(prompt("Base: "))
        document.write( `{<img src="img/triangulp.png">} 
        El area de triangulo es ${base*altura/2} cm ` )
    
    break
        case "paralelogramo":
        altura = parseInt(prompt("Altura: "))
        base = parseInt(prompt("Base: "))
        document.write( `{<img src="img/paralelogramo.jpg"/>} 
        El area de Paralelogramo es ${base*altura} cm ` )
    
    break
        case "rectangulo":
        altura = parseInt(prompt("Altura: "))
        base = parseInt(prompt("Base: "))
        document.write( `{<img src="img/rectc3a1ngulo.bmp"/>} 
        El area de Rectángulo es ${base*altura} cm ` )

    break
        case "cuadrado":
        altura = parseInt(prompt("Altura: "))
        document.write( `{<img src="img/descarga.png"/>} 
        El area de Cuatrado es ${altura/2} cm ` )
    
    break
        case "rombo":
        altura = parseInt(prompt("Altura: "))
        base = parseInt(prompt("Base: "))
        document.write( `{<img src="img/rombo.jpg"/>} 
        El area de Rombo es ${base*altura} cm ` )
    
    break
        case "cometa":
        diagonalMayor = parseInt(prompt("DiagramaMayor: "))
        diagonalMenor = parseInt(prompt("DiagramaMenor: "))
        
        document.write( `{<img src="img/cometa.png"/>} 
        El area de Cometa es ${diagonalMayor*diagonalMenor/2} cm ` )
    
    break
        case "trapecio":
        baseAlta = parseInt(prompt(" BaseAlta: "))
        base = parseInt(prompt("Base: "))
        altura = parseInt(prompt("Altura: "))
        document.write( `{<img src="img/trapecio.jpg"/>} 
        El area de Trapecio es ${base+baseAlta/2*altura} cm ` )
    
    break
        case "circulo":
        radio = parseInt(prompt("Radio: "))
        radio = parseInt(prompt("Raiz: "))
        document.write( `{<img src="img/circulo.png"/>} 
        El area de Círculo es ${radio*radio} cm ` )
    }