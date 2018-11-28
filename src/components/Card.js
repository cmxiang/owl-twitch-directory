import React, { Component } from 'react';
import axios from 'axios';
import { CLIENT_ID } from '../constants.js';
import './Card.css';
import live from '../images/live2.png';

// team, position
class Card extends Component {

	constructor () {
    	super()
    	this.state = {
      		icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Solid_grey.svg/1024px-Solid_grey.svg.png",
			online: ""
    	}
  	}

	componentDidMount() {
		let user_id = this.props.player.user_id;

		let helixApi = axios.create({
			baseURL: 'https://api.twitch.tv/helix',
			timeout: 3000,
			headers: {'Client-ID': CLIENT_ID},
		});

		helixApi.get(`/streams?user_login=${user_id}`)
			.then((response) => {
				let data = response.data.data[0];
				if (data != undefined){
					if (data.type === "live"){
						this.setState({
							online: data.type
						})
					}
				}
			});

		helixApi.get(`/users?login=${user_id}`)
			.then((response) => {
				let data = response.data.data[0];
				this.setState({
					icon: (data.profile_image_url).toString()
				})
			});
	}

	render() {
		let user_id = this.props.player.user_id;
		let owl_id = this.props.player.owl_id;

		return (
		<div className="Card" >
			<div className={`hidden ${this.state.online}`}>
				<img src={live} className="liveicon"/>
			</div>
			<div className="top">
				<div className="topleft">
					<img src={this.state.icon} alt={owl_id} className="icon"/>
				</div>
				<div className="topright">
					<p>{owl_id} ({user_id})</p>
					<a href={`https://twitch.tv/${user_id}`}>Go to Channel</a>
				</div>
			</div>
			<div className="mid">
				<p><b>Team:</b> {this.props.player.team}</p>
				<p><b>Position:</b> {this.props.player.position}</p>
			</div>
		</div>
	);
	}
	
}


export default Card;
