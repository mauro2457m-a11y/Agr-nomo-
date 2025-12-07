export interface Pest {
  name: string;
  description: string;
  controlMethods: {
    chemical: string[];
    organic: string[];
  };
  applicationGuide: string;
}

export interface Disease {
  name: string;
  description: string;
  controlMethods: {
    chemical: string[];
    organic: string[];
  };
  applicationGuide: string;
}

export interface FertilizationInfo {
  recommended_fertilizers: string;
  dosage_and_application: string;
}

export interface Crop {
  id: string;
  name: string;
  imageUrl: string;
  plantingSeason: string;
  fertilization: FertilizationInfo;
  pests: Pest[];
  diseases: Disease[];
}