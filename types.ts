export interface Pest {
  name: string;
  description: string;
  controlMethods: {
    chemical: string[];
    organic: string[];
  };
  applicationGuide: string;
}

export interface Crop {
  id: string;
  name: string;
  imageUrl: string;
  plantingSeason: string;
  pests: Pest[];
}
