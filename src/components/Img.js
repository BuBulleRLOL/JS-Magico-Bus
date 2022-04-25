import Component from './Component.js';
export default class Img extends Component {
	constructor(url, size) {
		super('img', [{name: 'src', value: url}, {name: 'width', value: size}, {name: 'height', value: 'auto'}]);
	}
}
