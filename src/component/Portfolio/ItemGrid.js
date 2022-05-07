import React, {Component} from 'react';
import Isotope from 'isotope-layout/js/isotope';
import ImagesLoaded from 'imagesloaded/imagesloaded';

class ItemGrid extends Component {

    state = {
        activeItem: '*',
    }

    componentDidMount() {
        var imgLoad = new ImagesLoaded('.grid');
    
        imgLoad.on('progress', function(instance, image) {
            this.iso = new Isotope('.grid', {
                itemSelector: '.grid-item',
                layoutMode: "masonry"
            });
        }); 
        
    }
    onFilterChange = (newFilter) => {
        
        this.setState({activeItem: newFilter});
        if (this.iso === undefined) {
            this.iso = new Isotope('.grid', {
            itemSelector: '.grid-item',
            layoutMode: "masonry"
            });
        }
    
    // this.iso.arrange({ filter: newFilter });
        
      if(newFilter === '*') {
        this.iso.arrange({ filter: `*` });
      } else {
        this.iso.arrange({ filter: `.${newFilter}` });
      }
    }

    onActive = v => v === this.state.activeItem ? 'active' : '';
    render() {
        return(
            <div>
            <ul className="list_style portfolio_menu text-center">
                <li className={`${this.onActive('*')}`} data-wow-delay="0.1s" data-filter="*" onClick={() => {this.onFilterChange("*")}}>ALL</li>
                <li className={`${this.onActive('teaching')}`} data-wow-delay="0.3s" data-filter="teaching" onClick={() => {this.onFilterChange("teaching")}}>Teaching</li>
            </ul>	

            <div className="grid row">
                <div className="col-md-3 col-sm-6 col-xs-12 grid-item teaching">
                    <div className="portfolio hover-style">
                        <img src={require('../../image/portfolio/clp/program-logo.png')} alt=""/>
                        <div className="item-img-overlay">
                            <div className="overlay-info text-center">
                                <h6 className="sm-titl">Spring 2022</h6>
                                <h6 className="sm-titl">Intermediate 2</h6>
                                <div className="icons">
                                    {/* <a href=".#"><i className="icon_heart_alt"></i></a> */}
                                    <a href="/CLP"><i className="icon-magnifying-glass"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
  }

  export default ItemGrid;
