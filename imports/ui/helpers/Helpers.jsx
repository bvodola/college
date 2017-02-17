import React, { Component } from 'react';

// ==========
// Repeatable
// ==========

class Repeatable extends Component {

	constructor(props) {
		super(props);

		// Sets the initial state
		// count: Number of initial components
		this.state = {
			count: 1
		};
	}

	addChild(event) {
		event.preventDefault();
		this.setState({count: this.state.count+1});
	}

	removeChild(event) {
		event.preventDefault();
		if(this.state.count > 1) {
			this.setState({count: this.state.count-1});
		}
	}

	// This function is responsible for rendering each loop of the
	// <Repeatable /> component.
	renderChildren(children) {
		return React.Children.map(children, (child) => {
			return React.cloneElement(child);
		});
	}

	render() {
		console.log('this.refs', this.refs);
		if(typeof this.props.type != 'undefined') {
			if(this.props.type == 'text') {
				return(
					<div className="repeatable">
						{[...Array(this.state.count)].map((x,i) => (
							<div className="input-field" key={i}>
								<input type="text" ref={this.props.refName+i} id={this.props.refName+i}/>
								<label htmlFor={this.props.refName+i}>{this.props.placeholder||''}</label>
								<button onClick={this.removeChild.bind(this)}>X</button>
							</div>
						))}
						<button onClick={this.addChild.bind(this)}>+</button>
					</div>
				);
			}
		}


		else {
			return(
				<div className='repeatable'>
					{[...Array(this.state.count)].map((x,i) => (
						<div key={i}>
							{this.renderChildren(this.props.children)}
							<button onClick={this.removeChild.bind(this)}>X</button>
						</div>
					))}
					<button onClick={this.addChild.bind(this)}>+</button>
				</div>
			);
		}

	}
}

// ==========
// DataSelect
// ==========

// Props:
// - defaultValue
// - placeholder: the placeholder for the Select, in this case a disabled first option
// - valueProperty: the name of the data object property that will become the value of the selet options
// - data: populates the select
// - onChange
// - style

class DataSelect extends Component {

	constructor(props) {
		super(props);

		this.state = {
			value: (props.defaultValue || '')
		}
	}

	handleChange(event) {
		this.setState({ value: event.target.value }, function() {
			if(typeof this.props.onChange === 'function') {
				this.props.onChange(event);
			}
		});
	}

	render() {

		let valueProperty = '_id';
		let style = {};
		if(typeof this.props.valueProperty !== 'undefined') valueProperty = this.props.valueProperty
		if(typeof this.props.style !== 'undefined') style = this.props.style

		if(this.props.data.length > 0) {
			return(
				<select style={style} ref="_id" defaultValue={this.props.defaultValue || ''} onChange={this.handleChange.bind(this)}>
					<option value="" disabled>{this.props.placeholder}</option>
					{this.props.data.map((obj) => (
						<option value={obj[valueProperty]} key={obj._id}>
							{obj.name}
						</option>
					))}
				</select>
			);
		}
		else {
			return(
				<p>Nenhuma opção de {this.props.placeholder} cadastrada.</p>
			);
		}
	}
}

// ============
// CheckboxList
// ============

/*
	Example:
	<CheckboxList title='Título' data={[
			{'_id': '001', 'name': 'Check 1'},
			{'_id': '002', 'name': 'Check 2'}
		]}
	/>
*/

class CheckboxList extends Component {

	constructor(props) {
		super(props);

		this.state = {
			value: (props.defaultValue || '')
		}
	}

	handleChange(event) {

		stateValue = this.state.value;

		this.setState({ value: event.target.value }, function() {
			if(typeof this.props.onChange === 'function') {
				this.props.onChange(event);
			}
		});
	}


	render() {

		// Setting the valueProperty and style variables
		let valueProperty = '_id';
		let style = {};
		if(typeof this.props.valueProperty !== 'undefined') valueProperty = this.props.valueProperty
		if(typeof this.props.style !== 'undefined') style = this.props.style

		// Checks if there's data and renders
		if(typeof this.props.data !== 'undefined' && this.props.data.length > 0) {
			return(
				<div>
					<div className="title">{this.props.title}</div>
					{this.props.data.map((obj) => (
						<p key={obj._id}>
							<input name={obj.name} onChange={this.handleChange.bind(this)} type="checkbox" value={obj[valueProperty]} />
							<label htmlFor={obj.name}>{obj.name}</label>
						</p>
					))}
				</div>
			);
		}

		else {
			return(
				<p>Nenhuma opção de {this.props.title} cadastrada.</p>
			);
		}

	}

}


// ========
// DataList
// ========
class DataList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: []
    }
    this.data = {};
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleKeyUp(event) {
  	isReturnKey = event.keyCode == 13 ? true : false;
    event.preventDefault();

    if(isReturnKey) {
	    this.setState((prevState) => ({
	      value: prevState.value.concat(this.data.input.value)
	    }), function() {
	      console.log(this.state.value);
	      this.data.input.value = '';
	    });
    }
    
  }

  handleDelete(index) {
    console.log('index', index); 
    this.setState((prevState) => {
      prevState.value.splice(index,1);
      return { value: prevState.value }
    }, function() {
      console.log(this.state.value);
    })

  }

  render() {

    let input_random_id = Math.random().toString(36).substr(2, 5);

    return(
      <div>
      	{this.state.value.length > 0 ? this.renderList():'Nenhum(a) '+this.props.placeholder+' cadastrado(a)'}
		<div className="input-field">
            <input onKeyUp={this.handleKeyUp} id={input_random_id} type="text" ref={(el) => {this.data.input = el;}} />
			<label htmlFor={input_random_id}>Adicionar {this.props.placeholder}</label>
		</div>
       	
      </div>
    )
  }

  renderList() {
  	return(
  		<ul className="collection">
        {this.state.value.map((v,i,a) => (
          <li className="collection-item" key={i}>
            <div>
              {v}
              <span onClick={() => this.handleDelete(i)} href="#" className="secondary-content"><i className="fa fa-trash"></i></span>
            </div>
          </li>
        ))}
        </ul>
	)
  }
}

// =======
// Helpers
// =======

class Helpers {

	// Sets all the ref values of INPUT, SELECT and TEXTAREAS to a handy { refName:refValue } object
	// Also, if any ReactElement with a ref defined has a stateValue prop defined, this function will
	// check that Element for the value of the state named on the stateValue prop and assign it to
	// the refName:refValue pair.

	static getRefValues(refs) {
		let refValues = new Object();

		for (var key in refs) {
			if (refs.hasOwnProperty(key)) {
				if(typeof refs[key].nodeName !== 'undefined' && (refs[key].nodeName == 'INPUT' || refs[key].nodeName == 'SELECT' || refs[key].nodeName == 'TEXTAREA')) {
					refValues[key] = refs[key].value;
				} else if(typeof refs[key].props !== 'undefined' && typeof refs[key].props.stateValue !== 'undefined') {
					if(refs[key].props.stateValue === true)
						refValues[key] = refs[key].state['value'];
					else
						refValues[key] = refs[key].state[refs[key].props.stateValue];
				}
			}
		}
		return refValues;
	}

	static getDataValues(data) {
		console.log(data);
		let dataValues = new Object();

		for (var key in data) {
			if (data.hasOwnProperty(key)) {
				if(typeof data[key].nodeName !== 'undefined' && (data[key].nodeName == 'INPUT' || data[key].nodeName == 'SELECT' || data[key].nodeName == 'TEXTAREA')) {
					dataValues[key] = data[key].value;
				} else if(typeof data[key].props !== 'undefined' && typeof data[key].props.stateValue !== 'undefined') {
					if(data[key].props.stateValue === true)
						dataValues[key] = data[key].state['value'];
					else
						dataValues[key] = data[key].state[data[key].props.stateValue];
				} else if(Array.isArray(data[key])) {
					dataValues[key] = data[key].map((v,i,a) => {
						// Do Mapping
					});
				}
			}
		}
		return dataValues;
	}

	// Merges the obj2 properties into ojb1. Overwrites any property
	// that may already exist in obj1
	static push(obj1,obj2) {
		var obj3 = {};
		for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }
		for (var attrname in obj2) { obj3[attrname] = obj2[attrname]; }
		return obj3;
	}


}

export { Repeatable, DataSelect, DataList, Helpers, CheckboxList };
