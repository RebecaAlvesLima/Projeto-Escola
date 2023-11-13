import React, { Component } from 'react';
import axios from 'axios';
import './CrudCurso.css';
import Main from '../template/Main';

const title = "Cadastro de Cursos";
const urlAPI = "http://localhost:5121/api/curso"

const initialState = {
    curso: {id: 0, codCurso: '', nomeCurso: '', periodo: ''},
    lista: []
}
export default class CrudCurso extends Component(){
    state = {...initialState}

    componentDidMount(){
        axios(urlAPI).then(resp => {
            this.setState({lista: resp.data})
        })
    }

    limpar(){
        this.setState({ curso: initialState.curso });
    }

    salvar(){
        const curso = this.state.curso;
        curso.codCurso = Number(curso.codCurso);
        const metodo = curso.id? 'put': 'post';
        const url = curso.id? `${urlAPI}/${curso.id}`: urlAPI;

        axios[metodo](url, curso).then(resp =>{
            const lista = this.getListaAtualizada(resp.data)
            this.setState({ curso: initialState.curso, lista })
        })
    }

    getListaAtualizada(curso, add = true){
        const lista = this.state.lista.filter(a => a.id !== curso.id);
        if(add)lista.unshift(curso);
        return lista;
    }

    atualizaCampo(event){
        //clonar usuário a partir do state, para não alterar o state diretamente
        const curso = { ...this.state.curso };
        //usar o atributo NAME do input para identificar o campo a ser atualizado
        curso[event.target.name] = event.target.value;
        //atualizar o state
        this.setState({ curso });
    }

    carregar(curso){
        this.setState({curso})
    }

    remover(curso){
        const url = urlAPI + "/" + curso.id;
        if(window.confirm("Confirma remoção do curso: " + curso.ra)){
            console.log("entrou no confirm")
        }
        axios['delete'](url,curso).then(resp =>{
            const lista = this.getListaAtualizada(curso,false)
            this.setState({curso: initialState.curso, lista})
        })
    }

   renderForm(){
        return(
            <div className="inclui-container">
                <label>RA: </label>
                <input type="text"
                        id="ra"
                        placeholder="RA do aluno"
                        className="form-input"
                        name="ra"
                        value={this.state.aluno.ra}
                        onChange={ e => this.atualizaCampo(e)} />

                <label>Nome: </label>
                <input type="text"
                        id="nome"
                        placeholder="Nome do aluno"
                        className="form-input"
                        name="nome"
                        value={this.state.aluno.nome}
                        onChange={ e => this.atualizaCampo(e)} />
                <label>Código do Curso: </label>
                <input type="number"
                        id="codCurso"
                        placeholder="0"
                        className="form-input"
                        name="codCurso"
                        value={this.state.aluno.codCurso}
                        onChange={ e => this.atualizaCampo(e)} />

                <button className="btnSalvar" onClick={e=>this.salvar(e)}>
                        Salvar
                </button>
                <button className="btnCancelar" onClick={e=> this.limpar(e)}>
                    Cancelar
                </button>
                       
            </div>
        )
    }

    renderTable(){
        return(
        <div className="listagem">
            <table className="listaAlunos" id="tblListaAlunos">
                    <thead>
                        <tr className="cabecTabela">
                            <th className="tabTituloRa">Ra</th>
                            <th className="tabTituloNome">Nome</th>
                            <th className="tabTituloCurso">Curso</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.state.lista.map(
                            (aluno) =>
                                <tr key={aluno.id}>
                                    <td>{aluno.ra}</td>
                                    <td>{aluno.nome}</td>
                                    <td>{aluno.codCurso}</td>
                                    <td>
                                        <button onClick={()=> this.carregar(aluno)}>
                                            Altera
                                        </button>
                                        <button onClick={()=> this.remover(aluno)}>
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                        )}
                    </tbody>
            </table>
        </div>
        )
    }
    render(){
        return(
            <Main title={title}>
                {this.renderForm()}
                {this.renderTable()}
            </Main>
        )
    }
}