import { configureStore, createSlice } from "@reduxjs/toolkit";

const productSlice=createSlice(
    {
        name:"products",
        initialState:{veg :[
            {image:"potato.jpeg" ,name:'Potato',price:100.45},
            {image:"carrot.jpeg",name:'Carrot',price:340.58},
            {image:"tomato.jpeg",name:'Tomato',price:40.80},
            {image:"greenbeans.jpeg",name:'Green Beans',price:76.08},
            {image:"brinjal.jpeg",name:'Brinjal',price:80.97},
            {image:"onion.jpeg",name:'Onion',price:235.89},
            {image:"chilli.jpeg",name:'Green Chilli',price:50.89},
            {image:"bottlegaurd.jpeg",name:'Bottle gourd',price:70.90},
            {image:"clusterbeans.jpeg",name:'Cluster Beans',price:100},
            {image:"bittergourd.jpeg",name:'Bitter gourd',price:150.69},
            {image:"broccoli.jpeg",name:'Broccoli',price:279.49},
            {image:"ladyfinger.jpeg",name:'Lady Finger',price:160.54},
            {image:"pea.jpeg",name:'Pea',price:87.49},
            {image:"beetroot.jpeg",name:'Beet Root',price:138.78},
            {image:"redkurisquash.webp",name:'Red Kuri Squash',price:79.49},
            {image:"capsicum.jpeg",name:'Capsicum',price:120.65},
            {image:"pointer.jpeg",name:'Pointer Gourd',price:90.21},
            {image:"cabbege.jpeg",name:'Cbbage',price:78.16},
            {image:"ridgegourd.jpeg",name:'Ridge Gourd',price:110.82},
            {image:"spinach.jpeg",name:'Spinach',price:147.97},
            {image:"radish.jpeg",name:'Radish',price:45.34},
            {image:"redchilli.jpeg",name:'Red Chilli',price:490.99},
            {image:"sweetpotato.jpeg",name:'Sweet Potato',price:400.21},
            {image:"cauliflower.jpeg",name:'Cauli Flower',price:250.76},


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
            {image:"banana.jpeg",name:'Banana',price:120.56},
            {image:"cherry.jpeg",name:'Cherry',price:55.68},
            {image:"mulberry.jpeg",name:'Mul Berry',price:150.45},
            {image:"orange.jpeg",name:'Orange',price:176.59},
            {image:"straberry.jpeg",name:'Straberry',price:320.98},
            {image:"watermelon.jpeg",name:'Water Melon',price:90.23},
            {image:"berry.jpeg",name:'Berry',price:250.98},
            {image:"avocado.jpeg",name:'Avocado',price:155.68},
            {image:"blackpulm.jpeg",name:'Black Pulm',price:359.89},
            {image:"grapefruit.jpeg",name:'Grap Fruit',price:95.60},
            {image:"greenpulm.jpeg",name:'Green Pulm',price:59.96},
            {image:"peach.jpeg",name:'Peach',price:225.25},
            {image:"pears.jpeg",name:'Pears',price:67.58},
            {image:"nectarine.jpeg",name:'Nectarine',price:367.85},
            {image:"chikoo.jpeg",name:'Chikoo',price:89.88},

            
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
