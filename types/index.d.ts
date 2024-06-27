declare type SubRoutes = {
  name: string;
  path: string;
  icon: JSX.Element ;
};

declare type Menu = {
  map?: any;
  group?: string;
  type?: string;
  path: string;
  name: string;
  icon:  JSX.Element ;
  subRoutes: SubRoutes[];
};


declare type signup = {
  business_name: string;
  business_locaiton: string;
  business_email: string;
  business_phone: string;
  business_whatsapp: string;
  business_website: string;
  business_description: string;
  password: string;
  confirm_password: string;
};
