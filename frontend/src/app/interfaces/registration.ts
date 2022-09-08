export interface Signup{
   name:string;
   email:string;
   phone:number;
   password:string;
   confirmPassword:string 
};

export interface Login{
   email:string;
   password:string;
};