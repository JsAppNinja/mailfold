import React from 'react';

class ProductContent extends React.Component {
    render() {

    }
}
class ContactRow extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.contact.name}</td>
            </tr>
        );
    }
}

class ContactTable extends React.Component {
    render() {
      var rows = [];
      this.props.contacts.forEach((contact) => {
            if (contact.name.indexOf(this.props.filterText) === -1) {
                return;
            }
            rows.push(<ContactRow contact={contact} />);
      });
      return (
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      );
    }
  }
  
  class SearchBar extends React.Component {
    constructor(props) {
      super(props);
      this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
    }
    
    handleFilterTextInputChange(e) {
      this.props.onFilterTextInput(e.target.value);
    }
  
    render() {
      return (
        <form>
          <input
            className="form-control"
            type="text"
            placeholder="Search..."
            value={this.props.filterText}
            onChange={this.handleFilterTextInputChange}
          />
        </form>
      );
    }
  }
  
  class FilterableContactTable extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        filterText: ''
      };
      
      this.handleFilterTextInput = this.handleFilterTextInput.bind(this);      
    }
  
    handleFilterTextInput(filterText) {
      this.setState({
        filterText: filterText
      });
    }
    
    render() {
      return (
            <div>
                <h1>Filterable React List</h1>
                <SearchBar
                    filterText={this.state.filterText}
                    onFilterTextInput={this.handleFilterTextInput}
                />
                <ContactTable
                    contacts={this.props.contacts}
                    filterText={this.state.filterText}
                />
            </div>
      );
    }
}


var CONTACTS = [
    {name: 'Tom Jackson', phone: '555-444-333', email: 'tom@gmail.com'},
    {name: 'Mike James', phone: '555-777-888', email: 'mikejames@gmail.com'},
    {name: 'Janet Larson', phone: '555-222-111', email: 'janetlarson@gmail.com'},
    {name: 'Clark Thompson', phone: '555-444-333', email: 'clark123@gmail.com'},
    {name: 'Emma Page', phone: '555-444-333', email: 'emma1page@gmail.com'},

];

ReactDOM.render(
    <FilterableContactTable contacts={CONTACTS} />,
    document.getElementById('container')
);
