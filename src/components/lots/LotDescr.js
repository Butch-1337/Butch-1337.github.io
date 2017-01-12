import React from 'react';
import Header from '../Header';

class LotDescr extends React.Component{

	constructor() {
		super();
	}

	render(){
		let id = +this.props.params.id;
		const lotData = JSON.parse(sessionStorage.getItem('lot'+id));
		const img = "../dist/images/" + lotData.category.toLowerCase() + ".svg";
		return(
			<div> 
				<Header />
				<div className="lotBg">
					<section id = "lotDescr" className="container">
						<h2>Описание</h2>
						<div className="row lot-d">
							<div className="col-md-3">
								<img className="lot-d-img" id="" src={img} />
							</div>
							<div className="col-md-9">
								<h3 className="lot-d-tit">
									{lotData.name}
								</h3>
								<div className="lot-d-descr" id="">
									{
										lotData.description.map((elem, i) =>
											<div key={i} className="row lot-d-row">
												<div className="col-md-3">{elem[0]}</div>
												<div className="col-md-9">
													{elem[1].split('\n').map((ln, i) =>
														<p key={i}>{ln}</p>
													)}
												</div>
											</div>
										)
									}
									<div className="row lot-d-row">
										<div className="col-md-3 lot-d-price-d">Стартовая цена:</div>
										<div className="col-md-9 lot-d-price">{lotData.startprice}</div>
									</div>
								</div>

							</div>
						</div>
					</section>
				</div>
			</div>
		);
	}
};

export default LotDescr;
