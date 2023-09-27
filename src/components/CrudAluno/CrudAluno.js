import React, {Component} from "react";
import './CrudAluno.css';
import Main from "../template/Main";

const title = "Cadastro de Alunos"
const Alunos = [
    {'id': 1, 'ra': '22328', 'nome': 'Mayer', 'codCurso': 39},
    {'id': 2, 'ra': '22313', 'nome': 'Vedroni', 'codCurso': 39},
    {'id': 3, 'ra': '22309', 'nome': 'Gustavo', 'codCurso': 39},
    {'id': 4, 'ra': '22316', 'nome': 'Piacente', 'codCurso': 39},
    {'id': 5, 'ra': '21448', 'nome': 'Maia', 'codCurso': 19},
]

export default class CrudAluno extends Component{
    renderTable(){
        return(
            <div className="Listagem">
                <table className="ListaAlunos" id="tbListaAlunos">
                    <thead>
                        <tr className="cabecTabela">
                            <th className="tabTituloRa">RA</th>
                            <th className="tabTituloNome">Nome</th>
                            <th className="tabTituloCurso">Curso</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                {Alunos[0].ra}
                            </td>
                            <td>
                                {Alunos[0].nome}
                            </td>
                            <td>
                                {Alunos[0].codCurso}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }

    render(){
        return(
            <Main title = {title}>
                {this.renderTable()}
            </Main>
        )
    }
} // fecha a classe