
import { Component, OnInit } from '@angular/core';

import { LeafletMarkerClusterDirective, LeafletMarkerClusterModule } from '@asymmetrik/ngx-leaflet-markercluster'; 

import * as L from 'leaflet';
import 'style-loader!leaflet/dist/leaflet.css';
 
import 'leaflet.markercluster';

import 'leaflet';
import "leaflet.markercluster";
import "leaflet.markercluster/dist/MarkerCluster.Default.css"; 
import 'leaflet/dist/leaflet.css';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { marker } from 'leaflet'; 

@Component({
  selector: 'ngx-ecommerce',
     template: `
     
<div class="row card">
<nb-card-header> Treatment Infrastructure </nb-card-header>
</div>
  <div style="height: 400px;"
  leaflet
  [leafletOptions]="options"
  [leafletMarkerCluster]="markerClusterData"
  [leafletMarkerClusterOptions]="markerClusterOptions"
  (leafletMarkerClusterReady)="markerClusterReady($event)">
</div>
      
  `,
}) 
export class DashboardComponent implements OnInit {
	 
	geoData: any = [];
	// Open Street Map Definition
	LAYER_OSM = {
		id: 'openstreetmap',
		name: 'Open Street Map',
		enabled: false,
		layer: L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			maxZoom: 18,
			attribution: 'Open Street Map'
		})
	};

	// Values to bind to Leaflet Directive
	layersControlOptions = { position: 'bottomright' };
	baseLayers = {
		'Open Street Map': this.LAYER_OSM.layer
	};
	options = {
		layers: [
			L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }),
		  ],  maxZoom :12,
	  zoom: 12,
    center: L.latLng({ lat: 9.017198, lng: 38.815817 }), 
 	};

	// Marker cluster stuff
 	markerClusterGroup: L.MarkerClusterGroup;
	markerClusterData: L.Marker[] = [];
	markerClusterOptions: L.MarkerClusterGroupOptions;
	
	  markers = L.markerClusterGroup({
		iconCreateFunction: function(cluster) {
			return L.divIcon({ html: '<b>' + cluster.getChildCount() + '</b>' });
		}
	});
	  
	 
	ngOnInit() {

		this.refreshData();
		

	}

	markerClusterReady(group: L.MarkerClusterGroup) {
		 
		this.markerClusterGroup = group; 
	 	this.markerClusterGroup.refreshClusters();
	}

	refreshData(): void {
			 
						this.markerClusterData = this.generateData(this.geoData);
			 
	}

	generateData(markers: any): L.Marker[] {

		const data: L.Marker[] = []; 
	 
		  var icon=L.icon({
			iconSize: [25, 41],
			iconAnchor: [10, 41],
			popupAnchor: [2, -40],
			// specify the path here
			iconUrl: "assets/images/hosp.jpg",
			shadowUrl: "assets/images/hosp.jpg"
		  })
	  data.push(L.marker([9.074346,38.748998], { icon  }).bindPopup('ቅዱስ ጴጥሮስ'));
    data.push(L.marker([9.032565, 38.753522], { icon  }).bindPopup('ፒያሳ ሲኒማ ኢትዮጵያ'));
    data.push(L.marker([9.030874, 38.738889], { icon  }).bindPopup('መርካቶ አንበሳ ማረፊያ'));
    data.push(L.marker([9.014645, 38.757314], { icon  }).bindPopup('ስታዲየም'));
    data.push(L.marker([8.980932, 38.757739], { icon  }).bindPopup('ኣራት ኪሎ'));
    data.push(L.marker([8.985282, 38.746832], { icon  }).bindPopup('ቄራዎች ድርጅት አጥር'));
    data.push(L.marker([8.867894, 38.788660], { icon  }).bindPopup('አቃቂ ንግድ ባንክ አካባቢ'));
    data.push(L.marker([8.977169, 38.758925], { icon  }).bindPopup('ጎተራ ሼል ዴፖ'));
    data.push(L.marker([9.010734, 38.737088], { icon  }).bindPopup('ልደታ ቤ/ክርስትያን አካባቢ'));
    data.push(L.marker([9.036445, 38.833066], { icon  }).bindPopup('ኮተቤ ወንዲራድ ትምህርት ቤት አካባቢ'));
    data.push(L.marker([9.015641, 38.771265], { icon  }).bindPopup('ካዛንችስ 6ኛ ፖሊስ ጣቢያ'));
    data.push(L.marker([9.060446, 38.737202], { icon  }).bindPopup('አዲሱ ገበያ ኖክ ፊት ለፊት'));
    data.push(L.marker([9.018961, 38.756243], { icon  }).bindPopup('ዘውዲቱ ሆስፒታል ውስጥ'));
    data.push(L.marker([9.039093, 38.775111], { icon  }).bindPopup('ምኒሊክ ሆስፒታል ውስጥ'));
    data.push(L.marker([9.043830, 38.760328], { icon  }).bindPopup('የካቲት ሆስፒታል ውስጥ'));
    data.push(L.marker([9.056504, 38.699455], { icon  }).bindPopup('ብርጭቆ ኮንዶሚየም ሚክሊላንድ ጤና ጣቢያ'));
    data.push(L.marker([8.993203, 38.773943], { icon  }).bindPopup('ወሎ ሰፈር ቴሌ ጋራዣ ግቢ ውስጥ'));
    data.push(L.marker([9.211488, 39.402992], { icon  }).bindPopup('ሾላ ገበያ ትራፊክ ጽ/ቤት'));
    data.push(L.marker([9.073323, 38.872855], { icon  }).bindPopup('የካ አባዶ ኮንዶሚንየም'));
    data.push(L.marker([8.882284, 38.767802], { icon  }).bindPopup('ገላን ኮንዶሚንየም'));
    data.push(L.marker([8.975805, 38.885330], { icon  }).bindPopup('ቦሌ አራብሳ ኮንዶሚንየም'));
    data.push(L.marker([9.065502, 38.720492], { icon  }).bindPopup('ሸጎሌ ከነማ ዋና መስሪያ ቤት'));
    data.push(L.marker([8.964680, 38.732654], { icon  }).bindPopup('ጀርመን አደባባይ ጀሞ ሚካኤል'));
  data.push(L.marker([9.047694,38.728067], { icon  }).bindPopup('ቅዱስ ጳውሎስ'));

  data.push(L.marker([9.047855,38.73059], { icon   }).bindPopup('  የኢትዮጵያ ህዝብ ጤና ኢንስቲትዩት'));
 
		return data;

	}
	constructor() {
	 
	  }


}
