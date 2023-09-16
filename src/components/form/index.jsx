import { useState } from "react"

const Formulario = () => {
    let [altura, setAltura] = useState(0);
    let [peso, setPeso] = useState(0);

    const calculaIMC = () => {
        const IMC = (peso / (altura * altura));
        let clasificacion = "";


        if (IMC < 16.9) {
            clasificacion = <p>Muito abaixo do peso</p>;
        } else if (IMC >= 17 && IMC <= 18.4) {
            clasificacion = <p>Abaixo do peso</p>;
        } else if (IMC >= 18.5 && IMC <= 24.9) {
            clasificacion = <p>Peso normal</p>;
        } else if (IMC >= 25 && IMC <= 29.9) {
            clasificacion = <p>Acima do peso</p>;
        } else if (IMC >= 30 && IMC <= 34.9) {
            clasificacion = <p>Obesidade grau I</p>;
        } else if (IMC >= 35 && IMC <= 40) {
            clasificacion = <p>Obesidade grau II</p>;
        } else if (IMC > 40) {
            clasificacion = <p>Obesidade grau III</p>;
        } else {
            clasificacion = <p>Há algo de errado. Confira o peso e altura informados</p>;
        }
        const IMCFormatado = parseFloat(IMC.toPrecision(3));
        return {IMC:IMCFormatado, clasificacion};
    }
    const resultadoIMC = calculaIMC();



    return (
        <>
            <form action="">
                <input type="number" placeholder="Adicione a altura desejada" onChange={evento => setAltura(parseFloat(evento.target.value))} /><br />
                <input type="number" placeholder="Adicione o peso desejado" onChange={evento => setPeso(parseFloat(evento.target.value))} />
            </form>

            <tr>
                <td>Altura</td>
                <td>{altura}</td>
            </tr>
            <tr>
                <td>peso</td>
                <td>{peso}</td>
            </tr>
            <tr>
                <td>IMC</td>
                <td>{resultadoIMC.IMC}</td>
            </tr>
            <tr>
                <td>Clasificacion</td>
                <td>{resultadoIMC.clasificacion}</td>
            </tr>

        </>
    )

}

export default Formulario