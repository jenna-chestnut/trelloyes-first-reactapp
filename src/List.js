import React from 'react';
import Card from './Card';
import './List.css';

class List extends React.Component {
    render() {
        const cardsList = this.props.cards.map(card => 
            <Card key={card.id} 
            title={card.title} 
            content={card.content}/>)
        return <section className="List">
        <header className="List-header">
          <h2>{this.props.header}</h2>
        </header>
        <div className="List-cards">
        {cardsList}
        <button type="button" className="List-add-button">
              + Add Random Card
        </button>
        </div>
        </section>
    }
}

export default List;