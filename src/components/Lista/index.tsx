import React from "react";
import Item from "./item";
import style from './Lista.module.scss'

export default function Lista(){
    const tarefas = [{
        tarefa:"React",
        tempo:"02:00:00"
      }, {
        tarefa:"JavaScript",
        tempo:"01:00:00"
      }]
    return(
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item,index) =>(
                    <Item
                        key={index}
                        tarefa={item.tarefa}
                        tempo = {item.tempo}
                    />
                ))}
            </ul>
            
        </aside>
    )
}