## Endpoints

#### **All values are strings unless otherwise noted**

#### **All values are required unless otherwise noted**

**Unprotected Endpoints (token needed)**
------------------------------------------

###Register

### POST  https://build-african-marketplace.herokuapp.com/api/auth/register/customer
* Endpoint to register a new customer
* Request example:

```
{
  customers_name: "Example User", 
  customers_plot: "165", 
  customers_phone_number: "164-1535-1256", 
  customers_email: "examplecustomer@gmail.com", 
  password: "password", 
  due_date: "2019-12-15" <------ OPTIONAL
}
```

* Returns new customer:

```
{
  id: "", 
  username (unique): "", 
  password: "", 
  name: "", 
  first name: "", 
  last name: "", 
  email address: ""
}
```

### POST  https://build-african-marketplace.herokuapp.com/api/auth/register/seller
* Endpoint to register a new seller
* Request example:

```
{
  sellers_name: "Example Driver", 
  sellers_plot: "126", 
  sellers_phone_number: "455-743-4567",
  sellers_email: "exampleseller@gmail.com",
  password: "password",
  about_me:"test1", // <------ OPTIONAL
  sellers_price: 50 // <-------- INTEGER
}
```

* Returns new seller:

```
{
   id: "", 
   username (unique): "", 
   password: "", 
   name: "", 
   first name: "", 
   last name: "", 
   email address: "",
   about me: ""
}
```

###Login

### POST  https://build-african-marketplace.herokuapp.com/api/auth/login/customer
* Endpoint to login as a customer
* Request example: 

```
{
  customers_email: "examplecustomer@gmail.com",
  password: "password"
}
```

* Returns id and token:

```
{ 
  id: 4,
  username: "", 
  password: "", 
  name: "", 
  first name: "", 
  last name: "", 
  email address: "",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwibmFtZSI6IkV4YW1wbGUgVXNlciIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNTc0MTE1OTY2LCJleHAiOjE1NzQyMDIzNjZ9.5SMRUcR0BzS6I4Bceh7UuuTzvU0IBEGI6y2QQ_jKkJM"
}
```

### POST  https://build-african-marketplace.herokuapp.com/api/auth/login/seller
* Endpoint to login as a seller
* Request example:


```
{
  sellers_email: "exampleseller@gmail.com",
  password: "password"
}
```

* Returns id and token:

```
{ 
  id: 4,
  username: "", 
  password: "", 
  name: "", 
  first name: "", 
  last name: "", 
  email address: "", 
  about me: "",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwibmFtZSI6IkV4YW1wbGUgRHJpdmVyIiwicm9sZSI6ImRyaXZlciIsImlhdCI6MTU3NDExNjIxMywiZXhwIjoxNTc0MjAyNjEzfQ.lza43m8Zg8uAm1hg2Na4g3EKtcb_tDlYbG3zo6GqSSc"
}
```

**Protected Endpoints (token needed)**
------------------------------------------

### POST https://build-african-marketplace.herokuapp.com/api/items

* Create items
* Return example: 

```
{
    item id: "", 
    name: "", 
    description: "", 
    price: "", 
    currency: "", 
    category id: "", 
    category name: "", 
    market id: ""
}
```

### GET https://build-african-marketplace.herokuapp.com/api/items

* Retrieve all items
* Return example: 

```
[
    {
        item id: "", 
        name: "", 
        description: "", 
        price: "", 
        currency: "", 
        category id: "", 
        category name: ""
    }
]
```

### GET https://build-african-marketplace.herokuapp.com/api/:itemid || api/items/:sellerid || api/items/:username

* Retrieve items from a specified seller
* Return example: 

```
{
  item id: "", 
  name: "", 
  description: "", 
  price: "", 
  currency: "", 
  category id: "", 
  category name: "", 
  seller id: "", 
  market id: ""
}
```

### GET https://build-african-marketplace.herokuapp.com/api/categories

* Retrieve all categories
* Return example: 

```
[
    {
      category id: "", 
      name: "" 
    }
]
```

### GET https://build-african-marketplace.herokuapp.com/api/locations

* Retrieve market locations
* Return example: 

```
[
    {
        location id: "", 
        address: "", 
        city: "", 
        state: "", 
        postal code: ""
    }
]
```

### PUT https://build-african-marketplace.herokuapp.com/api/:sellerid || api/:username

* Edit/Update user (seller) info
* Return example: 

```
{
    seller id: "", 
    username (unique): "", 
    password: "", 
    first name: "", 
    last name: "", 
    email address: "", 
    about me: ""
}
```

### PUT https://build-african-marketplace.herokuapp.com/api/:itemid

* Edit/Update item info
* Return example: 

```
{
    item id: "", 
    name: "", 
    description: "", 
    price: "", 
    currency: "", 
    category id: "", 
    category name: "", 
    seller id: "", 
    market id: ""
}
```

### DELETE https://build-african-marketplace.herokuapp.com/api/:sellerid || api/:username

* Remove user (seller) account
* Return example: 

```
{
    seller id: "", 
    username (unique): "", 
    password: "", 
    first name: "", 
    last name: "", 
    email address: "", 
    about me: ""
}
```

### DELETE https://build-african-marketplace.herokuapp.com/api/:itemid

* Remove item listing
* Return example: 

```
{
    item id: "", 
    name: "", 
    description: "", 
    price: "", 
    currency: "", 
    category id: "", 
    category name: "", 
    seller id: "", 
    market id: ""
}
```
