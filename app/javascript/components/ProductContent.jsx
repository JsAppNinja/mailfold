import React from 'react';
import 'react-listbox/dist/react-listbox.css';

class ProductContent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			productId: 0
		}
	}

	handleSync = (e, index)=>{
		e.preventDefault();
		if (index > 0) {
			this.setState({ productId: index });
		}
	};

	render() {
		const { products } = this.props;
		const { productId } = this.state;
		return(
			<div className="ui container content">
				<div className="ui raised segment">
					<div className="ui two column grid">
						<div className="column cframe">
							<h3>Customer Address</h3>
							<div className="ui divided link items">
								{ products.map((product, index) => {
									return (
										<a className="item" href="#" onClick={(e) => this.handleSync(e, index)}>
											{product[3]}
										</a>
									);
								})}
							</div>
						</div>
						<div className="column cframe">
							<h3>Customer Information</h3>
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
									<tr>
										<td>{products[productId][0]}</td>
										<td>{products[productId][1]}</td>
										<td>{products[productId][2]}</td>
										<td>{products[productId][3]}</td>
										<td>{products[productId][4]}</td>
										<td>{products[productId][5]}</td>
										<td>{products[productId][6]}</td>
									</tr>
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
