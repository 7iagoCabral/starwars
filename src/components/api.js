class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
     componentDidMount() {
      fetch("https://swapi.dev/api/planets/")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result.items
            });
          },
          // Nota: É importante lidar com os erros aqui
          // em vez de um bloco catch() para não recebermos
          // exceções de erros dos componentes.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
 
    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <ul>
            {items.map(item => (
              <li key={item.id}>
                {item.name} {item.price}
              </li>
            ))}
          </ul>
        );
      }
    }
  }