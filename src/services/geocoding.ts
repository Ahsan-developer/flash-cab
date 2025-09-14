export interface LocationResult {
  id: string;
  name: string;
  address: string;
  lat: number;
  lng: number;
  type: string;
  country?: string;
  city?: string;
}

// Free OpenStreetMap Nominatim service
class NominatimService {
  private baseUrl = 'https://nominatim.openstreetmap.org/search';

  async search(query: string): Promise<LocationResult[]> {
    if (!query.trim()) return [];

    try {
      const params = new URLSearchParams({
        q: query,
        format: 'json',
        addressdetails: '1',
        limit: '8',
        countrycodes: 'es', // Focus on Spain for Barcelona area
      });

      const response = await fetch(`${this.baseUrl}?${params}`, {
        headers: {
          'User-Agent': 'Barcelona Transfer App'
        }
      });

      if (!response.ok) {
        throw new Error('Geocoding request failed');
      }

      const data = await response.json();
      
      return data.map((item: any, index: number) => ({
        id: `${item.place_id || index}`,
        name: item.display_name.split(',')[0],
        address: item.display_name,
        lat: parseFloat(item.lat),
        lng: parseFloat(item.lon),
        type: this.getLocationType(item),
        country: item.address?.country,
        city: item.address?.city || item.address?.town || item.address?.village,
      }));
    } catch (error) {
      console.error('Geocoding error:', error);
      return [];
    }
  }

  private getLocationType(item: any): string {
    if (item.type === 'aerodrome' || item.class === 'aeroway') return 'airport';
    if (item.type === 'city' || item.type === 'town' || item.type === 'village') return 'city';
    if (item.type === 'tourism' || item.class === 'tourism') return 'landmark';
    if (item.type === 'amenity' && item.amenity === 'restaurant') return 'restaurant';
    if (item.type === 'amenity' && item.amenity === 'hotel') return 'hotel';
    return 'place';
  }
}

// Google Maps service (requires API key)
class GoogleMapsService {
  constructor(private apiKey: string) {}

  async search(query: string): Promise<LocationResult[]> {
    if (!query.trim()) return [];

    try {
      const params = new URLSearchParams({
        input: query,
        key: this.apiKey,
        location: '41.3851,2.1734', // Barcelona coordinates
        radius: '50000', // 50km radius
        language: 'en',
      });

      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/autocomplete/json?${params}`
      );

      if (!response.ok) {
        throw new Error('Google Maps request failed');
      }

      const data = await response.json();
      
      if (data.status !== 'OK') {
        throw new Error(`Google Maps API error: ${data.status}`);
      }

      return data.predictions.map((item: any) => ({
        id: item.place_id,
        name: item.structured_formatting?.main_text || item.description,
        address: item.description,
        lat: 0, // Would need additional call to get coordinates
        lng: 0,
        type: this.getGooglePlaceType(item.types),
      }));
    } catch (error) {
      console.error('Google Maps geocoding error:', error);
      return [];
    }
  }

  private getGooglePlaceType(types: string[]): string {
    if (types.includes('airport')) return 'airport';
    if (types.includes('lodging')) return 'hotel';
    if (types.includes('tourist_attraction')) return 'landmark';
    if (types.includes('locality')) return 'city';
    if (types.includes('restaurant')) return 'restaurant';
    return 'place';
  }
}

// Main geocoding service
export class GeocodingService {
  private nominatim = new NominatimService();
  private googleMaps: GoogleMapsService | null = null;

  constructor(googleApiKey?: string) {
    if (googleApiKey) {
      this.googleMaps = new GoogleMapsService(googleApiKey);
    }
  }

  async searchLocations(query: string): Promise<LocationResult[]> {
    // Always try Nominatim first (free)
    const nominatimResults = await this.nominatim.search(query);
    
    // If we have Google Maps API key and few results, supplement with Google
    if (this.googleMaps && nominatimResults.length < 3) {
      try {
        const googleResults = await this.googleMaps.search(query);
        return [...nominatimResults, ...googleResults].slice(0, 8);
      } catch (error) {
        console.warn('Google Maps search failed, using Nominatim only:', error);
      }
    }

    return nominatimResults;
  }
}

// Barcelona-specific common locations
export const barcelonaLocations: LocationResult[] = [
  {
    id: 'bcn-airport',
    name: 'Barcelona-El Prat Airport',
    address: 'Barcelona-El Prat Airport, El Prat de Llobregat, Spain',
    lat: 41.2974,
    lng: 2.0833,
    type: 'airport',
    country: 'Spain',
    city: 'Barcelona',
  },
  {
    id: 'barcelona-center',
    name: 'Barcelona City Center',
    address: 'Plaça de Catalunya, Barcelona, Spain',
    lat: 41.3851,
    lng: 2.1734,
    type: 'city',
    country: 'Spain',
    city: 'Barcelona',
  },
  {
    id: 'sagrada-familia',
    name: 'Sagrada Família',
    address: 'Carrer de Mallorca, 401, Barcelona, Spain',
    lat: 41.4036,
    lng: 2.1744,
    type: 'landmark',
    country: 'Spain',
    city: 'Barcelona',
  },
  {
    id: 'park-guell',
    name: 'Park Güell',
    address: 'Carrer d\'Olot, s/n, Barcelona, Spain',
    lat: 41.4145,
    lng: 2.1527,
    type: 'landmark',
    country: 'Spain',
    city: 'Barcelona',
  },
  {
    id: 'camp-nou',
    name: 'Camp Nou',
    address: 'Carrer d\'Aristides Maillol, 12, Barcelona, Spain',
    lat: 41.3809,
    lng: 2.1228,
    type: 'landmark',
    country: 'Spain',
    city: 'Barcelona',
  },
  {
    id: 'barceloneta-beach',
    name: 'Barceloneta Beach',
    address: 'Platja de la Barceloneta, Barcelona, Spain',
    lat: 41.3755,
    lng: 2.1901,
    type: 'landmark',
    country: 'Spain',
    city: 'Barcelona',
  },
];