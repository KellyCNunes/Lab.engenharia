console.log('Script exer1_6.js foi carregado');


const Letreiro = () => {
    const [texto, setTexto] = React.useState('');
    const frase = "Venha estudar na Fatec";
    const velocidade = 200; 
  
    React.useEffect(() => {
      let index = 0;
      const intervalo = setInterval(() => {
        setTexto((valorAtual) => valorAtual + frase[index]);
        index++;
        if (index === frase.length) {
          clearInterval(intervalo);
        }
      }, velocidade);
      return () => clearInterval(intervalo);
    }, []);
  
    return (
      <div className="letreiro">
        <p>{texto}</p>
      </div>
    );
  };
  
  const App = () => {
    return (
      <div>
        <Letreiro />
      </div>
    );
  };
  
  ReactDOM.render(<App />, document.getElementById('root'));
  