import React, {useState, useEffect} from "react";
import axios from "axios";
import "./CrudCarometro.css"

const ApiCurso = "http://localhost:5121/api/curso";
const ApiAluno = "http://localhost:5121/api/aluno";

const initialState = {
    curso: {id: 0, codCurso: 0, nomeCurso: '', periodo: ''},
    listaCurso: []
}
const initialStateAluno = {
    aluno: { id: 0, ra: '', nome: '', codCurso: 0},
    listaAluno:[]
}

export default function CrudCarometro(){

    const [listaCurso, setListaCurso] = useState(initialState.listaCurso);
    const [listaAluno, setListaAluno] = useState(initialStateAluno.listaAluno);
    const [curso, setCurso] = useState(initialState.curso);

    const dataFromAPIcurso = async()=>{
        await axios(ApiCurso)
        .then((resp)=> setListaCurso(resp.data))
        .catch((err)=>{
            console.log(err);
        });
    }
    useEffect(()=>{
        dataFromAPIcurso()
        console.log(listaCurso)
    },[])

    function aleatoria(qtd){
        let string = '';
        let caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for( var i = 0; i< qtd; i++){
            string += caracteres.charAt(Math.floor(Math.random()*caracteres.length));
        }
        return string;
    }

    const getLista = async (codCurso) => {
        return await axios(ApiAluno)
        .then((resp) => {
            const listaDeAlunos = resp.data;
            return listaDeAlunos.filter(
                (aluno) => aluno.codCurso === codCurso
            );
        })
        .catch((err) => {
            console.log(err);
        });
    }

    const atualizaLista = async(e)=>{
        const codCurso = e.target.value;
        if(e.target.value === ""){
            setListaAluno(initialState.listaAluno);
            setCurso(initialState.curso);
            return
        }
        curso.codCurso = Number(codCurso)
        const listaDeAlunos = await getLista(curso.codCurso)
        if(!Array.isArray(listaDeAlunos)) return

        setListaAluno(listaDeAlunos)
        setCurso(curso)
    }

    return(
        <div>
            <p className="m-4">Carômetro</p>
            <div>
                <label>Curso: </label>
                <select value={curso.codCurso} onChange={e=>{atualizaLista(e)}}>
                    {listaCurso.map((curso)=>
                        <option className="codCurso" value={curso.codCurso}>
                            {curso.nomeCurso} - {curso.periodo} - {curso.codCurso}
                        </option>
                    )}
                </select>
            </div>
            <div className="">
                    <div className="p-10 flex gap-10 flex-wrap justify-center">
                        
                        {listaAluno.map((aluno) => (
                                    <div className="rounded-[1.5rem] flex flex-col flex-wrap justify-center text-left h-[40vh] w-[25vh] shadow-2xl">
                                        <div className="w-11/12 items-center self-center place-items-center">
                                        <img src={`https://avatars.dicebear.com/api/playground/${aleatoria(8)}.svg`}></img>
                                        </div>
                                        <div className="flex flex-col flex-wrap justify-center text-left p-5">
                                        <span>nome: {aluno.nome}</span><br></br>
                                        <span>curso: {aluno.codCurso}</span><br></br>
                                        <span>RA: {aluno.ra}</span>
                                        </div>
                                    </div>
                                ))}
                </div>
            </div>
        </div>
    )


}