import { configureStore, createSlice } from "@reduxjs/toolkit";

const productSlice=createSlice(
    {
        name:"products",
        initialState:{veg :[
            {image:"potato.jpeg" ,name:'Potato',price:100.45},
            {image:"carrot.jpeg",name:'Carrot',price:340.58},
            {image:"tomato.jpeg",name:'Tomato',price:40.80},
            {image:"brinjal.jpeg",name:'Brinjal',price:80.97},
            {image:"onion.jpeg",name:'Onion',price:235.89},
            {image:"chilli.jpeg",name:'Green Chilli',price:50.89},
            {image:"bottlegaurd.jpeg",name:'Bottle gourd',price:70.90},
            {image:"bittergourd.jpeg",name:'Bitter gourd',price:150.69},
            {image:"ladyfinger.jpeg",name:'Lady Finger',price:160.54},
            {image:"pea.jpeg",name:'Pea',price:87.49},
            {image:"capsicum.jpeg",name:'Capsicum',price:120.65},
            {image:"pointer.jpeg",name:'Pointer Gourd',price:90.21},


        ],
        nonvegItems:[
            {image:"chicken.jpeg",name:'Chicken',price:254.78},
            {image:"mutton.jpeg",name:'Mutton',price:1054.54},
            {image:"fish.jpeg",name:'Fish',price:800.69},
            {image:"prawns.jpeg",name:'Prawns',price:1439.25},
            {image:"turkey.jpeg",name:'Turkey',price:1290.73},
            {image:"beef.jpeg",name:'Beef',price:400.73},
            {image:"crabs.jpeg",name:'Crab',price:500.76},
            {image:"vension.jpeg",name:'Venison',price:600.94},
            {image:"shellfish.jpeg",name:'Shellfish',price:200.38},
        ],
        fruits:[
            {image:"apple.jpeg",name:'Apple',price:100.89},
            {image:"mango.jpeg",name:'Mango',price:169.96},
            {image:"papaya.jpeg",name:'Papaya',price:60.25},
            {image:"pineapple.jpeg",name:'Pine Apple',price:200.76},
            {image:"guava.jpeg",name:'Guava',price:40.89},
            {image:"grapes.jpeg",name:'Grapes',price:80.54},
            {image:"banana.jpeg",name:'Banana',price:120.56}
        ]
        },
        reducers:{}

})

//create cart slice
const cartSlice=createSlice(
    {
      name:"cart",
      initialState:[],
      reducers:{
      addToCart:(state , action)=>{
        const item=state.find(item=>item.name === action.payload.name)
        if(item){
            item.quantity+=1;
        }
        else{
            state.push({...action.payload,quantity:1});
        }
      },
      increment: (state, action) => {
        const item = state.find(item => item.name === action.payload.name);
        if (item) {
          item.quantity+= 1;
        }
      },
      decrement:(state,action) => {
        const item = state.find(item=>item.name === action.payload.name)
        if(item && item.quantity>1){
            item.quantity -=1;
        }
        else{
            return state.filter(item=>item.name !== action.payload.name);
 
        }
      },
     
      remove:(state,action)=>{
        return state.filter(item=>item.name !== action.payload.name);

    },
    clearCart:()=>[]  
  }
})
//create purchase slice
const purchaseSlice=createSlice({
  name:'purchase',
  initialState:[],
  reducers:{
    purchaseDetails:(state,action)=>{
      state.push({...action.payload});
    }
  }
})

//create Authenticate slice
const autheticationSlice=createSlice({
  name:"auth",
  initialState:{
    isAuthenticated:localStorage.getItem("username")?true:false,
    user:localStorage.getItem("username")||"",
  },
  reducers:{
    login:(state,action)=>{
      state.isAuthenticated=true;
      state.user=action.payload;
      localStorage.setItem("username",action.payload);
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = "";
      localStorage.removeItem("username"); // Correct way to remove item
    },
    
  }

})



const store=configureStore({
    reducer:{products:productSlice.reducer,
        cart:cartSlice.reducer,
        purchase:purchaseSlice.reducer,
        auth:autheticationSlice.reducer
    }
})

export const {addToCart,increment,decrement,remove,clearCart}=cartSlice.actions;
export const {purchaseDetails}=purchaseSlice.actions;
export const{login,logout}=autheticationSlice.actions;


export default store;
