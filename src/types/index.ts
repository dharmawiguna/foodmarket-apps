export type RootStackParamList = {
  SplashScreen: undefined;
  SignIn: undefined;
  SignUp: undefined;
  SignUpAddress: undefined;
  SuccessSignUp: undefined;
  MainApp: undefined;
  FoodDetail: undefined;
  OrderSummary: undefined;
  SuccessOrder: undefined;
  OrderDetail: undefined;
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
