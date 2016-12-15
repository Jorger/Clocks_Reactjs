import React from 'react';
import Clock from './Clock';

class Clocks extends React.Component{
		render(){
			return(<div>
						<Clock/>
						<Clock timeZone={"Asia/Tokyo"}/>
						<Clock timeZone={"Europe/London"}/>
						<Clock timeZone={"Australia/Adelaide"}/>
				</div>
			);
		};
};

export default Clocks;