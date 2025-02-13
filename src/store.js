import { configureStore, createSlice } from "@reduxjs/toolkit";

const productSlice=createSlice(
    {
        name:"products",
        initialState:{veg :[
            {image:"potato1.jpg" ,name:'Potato',price:100.45},
            {image:"carrot1.jpg",name:'Carrot',price:340.58},
            {image:"brinjal.jpeg",name:'Brinjal',price:80.97},
            {image:"tomato1.jpg",name:'Tomato',price:40.80},
            {image:"greenbeans1.jpg",name:'Green Beans',price:76.08},
            
            {image:"onion.jpeg",name:'Onion',price:235.89},
            {image:"chilli.jpeg",name:'Green Chilli',price:50.89},
            {image:"bottlegaurd.jpeg",name:'Bottle gourd',price:70.90},
            {image:"clusterbeans1.webp",name:'Cluster Beans',price:100},
            {image:"bittergourd.jpeg",name:'Bitter gourd',price:150.69},
            {image:"broccoli.jpeg",name:'Broccoli',price:279.49},
            {image:"ladyfinger1.jpg",name:'Lady Finger',price:160.54},
            {image:"pea2.jpeg",name:'Pea',price:87.49},
            {image:"beetroot1.jpg",name:'Beet Root',price:138.78},
            {image:"redkurisquash3.jpg",name:'Red Kuri Squash',price:79.49},
            {image:"capsicum1.webp",name:'Capsicum',price:120.65},
            {image:"pointer2.jpg",name:'Pointer Gourd',price:90.21},
            {image:"cabbege.jpeg",name:'Cabbage',price:78.16},
            {image:"ridgegourd1.jpg",name:'Ridge Gourd',price:110.82},
            {image:"spinach1.webp",name:'Spinach',price:147.97},
            {image:"radish1.jpg",name:'Radish',price:45.34},
            {image:"redchilli2.jpg",name:'Red Chilli',price:490.99},
            {image:"sweetpotato2.webp",name:'Sweet Potato',price:400.21},
            {image:"cauliflower1.webp",name:'Cauli Flower',price:250.76},


        ],
        nonvegItems:[
            {image:"chicken1.jpg",name:'Chicken',price:254.78},
            {image:"mutton1.png",name:'Mutton',price:1054.54},
            {image:"fish1.jpg",name:'Fish',price:800.69},
            {image:"prawns2.jpg",name:'Prawns',price:1439.25},
            {image:"turkey1.jpg",name:'Turkey',price:1290.73},
            {image:"beef2.jpg",name:'Beef',price:400.73},
            {image:"crabs2.jpg",name:'Crab',price:500.76},
            {image:"vension3.jpg",name:'Venison',price:600.94},
            {image:"shellfish2.jpg",name:'Shellfish',price:200.38},
            {image:"eggs1.avif",name:'Eggs',price:30.73},
            {image:"clams1.jpg",name:'Clans',price:379.67},
            {image:"lobster2.jpg",name:'Lobster',price:111.11},
        ],
        fruits:[
            {image:"apple1.webp",name:'Apple',price:100.89},
            {image:"mango3.jpg",name:'Mango',price:169.96},
            {image:"papaya1.jpg",name:'Papaya',price:60.25},
            {image:"pineapple1.jpg",name:'Pine Apple',price:200.76},
            {image:"guava1.jpg",name:'Guava',price:40.89},
            {image:"grapes1.jpg",name:'Grapes',price:80.54},
            {image:"banana1.jpg",name:'Banana',price:120.56},
            {image:"cherry1.jpg",name:'Cherry',price:55.68},
            {image:"mulberry1.jpg",name:'Mul Berry',price:150.45},
            {image:"orange1.avif",name:'Orange',price:176.59},
            {image:"straberry3.jpg",name:'Straberry',price:320.98},
            {image:"watermelon.jpeg",name:'Water Melon',price:90.23},
            {image:"berry2.jpg",name:'Berry',price:250.98},
            {image:"avocado1.jpg",name:'Avocado',price:155.68},
            {image:"blackpulm1.jpg",name:'Black Pulm',price:359.89},
            {image:"grapefruit1.jpg",name:'Grap Fruit',price:95.60},
            {image:"greenpulm1.jpg",name:'Green Pulm',price:59.96},
            {image:"peach1.jpg",name:'Peach',price:225.25},
            {image:"pears1.jpg",name:'Pears',price:67.58},
            {image:"nectarine.jpeg",name:'Nectarine',price:367.85},
            {image:"chickoo1.jpg",name:'Chikoo',price:89.88},    
        ],
        milk:[
          {image:"m4.jpg",name:'Milk',price:30.89},
          {image:"butter1.jpg",name:'Butter',price:100.96},
          {image:"curd1.webp",name:'Curd',price:50.25},
          {image:"ghee1.jpg",name:'Ghee',price:250.25},
          {image:"cottage-cheese.jpg",name:'Cottege-Cheese',price:100.76},
          {image:"cheese4.webp",name:'Cheese',price:79.88},
          {image:"cream2.webp",name:'Cream',price:125.25},
          {image:"custered2.jpg",name:'Custered',price:267.58},
          {image:"evaporetedmilk.webp",name:'Evaporered-Milk',price:167.85},
          {image:"flavoredmilk1.jpg",name:'Flavored-Milk',price:89.88}, 
          {image:"kefir1.jpg",name:'Kefir',price:225.25},
          {image:"mascarpone1.jpg",name:'Mascarpone',price:367.58}, 
          {image:"buttermilk2.webp",name:'Butter-Milk',price:55.68},
          {image:"milk-powder.jpg",name:'Milk-Powder',price:90.23},
          {image:"milkshake1.jpg",name:'Milk-Shake',price:250.98},
          {image:"paneer1.avif",name:'Paneer',price:155.68},

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
