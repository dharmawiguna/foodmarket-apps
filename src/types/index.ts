export type RootStackParamList = {
  SplashScreen: undefined;
  SignIn: undefined;
  SignUp: undefined;
  SignUpAddress: undefined;
  SuccessSignUp: undefined;
  MainApp: undefined;
  FoodDetail: {item: FoodItem};
  OrderSummary: undefined;
  SuccessOrder: undefined;
  OrderDetail: {order: OrderItem};
};

export interface FoodItem {
  id: number;
  name: string;
  description: string;
  ingredients: string;
  price: number;
  rate: string;
  types: string;
  picturePath: string;
  deleted_at: string | null;
  created_at: number;
  updated_at: number;
}

export interface OrderItem {
  id: number;
  user_id: number;
  food_id: number;
  quantity: number;
  total: number;
  status: string;
  payment_url: string;
  deleted_at: null | string;
  created_at: number;
  updated_at: number;
  food: {
    id: number;
    name: string;
    description: string;
    ingredients: string;
    price: number;
    rate: string;
    types: string;
    picturePath: string;
    deleted_at: null | string;
    created_at: number;
    updated_at: number;
  };
  user: {
    id: number;
    name: string;
    email: string;
    email_verified_at: null | string;
    current_team_id: null | number;
    profile_photo_path: string;
    address: string;
    houseNumber: string;
    phoneNumber: string;
    city: string;
    roles: string;
    created_at: string;
    updated_at: string;
    profile_photo_url: string;
  };
}
