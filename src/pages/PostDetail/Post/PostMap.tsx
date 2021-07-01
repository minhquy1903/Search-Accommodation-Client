import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import Pin from './pin';

interface Props {
	street: string;
	ward: string;
	district: string;
	province: string;
}

const replaceWhiteSpace = (value: string) => {
	return value.replace(/\s/g, '+');
};

const PostMap: React.FC<Props> = ({ street, ward, district, province }) => {
	const [viewport, setViewport] = React.useState({
		latitude: 48.856613,
		longitude: 2.352222,
		zoom: 14,
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
			setViewport({ ...viewport, latitude: data.lat, longitude: data.lng });
		};
		convertAddressToLatLong();
	}, []);

	return (
		<div className='section post-map'>
			<div className='title'>Bản đồ</div>
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
					offsetTop={-(viewport.zoom * 5) / 2}
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
	);
};

export default PostMap;
