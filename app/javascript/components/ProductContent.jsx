import React from 'react';
import 'react-listbox/dist/react-listbox.css';

class ProductContent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			productId: null
		}
	}

	handleSync(index) {
		console.log("test----")
		if (index > 0) {
			this.setState({ productId: index });
		}
	}

	render() {
		const { products } = this.props;
		const { productId } = this.state;
		return(
			<div className="ui container content">
				<div className="ui raised segment">
						Customer Address
					<div className="ui two column grid">
						<div className="column">
							<div className="ui divided link items">
								{ products.map((product, index) => {
									return (
										<a className="item" href="#">
											{product[3]}
										</a>
									);
								})}
							</div>
						</div>
						<div className="column">
						<table className='table table-bordered table-condensed table-striped table-hover'>
							<thead>
								<tr>
									<th>First</th>
									<th>Middle</th>
									<th>Last</th>
									<th>Address</th>
									<th>City</th>
									<th>State</th>
									<th>Zip</th>
								</tr>
							</thead>
							<tbody>
								{ products.map((product, index) => {
									return (
										<tr>
											<td>{products[index][0]}</td>
											<td>{products[index][1]}</td>
											<td>{products[index][2]}</td>
											<td>{products[index][3]}</td>
											<td>{products[index][4]}</td>
											<td>{products[index][5]}</td>
											<td>{products[index][6]}</td>
										</tr>
									);
								})}
							</tbody>
						</table>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ProductContent;
