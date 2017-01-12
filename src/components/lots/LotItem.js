import React from 'react';
import { Link } from 'react-router';
import LotDescr from './LotDescr';

class LotItem extends React.Component {

	constructor() {
		super();
	}

	render() {
		const item = this.props.data;
		const img = "../dist/images/" + item.category.toLowerCase() + ".svg";
		sessionStorage.setItem('lot'+item.id, JSON.stringify(item));

		return (
			<div className="col-md-3">
				<div className="lot" id={"lot"+item.id}>
					<div>
						<Link
							className="lot-a-img"
							to={"/lots/"+item.id}>
							<img className="lot-img" id="" src={img} />
						</Link>
					</div>
					<div>
						<Link className="lot-tit" to={"/lots/"+item.id}> {item.name} </Link>
					</div>
					<div className="lot-cat">{item.category}</div>
				</div>
			</div>
			
		);
	}
}

export default LotItem;