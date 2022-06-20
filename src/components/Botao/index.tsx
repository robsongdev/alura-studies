import style from './Botao.module.scss';

export default function Botao (props:{children:string}){
    
    return (
        <button className={style.botao}>
            {props.children}
        </button>
    )

}


// export default class Botao extends React.Component <{children:string}>  {
//     render() {
//         return (
//             <button className={style.botao}>
//                 {this.props.children}
//             </button>
//         )
//     }
// }