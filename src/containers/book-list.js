import React, {Component} from 'react';
import { connect } from 'react-redux';

 class BookList extends Component {
    renderList(){
        return this.props.books.map((book)=> {
            return (
                <li key={book.title} className="list-group-item">{ book.title }</li>
            )
        })
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps( state ){
    //whatever is returned here will appear as props inside booklist
    return {
        books: state.books
    }
}
// connect function takes a function and component - produces a container(aware of state)
export default connect(mapStateToProps)(BookList);