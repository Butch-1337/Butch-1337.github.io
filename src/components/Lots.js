import React, { Component } from 'react';
import Header from './Header';
import LotItem from './lots/LotItem';
import load from './services/load';

class Lots extends Component {
  
    constructor() {
        super();
        
        this.state = {
            lotsData: [],
            category: 'All',
            brand: 'All'
        };

        this.loadData();
    }

    loadData() {
      load('../dist/mockdata/tech.json').then(data => {
        this.setState({
          lotsData: data.items
        });
      });
    }

    updateData(config) {
        this.setState(config);
    }

    updateCategory(e) {
        this.setState({
          category: e.target.value
        });
    }

    updateBrand(e) {
        this.setState({
          brand: e.target.value
        });
    }

  render() {
    const data = this.state.lotsData;
    
    let allCategories = new Set(data.map(item => item.category));
    allCategories = Array.from(allCategories).sort();

    let allBrands = new Set(data.map(item => item.brand));
    allBrands = Array.from(allBrands).sort();

    let filtered = data;

    let selectedCat = filtered.filter(
        (el) => {
            let cat = this.state.category;
            return el.category === cat || cat === 'All';
        }
    );

    filtered = selectedCat;

    let selectedBrand = filtered.filter(
        (el) => {
            let brand = this.state.brand;
            return el.brand === brand || brand === 'All';
        }
    );

    filtered = selectedBrand;

    return (
      <div>
        <Header />
        <div className="lotBg">
            <section id="lotSc" className="container">
            
                <h2>Лоты</h2>
                <select
                  value={this.state.category}
                  onChange={this.updateCategory.bind(this)}
                  className="lot-sel"
                  id="lotSelect">
                    <option value="All">Все категории</option>
                  {
                    allCategories.map(option => 
                        <option 
                            value={option}
                            key={option}>
                            {option}
                        </option> )
                  }
                </select>
                <select 
                  value={this.state.brand}
                  onChange={this.updateBrand.bind(this)}
                  className="lot-sel"
                  id="lotBrandSelect">
                    <option value="All">Все производители</option>
                  {
                    allBrands.map(option => 
                        <option
                            value={option}
                            key={option}>
                            {option}
                        </option> )
                  }
                </select>
                
                <div id="lotList">
                {
                    filtered.map(elem =>
                        <LotItem
                            data={elem}
                            key={elem.id}
                            update={this.updateData.bind(this)}
                        />
                    )
                }
                </div>
                
            </section>
        </div>

      </div>

    );
  }
}

export default Lots;
