import React from 'react';
// import ListBox from 'react-listbox';
import 'react-listbox/dist/react-listbox.css';

class ProductContent extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<ul>
				<li> Label1 </li>
				<li> Label2 </li>
				<li> Label3 </li>			
			</ul>
		);
    }
}

export default ProductContent;