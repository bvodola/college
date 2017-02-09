import React, { Component } from 'react';

// ==========
// Repeatable
// ==========

class Repeatable extends Component {

	constructor(props) {
		super(props);

		// Sets the initial state
		// count: Number of initial statements
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
	renderChildren(children, key) {

		// First we make sure that the key parameter passed is a String
		key = String(key);

		// let checkChildren = function(children, key) {
		// 	if(typeof children !== 'undefined') {
		// 		return React.Children.map(children, (child, j) => {
		// 			if(typeof child.ref !== 'undefined' || child.ref !== null) {
		// 				child = React.cloneElement(child, { ref: child.ref+key });
		// 				console.log('child',child);
		//
		// 				if(typeof child.props.children !== 'undefined') {
		// 					child.props.children = checkChildren(child.props.children, key);
		// 				}
		//
		// 				return child;
		// 			}
		// 		});
		// 	}
		// };
		//
		// children = checkChildren(children, key);

		console.log('children', children);
		// Iterating through the children of the repeatable component
		return React.Children.map(children, (child, j) => {
			return React.cloneElement(child, {ref: j});
		});

	}

	render() {

		if(this.props.type == 'text') {
			return(
				<div className='repeatable'>
					{[...Array(this.state.count)].map((x,i) => {
						let id = Math.random().toString(36).substring(2,12);
						return (
							<div key={i} className={this.props.divClass}>
								<input className={this.props.inputClass} type="text" ref={String(i)} id={id} />
								<label htmlFor={id} className={this.props.labelClass}>Código da Turma</label>
								{this.state.count>1?<button className={this.props.removeButtonClass} onClick={this.removeChild.bind(this)}>X</button>:''}
							</div>
						);
					})}
					<button className={this.props.addButtonClass} onClick={this.addChild.bind(this)}>+</button>
				</div>
			);
		}

		else {
			return(
				<div className='repeatable'>
					{[...Array(this.state.count)].map((x,i) => (
						<div key={i}>
							{this.renderChildren(this.props.children, i)}
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
		console.log(event);

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

	// Merges the obj2 properties into ojb1. Overwrites any property
	// that may already exist in obj1
	static push(obj1,obj2) {
		var obj3 = {};
		for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }
		for (var attrname in obj2) { obj3[attrname] = obj2[attrname]; }
		return obj3;
	}


}

export { Repeatable, DataSelect, Helpers, CheckboxList };
