import React from 'react';
import List from './List';
import './App.css';

class App extends React.Component {
  render() {
    let store = this.props.store;

    const listOf = this.props.store.lists.map(item =>
      <List key={item.id}
        header={item.header}
        cards={item.cardIds.map(card =>
          store.allCards[card]
        )}
      />
    )
    return <main className="App">
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        {listOf}
      </div></main>
  }
}

export default App;
