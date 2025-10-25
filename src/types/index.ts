export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  stock: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface User {
  id: number;
  name: string;
  role: 'admin' | 'customer';
<<<<<<< HEAD
}
=======
}

>>>>>>> ab860c0da138d4a83ee7a72361e12c2b489401cc
