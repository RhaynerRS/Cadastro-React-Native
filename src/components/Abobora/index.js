

export function Abobora(){
    
    function jorge(gato){
        console.log("Anna Maria gosta de abobora");
    }

    const jorge2 = ()=>{ /* arrow function (jeito diferente de escrever funcao) */
        console.log("Anna Maria gosta de abobora");
    }
    const jorge3 =  function (){ /* arrow function (jeito diferente de escrever funcao) */
        console.log("Anna Maria gosta de abobora");
    }

    return(
        <button onClick={()=>jorge("gato")}> Clique em mim! </button>
    );
}