import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactMapGL, { Marker, NavigationControl } from 'react-map-gl';
import Pin from './pin';
import { AiOutlineEnvironment } from 'react-icons/ai';
import 'mapbox-gl/dist/mapbox-gl.css';

interface Props {
	street: string;
	ward: string;
	district: string;
	province: string;
}

const replaceWhiteSpace = (value: string) => {
	return value.replace(/\s/g, '+');
};

const replaceSlash = (value: string) => {
	return value.replace(/\//g, ',+');
};

const PostMap: React.FC<Props> = ({ street, ward, district, province }) => {
	const [viewport, setViewport] = React.useState({
		latitude: 48.856613,
		longitude: 2.352222,
		zoom: 14,
		maxZoom: 14,
		minZoom: 10,
		width: 707,
		height: 300,
		bearing: 0,
		pitch: 0,
	});

	const [marker, setMarker] = useState({
		latitude: 40,
		longitude: -100,
	});

	useEffect(() => {
		const convertAddressToLatLong = async () => {
			const addressQuery =
				replaceWhiteSpace(street) +
				'+' +
				replaceWhiteSpace(ward) +
				'+' +
				replaceWhiteSpace(district) +
				'+' +
				replaceWhiteSpace(province);

			const res = await axios.get(
				`http://www.mapquestapi.com/geocoding/v1/address?key=a040l2BrdJALPc1CdJsngZgTsO2HqMAm&location=${addressQuery}`,
			);
			console.log(res.data.results[0].locations[0].latLng);
			const data = res.data.results[0].locations[0].latLng;
			console.log(addressQuery);

			setMarker({
				latitude: data.lat,
				longitude: data.lng,
			});
			// const afterSet = {
			// 	latitude: data.lat,
			// 	longitude: data.lng,
			// 	zoom: 14,
			// 	width: 707,
			// 	height: 300,
			// 	bearing: 0,
			// 	pitch: 0,
			// };
			setViewport({ ...viewport, latitude: data.lat, longitude: data.lng });
			//setViewport(afterSet);
		};
		convertAddressToLatLong();
	}, []);

	const openMap = () => {
		const addressQuery =
			replaceSlash(replaceWhiteSpace(street)) +
			'+' +
			replaceSlash(replaceWhiteSpace(ward)) +
			'+' +
			replaceSlash(replaceWhiteSpace(district)) +
			'+' +
			replaceSlash(replaceWhiteSpace(province));

		window.open(`https://www.google.com/maps/place/${addressQuery}`, '_blank');
	};

	return (
		<div className='section post-map'>
			<div className='title'>Bản đồ</div>
			<div className='div__direct__map' onClick={() => openMap()}>
				<AiOutlineEnvironment />
				<div>{`Chỉ đường: ${street} ${ward} ${district} ${province}`}</div>
			</div>

			<div className='div__container__map__box'>
				<ReactMapGL
					mapStyle={'mapbox://styles/mapbox/streets-v11'}
					mapboxApiAccessToken={
						'pk.eyJ1IjoiYm9rb29sMTIzIiwiYSI6ImNrcWp2eGF0MDAzM3QybnBpcmYyazM0aHAifQ.zRl8wco4_Mi6mH2hLF6D4w'
					}
					{...viewport}
					onViewportChange={(viewport: any) => setViewport(viewport)}
				>
					<Marker
						latitude={marker.latitude}
						longitude={marker.longitude}
						//offsetTop={-(viewport.zoom * 8) / 2}
						//offsetLeft={-(viewport.zoom * 8) / 4}
						//offsetTop={-20}
					>
						<Pin
							size={40}
							street={street}
							ward={ward}
							district={district}
							province={province}
						/>
					</Marker>
				</ReactMapGL>
			</div>
		</div>
	);
};

export default PostMap;
