interface IUser {
  name: string;
  age: number;
}

interface IBooks {
  title: string;
  price: number;
}

interface ICart {
  userName: string;
  bookName: string;
}

interface IUserCartService {
  user: IUser;

  book: IBooks;

  cart: ICart;
}

function login(params: IUserCartService["user"]) {
  console.log(params);
}

function searchBook(params: IUserCartService["book"]) {
  console.log(params);
}

function addBookCart(params: IUserCartService["cart"]) {
  console.log(params);
}

login({ name: "hi", age: 25 });
searchBook({ title: "책책", price: 19000 });
addBookCart({ userName: "hi", bookName: "책책" });
