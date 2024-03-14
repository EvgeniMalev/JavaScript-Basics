   function forLoop(input) {
    
        let targetWord = input[0];
        let sum = 0;	

        for (let index = 0; index < targetWord.length; index++){

             let currentSymbol = targetWord[index];
   
             switch(currentSymbol){
			     case 'a':  sum -= 1; break;
				 case 'e':  sum -= 2; break;
				 case 'i':  sum -= 3; break;
	             case 'o':  sum -= 4; break;
				 case 'u':  sum -= 5; break;
				 case 'b':  sum += 2; break;
				 case 'c':  sum += 2; break;
				 case 'd':  sum += 2; break;
	             case 'f':  sum += 2; break;
				 case 'g':  sum += 2; break;
				 case 'h':  sum += 2; break;
				 case 'j':  sum += 2; break;
				 case 'k':  sum += 2; break;
	             case 'l':  sum += 2; break;
				 case 'm':  sum += 2; break;
				 case 'n':  sum += 2; break;
				 case 'p':  sum += 2; break;
				 case 'q':  sum += 2; break;
				 case 'r':  sum += 2; break;
				 case 's':  sum += 2; break;
	             case 't':  sum += 2; break;
				 case 'v':  sum += 2; break;
				 case 'w':  sum += 2; break;
	             case 'x':  sum += 2; break;
				 case 'z':  sum += 2; break;
			  }
         }
         console.log(sum);
}
forLoop(["united"]);
